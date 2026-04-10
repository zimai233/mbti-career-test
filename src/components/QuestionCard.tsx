import React, { useState } from 'react';
import { Question, Answer } from '../types';
import { ProgressBar } from './ProgressBar';

interface QuestionCardProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  onAnswer: (answer: Answer) => void;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  questionNumber,
  totalQuestions,
  onAnswer,
}) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleSelect = (index: number, value: number) => {
    setSelectedIndex(index);
    setTimeout(() => {
      onAnswer({ questionId: question.id, value });
      setSelectedIndex(null);
    }, 300);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-cosmic-950 via-cosmic-900 to-cosmic-950" />
      
      <div className="relative z-10 w-full max-w-2xl">
        <ProgressBar current={questionNumber} total={totalQuestions} />

        <div className="bg-cosmic-950/40 backdrop-blur-xl border border-cosmic-700/30 rounded-3xl p-8 md:p-12 animate-slide-up">
          <div className="text-center mb-8">
            <span className="inline-block px-4 py-1 bg-cosmic-800/50 text-cosmic-300 text-sm rounded-full mb-4">
              问题 {questionNumber}
            </span>
            <h2 className="font-display text-2xl md:text-3xl text-white leading-relaxed">
              {question.text}
            </h2>
          </div>

          <div className="space-y-3">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleSelect(index, option.value)}
                disabled={selectedIndex !== null}
                className={`
                  w-full p-4 text-left rounded-xl border transition-all duration-300 font-body
                  ${selectedIndex === index 
                    ? 'bg-cosmic-600/50 border-cosmic-400 text-white scale-[1.02]' 
                    : 'bg-cosmic-900/30 border-cosmic-700/30 text-cosmic-200 hover:bg-cosmic-800/50 hover:border-cosmic-600/50 hover:text-white'
                  }
                `}
              >
                <span className="flex items-center gap-3">
                  <span className={`
                    w-6 h-6 rounded-full border-2 flex items-center justify-center text-xs transition-all
                    ${selectedIndex === index 
                      ? 'border-cosmic-400 bg-cosmic-400 text-cosmic-950' 
                      : 'border-cosmic-600'
                    }
                  `}>
                    {selectedIndex === index && '✓'}
                  </span>
                  {option.text}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-8 gap-2">
          {Array.from({ length: totalQuestions }).map((_, i) => (
            <div
              key={i}
              className={`
                w-2 h-2 rounded-full transition-all duration-300
                ${i < questionNumber - 1 
                  ? 'bg-cosmic-400' 
                  : i === questionNumber - 1 
                    ? 'bg-violet-400 w-4' 
                    : 'bg-cosmic-800'
                }
              `}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
