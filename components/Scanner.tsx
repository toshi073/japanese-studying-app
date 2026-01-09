
import React, { useState, useRef } from 'react';
import { analyzeImage } from '../services/geminiService';
import { ScannedLesson } from '../types';

interface ScannerProps {
  onLessonCreated: (lesson: ScannedLesson) => void;
}

const Scanner: React.FC<ScannerProps> = ({ onLessonCreated }) => {
  const [loading, setLoading] = useState(false);
  const [loadingStep, setLoadingStep] = useState('');
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Show preview
    const reader = new FileReader();
    reader.onloadend = () => setPreviewUrl(reader.result as string);
    reader.readAsDataURL(file);

    setLoading(true);
    setLoadingStep('Reconociendo caracteres (OCR)...');

    try {
      const base64 = await toBase64(file);
      setLoadingStep('Analizando gramática y contexto...');
      const lesson = await analyzeImage(base64);
      setLoadingStep('¡Listo!');
      onLessonCreated(lesson);
    } catch (error) {
      console.error(error);
      alert('Error al procesar la imagen. Inténtalo de nuevo.');
      setLoading(false);
      setPreviewUrl(null);
    }
  };

  const toBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const result = reader.result as string;
        resolve(result.split(',')[1]);
      };
      reader.onerror = error => reject(error);
    });
  };

  return (
    <div className="min-h-full flex flex-col items-center justify-center p-6 bg-slate-900 text-white">
      {!loading ? (
        <div className="text-center w-full max-w-sm">
          <div className="mb-8 p-6 bg-white/5 rounded-full border-2 border-dashed border-white/20">
            <div className="text-6xl mb-4">📄</div>
            <h2 className="text-xl font-bold mb-2">Toma una foto</h2>
            <p className="text-slate-400 text-sm">Enfoca el texto en japonés que quieras aprender.</p>
          </div>

          <button
            onClick={() => fileInputRef.current?.click()}
            className="w-full bg-blue-600 py-4 rounded-2xl font-bold text-lg shadow-xl active:scale-95 transition-all mb-4"
          >
            Abrir Cámara / Galería
          </button>
          
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            capture="environment"
            className="hidden"
            onChange={handleFileChange}
          />
          
          <p className="text-xs text-slate-500 uppercase tracking-widest">Ideal para: Menús, Avisos, Correo, Apps</p>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center space-y-8 animate-pulse">
          {previewUrl && (
            <div className="w-48 h-48 rounded-2xl overflow-hidden border-4 border-blue-500 shadow-2xl">
              <img src={previewUrl} alt="Preview" className="w-full h-full object-cover opacity-50" />
            </div>
          )}
          <div className="text-center">
            <div className="inline-block w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"></div>
            <h3 className="text-xl font-bold mb-1">IA está trabajando</h3>
            <p className="text-blue-400 font-medium">{loadingStep}</p>
          </div>
          <div className="max-w-xs text-center text-slate-400 text-sm">
            Sabías que: Estamos analizando no solo las palabras, sino el nivel de cortesía y contexto cultural.
          </div>
        </div>
      )}
    </div>
  );
};

export default Scanner;
