
import React, { useState, useRef, useEffect } from 'react';
import { connectLiveAgent, decode, decodeAudioData, encode } from '../services/geminiService';
import { ChatMessage } from '../types';

const AgentRoom: React.FC = () => {
  const [isLive, setIsLive] = useState(false);
  const [transcription, setTranscription] = useState('');
  const [status, setStatus] = useState('Listo para conversar');
  const [error, setError] = useState<string | null>(null);

  const audioContextRef = useRef<AudioContext | null>(null);
  const nextStartTimeRef = useRef(0);
  const sessionRef = useRef<any>(null);
  const sourcesRef = useRef<Set<AudioBufferSourceNode>>(new Set());

  // Input Audio nodes
  const scriptProcessorRef = useRef<ScriptProcessorNode | null>(null);

  const startLiveSession = async () => {
    try {
      setError(null);
      setStatus('Conectando...');
      
      const inputCtx = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 16000 });
      const outputCtx = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
      audioContextRef.current = outputCtx;
      
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      
      const sessionPromise = connectLiveAgent({
        onopen: () => {
          setIsLive(true);
          setStatus('En vivo - Habla ahora');
          
          const source = inputCtx.createMediaStreamSource(stream);
          const scriptProcessor = inputCtx.createScriptProcessor(4096, 1, 1);
          scriptProcessorRef.current = scriptProcessor;
          
          scriptProcessor.onaudioprocess = (e) => {
            const inputData = e.inputBuffer.getChannelData(0);
            const l = inputData.length;
            const int16 = new Int16Array(l);
            for (let i = 0; i < l; i++) {
              int16[i] = inputData[i] * 32768;
            }
            const base64 = encode(new Uint8Array(int16.buffer));
            
            sessionPromise.then((session) => {
              session.sendRealtimeInput({
                media: { data: base64, mimeType: 'audio/pcm;rate=16000' }
              });
            });
          };
          
          source.connect(scriptProcessor);
          scriptProcessor.connect(inputCtx.destination);
        },
        onmessage: async (message: any) => {
          if (message.serverContent?.modelTurn?.parts[0]?.inlineData?.data) {
            const base64 = message.serverContent.modelTurn.parts[0].inlineData.data;
            const buffer = await decodeAudioData(decode(base64), outputCtx, 24000, 1);
            
            const source = outputCtx.createBufferSource();
            source.buffer = buffer;
            source.connect(outputCtx.destination);
            
            nextStartTimeRef.current = Math.max(nextStartTimeRef.current, outputCtx.currentTime);
            source.start(nextStartTimeRef.current);
            nextStartTimeRef.current += buffer.duration;
            sourcesRef.current.add(source);
            source.onended = () => sourcesRef.current.delete(source);
          }
          
          if (message.serverContent?.interrupted) {
            sourcesRef.current.forEach(s => s.stop());
            sourcesRef.current.clear();
            nextStartTimeRef.current = 0;
          }
        },
        onerror: (e: any) => {
          console.error(e);
          setError('Error de conexión. Inténtalo de nuevo.');
          stopLiveSession();
        },
        onclose: () => {
          stopLiveSession();
        }
      });
      
      sessionRef.current = await sessionPromise;
      
    } catch (err) {
      console.error(err);
      setError('No se pudo acceder al micrófono.');
      setStatus('Error');
    }
  };

  const stopLiveSession = () => {
    setIsLive(false);
    setStatus('Sesión finalizada');
    if (sessionRef.current) {
      // sessionRef.current.close(); // Method not always available depending on SDK wrapper version
      sessionRef.current = null;
    }
    if (scriptProcessorRef.current) {
      scriptProcessorRef.current.disconnect();
    }
    sourcesRef.current.forEach(s => s.stop());
    sourcesRef.current.clear();
  };

  return (
    <div className="flex flex-col h-full bg-slate-900 text-white overflow-hidden">
      {/* Header */}
      <div className="p-6 pt-12 text-center">
        <div className={`w-24 h-24 rounded-full mx-auto flex items-center justify-center text-5xl mb-4 transition-all duration-500 ${
          isLive ? 'bg-blue-600 shadow-[0_0_50px_rgba(37,99,235,0.5)] scale-110' : 'bg-slate-800'
        }`}>
          {isLive ? '🎙️' : '🤖'}
        </div>
        <h2 className="text-2xl font-bold mb-1">Tutor de Voz Real</h2>
        <p className={`text-sm font-medium ${isLive ? 'text-blue-400' : 'text-slate-500'}`}>
          {status}
        </p>
      </div>

      {/* Main interaction area */}
      <div className="flex-1 flex flex-col items-center justify-center p-8 text-center space-y-8">
        {!isLive ? (
          <div className="max-w-xs space-y-6">
            <p className="text-slate-400">
              Practica tu japonés avanzado mediante voz. El tutor responderá en tiempo real y te ayudará con matices de nivel N2/N1.
            </p>
            <button
              onClick={startLiveSession}
              className="w-full bg-blue-600 hover:bg-blue-500 py-4 rounded-3xl font-bold text-lg shadow-xl shadow-blue-900/20 active:scale-95 transition-all"
            >
              Iniciar Conversación
            </button>
            {error && <p className="text-red-400 text-sm">{error}</p>}
          </div>
        ) : (
          <div className="w-full max-w-sm space-y-12">
            <div className="flex justify-center space-x-2">
              {[0, 1, 2, 3].map(i => (
                <div 
                  key={i} 
                  className="w-2 h-12 bg-blue-500 rounded-full animate-pulse"
                  style={{ animationDelay: `${i * 0.15}s`, height: `${24 + Math.random() * 40}px` }}
                ></div>
              ))}
            </div>
            
            <p className="text-xl font-medium text-blue-100 animate-pulse">
              Escuchando tu japonés...
            </p>

            <button
              onClick={stopLiveSession}
              className="w-full bg-red-500/10 border border-red-500/50 text-red-500 py-4 rounded-3xl font-bold hover:bg-red-500/20 transition-all"
            >
              Detener Sesión
            </button>
          </div>
        )}
      </div>

      {/* Footer Instructions */}
      <div className="p-8 text-center text-xs text-slate-500 uppercase tracking-widest bg-slate-950/50">
        Compatible con iOS y Android • Se recomienda usar auriculares
      </div>
    </div>
  );
};

export default AgentRoom;
