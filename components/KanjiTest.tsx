
import React, { useState, useMemo, useEffect, useCallback } from 'react';
import { PRESET_LESSONS } from '../data/presets';

interface CardData {
  phrase: string;
  reading: string;
  meaning: string;
  category: string;
}

// Support for Web Speech API
const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

const KanjiTest: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [direction, setDirection] = useState<'left' | 'right' | null>(null);
  const [knownCount, setKnownCount] = useState(0);
  const [isListening, setIsListening] = useState(false);
  const [voiceFeedback, setVoiceFeedback] = useState<string | null>(null);

  // Flatten all explanations from preset lessons for the deck
  const deck: CardData[] = useMemo(() => {
    const all = PRESET_LESSONS.flatMap(lesson => 
      lesson.explanations.map(exp => ({
        ...exp,
        category: lesson.category || 'Gral'
      }))
    );
    return all.sort(() => Math.random() - 0.5);
  }, []);

  const handleAction = useCallback((dir: 'left' | 'right') => {
    setDirection(dir);
    if (dir === 'right') setKnownCount(prev => prev + 1);
    
    setTimeout(() => {
      setCurrentIndex(prev => (prev + 1) % deck.length);
      setIsFlipped(false);
      setDirection(null);
      setVoiceFeedback(null);
    }, 300);
  }, [deck.length]);

  const currentCard = deck[currentIndex];

  // Voice Recognition Logic
  const startListening = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent card flip on mic tap
    if (!SpeechRecognition) {
      alert("Tu navegador no soporta reconocimiento de voz.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = 'ja-JP';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => {
      setIsListening(true);
      setVoiceFeedback("Escuchando...");
    };

    recognition.onresult = (event: any) => {
      const speechToText = event.results[0][0].transcript;
      console.log('Spoken:', speechToText);
      
      // Compare with the reading (currentCard.reading)
      // We normalize strings to remove small variations
      const normalizedSpeech = speechToText.replace(/[、。！？\s]/g, '');
      const normalizedReading = currentCard.reading.replace(/[、。！？\s]/g, '');

      if (normalizedSpeech === normalizedReading || currentCard.phrase.includes(normalizedSpeech)) {
        setVoiceFeedback("¡Correcto! ✨");
        setIsFlipped(true);
        setTimeout(() => handleAction('right'), 1500);
      } else {
        setVoiceFeedback(`Dijiste: "${speechToText}"`);
      }
    };

    recognition.onerror = () => {
      setIsListening(false);
      setVoiceFeedback("Error al escuchar");
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.start();
  };

  if (deck.length === 0) return null;

  return (
    <div className="flex flex-col h-full bg-slate-50 p-6 pt-12 max-w-lg mx-auto overflow-hidden">
      <header className="mb-10 text-center">
        <h1 className="text-3xl font-black text-slate-900 tracking-tight">Tarjetas 🎴</h1>
        <div className="flex justify-center items-center mt-2 space-x-4 text-xs font-bold uppercase tracking-widest text-slate-400">
          <span>Domino: <span className="text-blue-600">{knownCount}</span></span>
          <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
          <span>Carta: {currentIndex + 1} / {deck.length}</span>
        </div>
      </header>

      <div className="flex-1 relative perspective-1000 flex items-center justify-center">
        {/* Background Deck Visual */}
        <div className="absolute w-full max-w-[320px] aspect-[3/4] bg-white rounded-[3rem] shadow-sm border border-slate-200 translate-y-4 scale-95 opacity-50"></div>
        <div className="absolute w-full max-w-[320px] aspect-[3/4] bg-white rounded-[3rem] shadow-sm border border-slate-200 translate-y-2 scale-98 opacity-80"></div>

        {/* Current Card */}
        <div 
          onClick={() => setIsFlipped(!isFlipped)}
          className={`relative w-full max-w-[320px] aspect-[3/4] cursor-pointer transition-all duration-500 transform-style-3d 
            ${isFlipped ? 'rotate-y-180' : ''} 
            ${direction === 'left' ? '-translate-x-[150%] -rotate-12 opacity-0' : ''}
            ${direction === 'right' ? 'translate-x-[150%] rotate-12 opacity-0' : ''}
          `}
        >
          {/* Front (Kanji) */}
          <div className={`absolute inset-0 backface-hidden bg-white rounded-[3rem] shadow-2xl shadow-blue-100 border-4 flex flex-col items-center justify-center p-8 transition-colors ${isListening ? 'border-blue-500 ring-4 ring-blue-100' : 'border-white'}`}>
            <span className="absolute top-8 left-8 text-[10px] font-black text-blue-500 bg-blue-50 px-3 py-1 rounded-full uppercase tracking-tighter">
              {currentCard.category}
            </span>
            
            {/* Mic Button on the front */}
            <button 
              onClick={startListening}
              className={`absolute top-6 right-6 w-12 h-12 rounded-full flex items-center justify-center transition-all ${isListening ? 'bg-blue-600 text-white animate-pulse' : 'bg-slate-50 text-slate-400 hover:bg-slate-100'}`}
            >
              {isListening ? (
                <div className="flex space-x-0.5">
                  <div className="w-1 h-4 bg-white rounded-full animate-bounce"></div>
                  <div className="w-1 h-6 bg-white rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                  <div className="w-1 h-3 bg-white rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                </div>
              ) : (
                <span className="text-xl">🎙️</span>
              )}
            </button>

            <div className="text-6xl font-black text-slate-900 leading-none tracking-tighter text-center">
              {currentCard.phrase}
            </div>

            {voiceFeedback && (
              <div className={`mt-6 px-4 py-2 rounded-2xl text-xs font-bold ${voiceFeedback.includes('Correcto') ? 'bg-green-100 text-green-600' : 'bg-slate-100 text-slate-500'}`}>
                {voiceFeedback}
              </div>
            )}
            
            {!voiceFeedback && (
              <p className="mt-12 text-slate-300 text-[10px] font-bold uppercase tracking-widest text-center">Toca para voltear o usa el mic para leer</p>
            )}
          </div>

          {/* Back (Meaning) */}
          <div className="absolute inset-0 backface-hidden bg-blue-600 rotate-y-180 rounded-[3rem] shadow-2xl border-4 border-white flex flex-col items-center justify-center p-8 text-white">
            <div className="text-2xl font-bold mb-2 opacity-80">{currentCard.reading}</div>
            <div className="text-3xl font-black text-center leading-tight mb-8">
              {currentCard.meaning}
            </div>
            <div className="w-12 h-1 bg-white/30 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-12 flex justify-center items-center space-x-6 pb-12">
        <button 
          onClick={() => handleAction('left')}
          className="w-20 h-20 rounded-full bg-white border-2 border-slate-100 shadow-xl shadow-red-100 flex items-center justify-center text-3xl active:scale-90 transition-transform"
        >
          ❌
        </button>
        <button 
          onClick={() => setIsFlipped(!isFlipped)}
          className="w-16 h-16 rounded-full bg-slate-900 shadow-xl flex items-center justify-center text-xl active:scale-90 transition-transform"
        >
          🔄
        </button>
        <button 
          onClick={() => handleAction('right')}
          className="w-20 h-20 rounded-full bg-white border-2 border-slate-100 shadow-xl shadow-blue-100 flex items-center justify-center text-3xl active:scale-90 transition-transform"
        >
          ✅
        </button>
      </div>

      <style>{`
        .perspective-1000 { perspective: 1000px; }
        .transform-style-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
      `}</style>
    </div>
  );
};

export default KanjiTest;
