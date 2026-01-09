
import React, { useState, useMemo } from 'react';
import { PRESET_LESSONS } from '../data/presets';
import { ScannedLesson } from '../types';

interface LibraryProps {
  onSelectLesson: (lesson: ScannedLesson) => void;
}

const Library: React.FC<LibraryProps> = ({ onSelectLesson }) => {
  const categories = ['Todos', 'Finanzas', 'Vivienda', 'Electrodomésticos'];
  const difficulties = ['Todos', 'N2', 'N1'];
  
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [activeDifficulty, setActiveDifficulty] = useState('Todos');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredAndSortedLessons = useMemo(() => {
    let result = [...PRESET_LESSONS];

    // Filter by Search Query
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      result = result.filter(l => 
        l.title.toLowerCase().includes(q) || 
        l.transcription.toLowerCase().includes(q) || 
        l.translation.toLowerCase().includes(q)
      );
    }

    // Filter by Category
    if (activeCategory !== 'Todos') {
      result = result.filter(l => l.category === activeCategory);
    }

    // Filter by Difficulty
    if (activeDifficulty !== 'Todos') {
      result = result.filter(l => l.difficulty === activeDifficulty);
    }

    // Default Sort: N2 (easier) first, then N1 (harder)
    return result.sort((a, b) => {
      const diffA = a.difficulty || 'N2';
      const diffB = b.difficulty || 'N2';
      
      if (diffA === diffB) return 0;
      return diffA === 'N2' ? -1 : 1;
    });
  }, [activeCategory, activeDifficulty, searchQuery]);

  const FilterChip = ({ 
    label, 
    isActive, 
    onClick, 
    variant = 'primary' 
  }: { 
    label: string, 
    isActive: boolean, 
    onClick: () => void,
    variant?: 'primary' | 'secondary'
  }) => (
    <button
      onClick={onClick}
      className={`px-5 py-2.5 rounded-2xl whitespace-nowrap text-xs font-black transition-all duration-300 ${
        isActive 
          ? (variant === 'primary' ? 'bg-blue-600 text-white shadow-lg shadow-blue-200 scale-105' : 'bg-indigo-600 text-white shadow-lg shadow-indigo-200 scale-105')
          : 'bg-white text-slate-500 border border-slate-100'
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className="p-6 pt-12 max-w-lg mx-auto">
      <header className="mb-6">
        <h1 className="text-4xl font-black text-slate-900 tracking-tight mb-2">Biblioteca 📚</h1>
        <p className="text-slate-500 font-medium text-sm leading-relaxed">
          Domina el japonés de la vida real. Nivel <span className="text-indigo-600 font-bold">N2</span> y <span className="text-indigo-600 font-bold">N1</span> organizado para tu progreso.
        </p>
      </header>

      {/* Search Bar */}
      <div className="relative mb-8 group">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <span className="text-slate-400 text-xl transition-colors group-focus-within:text-blue-500">🔍</span>
        </div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Buscar título o palabra..."
          className="w-full pl-12 pr-12 py-4 bg-white border border-slate-100 rounded-[2rem] shadow-sm text-slate-800 font-medium placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
        />
        {searchQuery && (
          <button 
            onClick={() => setSearchQuery('')}
            className="absolute inset-y-0 right-4 flex items-center text-slate-300 hover:text-slate-500"
          >
            <span className="text-xl">✕</span>
          </button>
        )}
      </div>

      {/* Filter Section */}
      <div className="space-y-4 mb-8">
        <div>
          <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1 mb-2 block">Categoría</span>
          <div className="flex overflow-x-auto pb-2 gap-2 no-scrollbar -mx-6 px-6">
            {categories.map(cat => (
              <FilterChip 
                key={cat} 
                label={cat} 
                isActive={activeCategory === cat} 
                onClick={() => setActiveCategory(cat)} 
              />
            ))}
          </div>
        </div>

        <div>
          <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1 mb-2 block">Nivel de Dificultad</span>
          <div className="flex gap-2">
            {difficulties.map(diff => (
              <FilterChip 
                key={diff} 
                label={diff} 
                isActive={activeDifficulty === diff} 
                onClick={() => setActiveDifficulty(diff)} 
                variant="secondary"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between mb-6 px-2">
        <h3 className="text-lg font-black text-slate-800">
          {filteredAndSortedLessons.length} Lecciones encontradas
        </h3>
      </div>

      <div className="grid gap-6">
        {filteredAndSortedLessons.map(lesson => (
          <div 
            key={lesson.id}
            onClick={() => onSelectLesson(lesson)}
            className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-slate-100 active:scale-[0.98] transition-all cursor-pointer group"
          >
            <div className="h-44 relative overflow-hidden">
              <img 
                src={lesson.originalImage} 
                alt={lesson.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              
              {/* Labels */}
              <div className="absolute top-4 left-4 flex gap-2">
                <div className="bg-white/95 backdrop-blur px-3 py-1.5 rounded-xl text-[10px] font-black text-blue-600 uppercase tracking-widest shadow-sm">
                  {lesson.category}
                </div>
                <div className={`px-3 py-1.5 rounded-xl text-[10px] font-black text-white uppercase tracking-widest shadow-sm ${
                  lesson.difficulty === 'N1' ? 'bg-red-500' : 'bg-indigo-600'
                }`}>
                  {lesson.difficulty}
                </div>
              </div>

              <div className="absolute bottom-5 left-6 right-6 text-white">
                <h3 className="font-black text-xl leading-tight">
                  {lesson.title}
                </h3>
              </div>
            </div>
            
            <div className="p-6">
              <p className="text-sm text-slate-500 line-clamp-2 italic mb-4 leading-relaxed">
                "{lesson.transcription}"
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-blue-600 font-black text-xs uppercase tracking-widest group-hover:translate-x-1 transition-transform">
                  COMENZAR <span className="ml-2">→</span>
                </div>
                <div className="flex space-x-2">
                  <span className="px-2 py-1 bg-slate-50 rounded-lg text-[10px] font-bold text-slate-400 uppercase">Lectura</span>
                  <span className="px-2 py-1 bg-slate-50 rounded-lg text-[10px] font-bold text-slate-400 uppercase">Audio</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredAndSortedLessons.length === 0 && (
        <div className="text-center py-20 bg-white rounded-[3rem] border border-dashed border-slate-200 mt-4">
          <div className="text-5xl mb-4">🔍</div>
          <p className="text-slate-900 font-black uppercase tracking-widest text-xs mb-1">Sin resultados</p>
          <p className="text-slate-400 text-[10px]">No encontramos lecciones que coincidan con tu búsqueda.</p>
          <button 
            onClick={() => { setActiveCategory('Todos'); setActiveDifficulty('Todos'); setSearchQuery(''); }}
            className="mt-6 text-blue-600 font-bold text-xs underline"
          >
            Limpiar todos los filtros
          </button>
        </div>
      )}
      
      <div className="h-20" /> {/* Spacer */}
    </div>
  );
};

export default Library;
