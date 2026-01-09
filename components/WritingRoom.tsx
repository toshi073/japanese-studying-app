
import React, { useState } from 'react';
import { correctWriting, generateSpeech, playPCM } from '../services/geminiService';
import { WritingCorrection } from '../types';

const WritingRoom: React.FC = () => {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const [correction, setCorrection] = useState<WritingCorrection | null>(null);

  const handleCorrect = async () => {
    if (!text.trim()) return;
    setLoading(true);
    try {
      const result = await correctWriting(text);
      setCorrection(result);
    } catch (error) {
      console.error(error);
      alert('Error al corregir. Inténtalo de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  const playAudio = async (text: string) => {
    try {
      const audio = await generateSpeech(text);
      await playPCM(audio);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="p-6 pt-12 max-w-lg mx-auto pb-32">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Escritura Pro ✍️</h1>
        <p className="text-slate-500 font-medium">Practica correos, mensajes o notas.</p>
      </header>

      <div className="bg-white rounded-3xl p-5 shadow-sm border border-slate-100 mb-6">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Escribe en japonés aquí..."
          className="w-full h-40 resize-none outline-none text-xl leading-relaxed text-slate-800 placeholder:text-slate-300"
        />
        <div className="flex justify-between items-center mt-4">
          <span className="text-xs text-slate-400 font-medium">{text.length} caracteres</span>
          <button
            onClick={handleCorrect}
            disabled={loading || !text.trim()}
            className="bg-blue-600 text-white px-6 py-2 rounded-full font-bold shadow-lg shadow-blue-100 disabled:opacity-50 transition-all active:scale-95"
          >
            {loading ? 'Corrigiendo...' : 'Corregir'}
          </button>
        </div>
      </div>

      {correction && (
        <div className="space-y-6 animate-in slide-in-from-bottom-4 duration-500">
          <div className="bg-green-50 border border-green-100 rounded-3xl p-6">
            <div className="flex justify-between items-center mb-3">
              <span className="text-[10px] font-bold text-green-600 uppercase tracking-widest">Sugerencia Natural</span>
              <button 
                onClick={() => playAudio(correction.corrected)}
                className="text-green-600 font-bold text-sm"
              >
                🔊 Oír
              </button>
            </div>
            <p className="text-xl font-bold text-slate-800 leading-relaxed mb-4">{correction.corrected}</p>
            <div className="bg-white/60 p-3 rounded-xl mb-4">
               <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Nivel de cortesía</span>
               <p className="text-sm font-bold text-slate-700">{correction.politenessLevel}</p>
            </div>
          </div>

          <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm">
            <h3 className="text-lg font-bold text-slate-800 mb-3 flex items-center">
              <span className="mr-2">👨‍🏫</span> Explicación
            </h3>
            <p className="text-slate-600 leading-relaxed whitespace-pre-wrap">{correction.explanation}</p>
          </div>
        </div>
      )}

      {/* Templates */}
      {!correction && !loading && (
        <section className="mt-8">
          <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Sugerencias</h3>
          <div className="flex flex-wrap gap-2">
            {['Solicitud de vacaciones', 'Error en el pedido', 'Duda bancaria', 'Pregunta al casero'].map(item => (
              <button 
                key={item}
                onClick={() => setText(`Sobre ${item}...`)}
                className="px-4 py-2 bg-slate-100 text-slate-600 rounded-full text-sm font-medium hover:bg-slate-200"
              >
                {item}
              </button>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default WritingRoom;
