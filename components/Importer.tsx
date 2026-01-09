
import React, { useState, useRef } from 'react';
import { analyzeImage, analyzeText } from '../services/geminiService';
import { ScannedLesson } from '../types';

interface ImporterProps {
  onLessonCreated: (lesson: ScannedLesson) => void;
  onBack: () => void;
}

const Importer: React.FC<ImporterProps> = ({ onLessonCreated, onBack }) => {
  const [activeTab, setActiveTab] = useState<'file' | 'text'>('file');
  const [loading, setLoading] = useState(false);
  const [loadingStep, setLoadingStep] = useState('');
  const [pastedText, setPastedText] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setLoading(true);
    setLoadingStep('Procesando archivo...');

    try {
      const base64 = await toBase64(file);
      setLoadingStep('Analizando contenido con IA...');
      const lesson = await analyzeImage(base64);
      onLessonCreated(lesson);
    } catch (error) {
      console.error(error);
      alert('Error al procesar el archivo. Asegúrate de que sea una imagen legible.');
      setLoading(false);
    }
  };

  const handleTextSubmit = async () => {
    if (!pastedText.trim()) return;
    setLoading(true);
    setLoadingStep('Generando lección personalizada...');

    try {
      const lesson = await analyzeText(pastedText);
      onLessonCreated(lesson);
    } catch (error) {
      console.error(error);
      alert('Error al analizar el texto.');
      setLoading(false);
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

  if (loading) {
    return (
      <div className="min-h-full flex flex-col items-center justify-center p-8 bg-white text-slate-900">
        <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center mb-8">
          <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
        </div>
        <h3 className="text-2xl font-black mb-2">Creando tu Lección</h3>
        <p className="text-blue-600 font-bold animate-pulse">{loadingStep}</p>
        <p className="mt-8 text-slate-400 text-sm text-center max-w-xs">
          Estamos convirtiendo este material en un recurso de estudio de nivel avanzado.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-full bg-slate-50 p-6 pt-12 max-w-lg mx-auto">
      <header className="mb-8 flex items-center">
        <button onClick={onBack} className="mr-4 text-2xl">←</button>
        <div>
          <h1 className="text-3xl font-black text-slate-900">Importar 📥</h1>
          <p className="text-slate-500 font-medium text-sm">Crea material desde cualquier fuente.</p>
        </div>
      </header>

      {/* Tabs */}
      <div className="flex bg-slate-200 p-1 rounded-2xl mb-8">
        <button 
          onClick={() => setActiveTab('file')}
          className={`flex-1 py-3 rounded-xl font-bold text-sm transition-all ${activeTab === 'file' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500'}`}
        >
          Archivo / Foto
        </button>
        <button 
          onClick={() => setActiveTab('text')}
          className={`flex-1 py-3 rounded-xl font-bold text-sm transition-all ${activeTab === 'text' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500'}`}
        >
          Pegar Texto
        </button>
      </div>

      {activeTab === 'file' ? (
        <div className="space-y-6">
          <div 
            onClick={() => fileInputRef.current?.click()}
            className="bg-white border-4 border-dashed border-slate-200 rounded-[3rem] p-12 text-center cursor-pointer hover:border-blue-300 hover:bg-blue-50/30 transition-all group"
          >
            <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">📄</div>
            <h3 className="text-xl font-black text-slate-800 mb-2">Selecciona un archivo</h3>
            <p className="text-slate-400 text-sm">Imágenes (JPG, PNG) o capturas de pantalla de manuales y apps.</p>
            <input 
              ref={fileInputRef}
              type="file" 
              accept="image/*" 
              className="hidden" 
              onChange={handleFileChange}
            />
          </div>

          <div className="bg-indigo-50 p-6 rounded-3xl border border-indigo-100">
            <h4 className="font-bold text-indigo-900 mb-2 flex items-center">
              <span className="mr-2">💡</span> Tip Pro
            </h4>
            <p className="text-indigo-700 text-sm leading-relaxed">
              Puedes subir capturas de pantalla de errores en aplicaciones bancarias o manuales de instrucciones de electrodomésticos.
            </p>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="bg-white rounded-[2.5rem] p-6 shadow-sm border border-slate-100">
            <textarea 
              value={pastedText}
              onChange={(e) => setPastedText(e.target.value)}
              placeholder="Pega aquí el texto en japonés que no entiendes..."
              className="w-full h-64 resize-none outline-none text-lg text-slate-800 placeholder:text-slate-300 leading-relaxed"
            />
          </div>
          <button 
            onClick={handleTextSubmit}
            disabled={!pastedText.trim()}
            className="w-full bg-blue-600 text-white py-5 rounded-[2rem] font-black text-lg shadow-xl shadow-blue-100 active:scale-95 transition-all disabled:opacity-50"
          >
            Generar Lección
          </button>
        </div>
      )}
    </div>
  );
};

export default Importer;
