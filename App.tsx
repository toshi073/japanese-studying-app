
import React, { useState } from 'react';
import { AppView, ScannedLesson } from './types';
import Dashboard from './components/Dashboard';
import Scanner from './components/Scanner';
import Library from './components/Library';
import WritingRoom from './components/WritingRoom';
import AgentRoom from './components/AgentRoom';
import LessonDetail from './components/LessonDetail';
import KanjiTest from './components/KanjiTest';
import Importer from './components/Importer';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<AppView>(AppView.DASHBOARD);
  const [selectedLesson, setSelectedLesson] = useState<ScannedLesson | null>(null);
  const [history, setHistory] = useState<ScannedLesson[]>([]);

  const NavItem = ({ view, label, icon }: { view: AppView, label: string, icon: string }) => (
    <button
      onClick={() => {
        setSelectedLesson(null);
        setCurrentView(view);
      }}
      className={`flex flex-col items-center justify-center w-full py-2 transition-all ${
        currentView === view && !selectedLesson ? 'text-blue-600 scale-110' : 'text-slate-400'
      }`}
    >
      <span className="text-2xl mb-1">{icon}</span>
      <span className="text-[9px] font-bold uppercase tracking-tighter">{label}</span>
    </button>
  );

  const handleLessonCreated = (lesson: ScannedLesson) => {
    setHistory(prev => [lesson, ...prev]);
    setSelectedLesson(lesson);
  };

  return (
    <div className="flex flex-col h-[100dvh] bg-slate-50 overflow-hidden">
      <main className="flex-1 overflow-y-auto pb-24">
        {selectedLesson ? (
          <LessonDetail lesson={selectedLesson} onBack={() => setSelectedLesson(null)} />
        ) : (
          <>
            {currentView === AppView.DASHBOARD && (
              <Dashboard 
                history={history} 
                onSelectLesson={setSelectedLesson} 
                onStartScan={() => setCurrentView(AppView.SCANNER)}
                onGoToLibrary={() => setCurrentView(AppView.LIBRARY)}
                onStartTest={() => setCurrentView(AppView.KANJI_TEST)}
                onStartImport={() => setCurrentView(AppView.IMPORTER)}
              />
            )}
            {currentView === AppView.SCANNER && (
              <Scanner onLessonCreated={handleLessonCreated} />
            )}
            {currentView === AppView.IMPORTER && (
              <Importer onLessonCreated={handleLessonCreated} onBack={() => setCurrentView(AppView.DASHBOARD)} />
            )}
            {currentView === AppView.LIBRARY && (
              <Library onSelectLesson={setSelectedLesson} />
            )}
            {currentView === AppView.WRITING && (
              <WritingRoom />
            )}
            {currentView === AppView.AGENT && (
              <AgentRoom />
            )}
            {currentView === AppView.KANJI_TEST && (
              <KanjiTest />
            )}
          </>
        )}
      </main>

      <nav className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-2xl border-t border-slate-200 safe-area-bottom z-50">
        <div className="flex justify-around items-center h-16 px-2">
          <NavItem view={AppView.DASHBOARD} label="Inicio" icon="🏠" />
          <NavItem view={AppView.LIBRARY} label="Biblioteca" icon="📖" />
          <NavItem view={AppView.KANJI_TEST} label="Kanjis" icon="🎴" />
          <NavItem view={AppView.WRITING} label="Escritura" icon="✍️" />
          <NavItem view={AppView.AGENT} label="Voz AI" icon="🎙️" />
        </div>
      </nav>
    </div>
  );
};

export default App;
