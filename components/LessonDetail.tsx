
import React, { useState } from 'react';
import { ScannedLesson } from '../types';
import { generateSpeech, playPCM } from '../services/geminiService';

interface LessonDetailProps {
  lesson: ScannedLesson;
  onBack: () => void;
}

const LessonDetail: React.FC<LessonDetailProps> = ({ lesson, onBack }) => {
  const [playing, setPlaying] = useState<string | null>(null);

  const handlePlayAudio = async (text: string) => {
    try {
      setPlaying(text);
      const audioData = await generateSpeech(text);
      await playPCM(audioData);
    } catch (error) {
      console.error(error);
    } finally {
      setPlaying(null);
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <div className="sticky top-0 bg-white/90 backdrop-blur-md z-30 p-4 flex items-center border-b border-slate-200">
        <button onClick={onBack} className="w-10 h-10 flex items-center justify-center text-slate-800 text-2xl">←</button>
        <div className="flex-1 text-center px-4">
          <h2 className="font-bold text-slate-800 truncate text-sm">{lesson.title}</h2>
          <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest">{lesson.category}</span>
        </div>
        <div className="w-10"></div>
      </div>

      <div className="p-6 max-w-xl mx-auto space-y-8 pb-32">
        {/* Original Photo Section */}
        <section>
          <div className="rounded-[2.5rem] overflow-hidden shadow-2xl mb-4 h-56 border-4 border-white">
            <img src={lesson.originalImage} alt="Original" className="w-full h-full object-cover" />
          </div>
        </section>

        {/* Transcription & Translation */}
        <section className="space-y-4">
          <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-100">
            <div className="flex justify-between items-start mb-4">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Texto Original</span>
              <button 
                onClick={() => handlePlayAudio(lesson.transcription)}
                disabled={!!playing}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full font-bold text-xs transition-all ${
                  playing === lesson.transcription ? 'bg-slate-100 text-slate-400' : 'bg-blue-50 text-blue-600 active:scale-95'
                }`}
              >
                <span>{playing === lesson.transcription ? '⌛' : '🔊 Escuchar'}</span>
              </button>
            </div>
            <p className="text-2xl font-bold text-slate-800 leading-relaxed mb-6 select-all">{lesson.transcription}</p>
            <div className="pt-6 border-t border-slate-50">
               <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-3">Traducción al Español</span>
               <p className="text-slate-600 leading-relaxed italic text-lg">"{lesson.translation}"</p>
            </div>
          </div>
        </section>

        {/* Detailed Kanji & Phrase Explanations */}
        <section>
          <div className="flex items-center justify-between mb-6 px-2">
            <h3 className="text-xl font-black text-slate-900 flex items-center">
              <span className="mr-3 p-2 bg-yellow-100 rounded-xl">💡</span> Glosario Completo
            </h3>
            <span className="text-[10px] font-black text-slate-400 bg-slate-100 px-3 py-1 rounded-full">
              {lesson.explanations.length} TÉRMINOS
            </span>
          </div>
          <div className="grid gap-4">
            {lesson.explanations.map((exp, idx) => (
              <div key={idx} className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 hover:border-blue-200 transition-colors group">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="text-2xl font-black text-blue-700 mb-1 group-hover:scale-105 transition-transform origin-left">
                      {exp.phrase}
                    </h4>
                    <span className="text-xs font-bold text-blue-400 bg-blue-50/50 px-2 py-1 rounded-lg">
                      {exp.reading}
                    </span>
                  </div>
                  <button 
                    onClick={() => handlePlayAudio(exp.phrase)}
                    className="p-3 bg-slate-50 text-slate-400 rounded-2xl hover:bg-blue-600 hover:text-white transition-all"
                  >
                    🔊
                  </button>
                </div>
                <div className="space-y-2 mt-4">
                  <p className="text-slate-900 font-bold text-lg">{exp.meaning}</p>
                  <p className="text-sm text-slate-500 leading-relaxed bg-slate-50 p-3 rounded-2xl border border-slate-100">
                    <span className="font-black text-[9px] text-slate-400 block mb-1 uppercase tracking-tighter">Contexto y Uso</span>
                    {exp.context}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Exercises */}
        <section className="bg-indigo-950 text-white p-8 rounded-[3rem] shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 text-6xl opacity-10 rotate-12">📝</div>
          <div className="relative z-10">
            <h3 className="text-2xl font-black mb-8 flex items-center">
               Autoevaluación
            </h3>
            <div className="space-y-10">
              {lesson.exercises.map((ex, idx) => (
                <div key={idx} className="space-y-6">
                  <div className="flex space-x-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-500/30 flex items-center justify-center font-black text-sm">
                      {idx + 1}
                    </span>
                    <p className="font-bold text-xl leading-snug">{ex.question}</p>
                  </div>
                  <div className="grid gap-3">
                    {ex.options.map((opt, oIdx) => (
                      <button 
                        key={oIdx}
                        className="w-full text-left p-5 rounded-[1.5rem] bg-white/5 hover:bg-white/10 active:bg-blue-600 transition-all border border-white/10 font-medium text-lg"
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <button 
              onClick={onBack}
              className="w-full bg-white text-indigo-950 py-5 rounded-[2rem] font-black text-lg mt-12 shadow-xl active:scale-95 transition-all"
            >
              Completar Lección
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LessonDetail;
