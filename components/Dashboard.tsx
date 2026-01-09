
import React from 'react';
import { ScannedLesson } from '../types';

interface DashboardProps {
  history: ScannedLesson[];
  onSelectLesson: (lesson: ScannedLesson) => void;
  onStartScan: () => void;
  onGoToLibrary: () => void;
  onStartTest: () => void;
  onStartImport: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ 
  history, onSelectLesson, onStartScan, onGoToLibrary, onStartTest, onStartImport
}) => {
  return (
    <div className="p-6 pt-12 max-w-lg mx-auto">
      <header className="mb-8">
        <h1 className="text-4xl font-black text-slate-900 tracking-tight">¡Hola! 👋</h1>
        <p className="text-slate-500 font-medium">Convierte el mundo en tu aula.</p>
      </header>

      {/* Main Action Grids */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div 
          onClick={onStartScan}
          className="bg-blue-600 rounded-[2.5rem] p-6 shadow-xl shadow-blue-100 cursor-pointer active:scale-95 transition-all text-white relative overflow-hidden h-44"
        >
          <div className="text-3xl mb-3">📸</div>
          <h2 className="font-black text-xl leading-tight">Cámara</h2>
          <p className="text-white/70 text-[10px] mt-1 uppercase tracking-widest font-bold">Foto Real</p>
          <span className="absolute -bottom-2 -right-2 text-7xl opacity-20">📷</span>
        </div>
        
        <div 
          onClick={onStartImport}
          className="bg-emerald-600 rounded-[2.5rem] p-6 shadow-xl shadow-emerald-100 cursor-pointer active:scale-95 transition-all text-white relative overflow-hidden h-44"
        >
          <div className="text-3xl mb-3">📥</div>
          <h2 className="font-black text-xl leading-tight">Importar</h2>
          <p className="text-white/70 text-[10px] mt-1 uppercase tracking-widest font-bold">Archivo / Texto</p>
          <span className="absolute -bottom-2 -right-2 text-7xl opacity-20">📄</span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 mb-10">
        <div 
          onClick={onGoToLibrary}
          className="bg-indigo-700 rounded-[2.5rem] p-6 shadow-xl shadow-indigo-100 cursor-pointer active:scale-[0.98] transition-all text-white flex items-center space-x-5 relative overflow-hidden"
        >
          <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-2xl">📚</div>
          <div>
            <h2 className="font-black text-xl leading-tight">Biblioteca Pro</h2>
            <p className="text-white/50 text-xs mt-1">Material N1/N2 pre-cargado</p>
          </div>
          <div className="ml-auto text-2xl opacity-50">→</div>
        </div>
      </div>

      {/* Full Width Kanji Test Button */}
      <div 
        onClick={onStartTest}
        className="bg-slate-900 rounded-[2.5rem] p-6 mb-10 shadow-xl shadow-slate-200 cursor-pointer active:scale-[0.98] transition-all text-white flex items-center space-x-5 relative overflow-hidden"
      >
        <div className="w-16 h-16 bg-white/10 rounded-3xl flex items-center justify-center text-3xl">🎴</div>
        <div>
          <h2 className="font-black text-xl leading-tight">Práctica con Flashcards</h2>
          <p className="text-white/50 text-xs mt-1">Desliza para memorizar kanjis</p>
        </div>
        <div className="ml-auto text-2xl opacity-50">→</div>
      </div>

      <section>
        <div className="flex items-center justify-between mb-4 px-2">
          <h3 className="text-xl font-black text-slate-800 tracking-tight">Tu historial</h3>
        </div>

        {history.length === 0 ? (
          <div className="bg-white rounded-[2rem] p-10 text-center border border-slate-100">
            <p className="text-slate-400 font-medium text-sm">Importa o escanea material para empezar.</p>
          </div>
        ) : (
          <div className="grid gap-3">
            {history.map(lesson => (
              <button
                key={lesson.id}
                onClick={() => onSelectLesson(lesson)}
                className="flex items-center p-4 bg-white rounded-3xl shadow-sm border border-slate-50 active:bg-slate-50 transition-colors"
              >
                <div className="w-14 h-14 rounded-2xl overflow-hidden mr-4 bg-slate-200 flex-shrink-0">
                  <img src={lesson.originalImage} alt={lesson.title} className="w-full h-full object-cover" />
                </div>
                <div className="text-left flex-1 min-w-0">
                  <h4 className="font-black text-slate-800 truncate text-base">{lesson.title}</h4>
                  <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest mt-0.5">{lesson.difficulty || 'Personal'}</p>
                </div>
                <div className="text-blue-500 font-bold ml-2">→</div>
              </button>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Dashboard;
