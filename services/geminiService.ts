
import { GoogleGenAI, Type, Modality } from "@google/genai";
import { WritingCorrection, ScannedLesson } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

const SYSTEM_INSTRUCTION = `Eres un tutor experto en japonés para hispanohablantes de nivel avanzado. 
Tu objetivo es ayudarles a entender textos complejos como manuales, aplicaciones bancarias o documentos oficiales.
Siempre proporciona explicaciones claras en español sobre matices gramaticales, niveles de cortesía (Keigo) y vocabulario específico.`;

// OCR & Analysis
export async function analyzeImage(base64Image: string): Promise<ScannedLesson> {
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: {
      parts: [
        { inlineData: { mimeType: 'image/jpeg', data: base64Image } },
        { text: "Analiza este documento japonés. Extrae el texto, tradúcelo al español y explica las frases o términos más complejos. Genera también 3 ejercicios cortos." }
      ]
    },
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          title: { type: Type.STRING },
          transcription: { type: Type.STRING },
          translation: { type: Type.STRING },
          explanations: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                phrase: { type: Type.STRING },
                reading: { type: Type.STRING },
                meaning: { type: Type.STRING },
                context: { type: Type.STRING }
              },
              required: ["phrase", "reading", "meaning", "context"]
            }
          },
          exercises: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                question: { type: Type.STRING },
                answer: { type: Type.STRING },
                options: { type: Type.ARRAY, items: { type: Type.STRING } }
              },
              required: ["question", "answer", "options"]
            }
          }
        },
        required: ["title", "transcription", "translation", "explanations", "exercises"]
      }
    }
  });

  const data = JSON.parse(response.text || '{}');
  return {
    ...data,
    id: Date.now().toString(),
    originalImage: `data:image/jpeg;base64,${base64Image}`
  };
}

// Text Analysis (for pasted content)
export async function analyzeText(text: string): Promise<ScannedLesson> {
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `Analiza el siguiente texto japonés y crea una lección de estudio avanzada: "${text}"`,
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          title: { type: Type.STRING },
          transcription: { type: Type.STRING },
          translation: { type: Type.STRING },
          explanations: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                phrase: { type: Type.STRING },
                reading: { type: Type.STRING },
                meaning: { type: Type.STRING },
                context: { type: Type.STRING }
              },
              required: ["phrase", "reading", "meaning", "context"]
            }
          },
          exercises: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                question: { type: Type.STRING },
                answer: { type: Type.STRING },
                options: { type: Type.ARRAY, items: { type: Type.STRING } }
              },
              required: ["question", "answer", "options"]
            }
          }
        },
        required: ["title", "transcription", "translation", "explanations", "exercises"]
      }
    }
  });

  const data = JSON.parse(response.text || '{}');
  return {
    ...data,
    id: Date.now().toString(),
    originalImage: "https://images.unsplash.com/photo-1544391490-449e7019790b?auto=format&fit=crop&q=80&w=400" // Placeholder for text-based lessons
  };
}

// Writing Correction
export async function correctWriting(text: string): Promise<WritingCorrection> {
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `Corrige el siguiente texto en japonés: "${text}". Explica en español qué errores cometí.`,
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          original: { type: Type.STRING },
          corrected: { type: Type.STRING },
          explanation: { type: Type.STRING },
          politenessLevel: { type: Type.STRING }
        },
        required: ["original", "corrected", "explanation", "politenessLevel"]
      }
    }
  });
  return JSON.parse(response.text || '{}');
}

// TTS
export async function generateSpeech(text: string): Promise<string> {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash-preview-tts",
    contents: [{ parts: [{ text: text }] }],
    config: {
      responseModalities: [Modality.AUDIO],
      speechConfig: {
        voiceConfig: { prebuiltVoiceConfig: { voiceName: 'Kore' } },
      },
    },
  });
  const audioData = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
  if (!audioData) throw new Error("Audio generation failed");
  return audioData;
}

// Helper Audio Functions
export function encode(bytes: Uint8Array) {
  let binary = '';
  const len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}

export function decode(base64: string) {
  const binaryString = atob(base64);
  const bytes = new Uint8Array(binaryString.length);
  for (let i = 0; i < binaryString.length; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}

export async function decodeAudioData(
  data: Uint8Array,
  ctx: AudioContext,
  sampleRate: number,
  numChannels: number,
): Promise<AudioBuffer> {
  const dataInt16 = new Int16Array(data.buffer);
  const frameCount = dataInt16.length / numChannels;
  const buffer = ctx.createBuffer(numChannels, frameCount, sampleRate);
  for (let channel = 0; channel < numChannels; channel++) {
    const channelData = buffer.getChannelData(channel);
    for (let i = 0; i < frameCount; i++) {
      channelData[i] = dataInt16[i * numChannels + channel] / 32768.0;
    }
  }
  return buffer;
}

export async function playPCM(base64Audio: string) {
  const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
  const bytes = decode(base64Audio);
  const buffer = await decodeAudioData(bytes, audioCtx, 24000, 1);
  const source = audioCtx.createBufferSource();
  source.buffer = buffer;
  source.connect(audioCtx.destination);
  source.start();
}

// Live Conversation Session
export function connectLiveAgent(callbacks: any) {
  return ai.live.connect({
    model: 'gemini-2.5-flash-native-audio-preview-12-2025',
    callbacks,
    config: {
      responseModalities: [Modality.AUDIO],
      speechConfig: {
        voiceConfig: { prebuiltVoiceConfig: { voiceName: 'Zephyr' } },
      },
      systemInstruction: "Eres un tutor de japonés avanzado para hispanohablantes. Habla en japonés natural (N2/N1). Si el usuario se queda bloqueado o comete un error grave, explica amablemente en español. Tu objetivo es mantener una conversación fluida y profesional.",
    },
  });
}
