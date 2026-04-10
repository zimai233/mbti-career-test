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
    <div className="min-h-screen flex flex-col p-6">
      <div className="max-w-xl w-full mx-auto flex-1 flex flex-col">
        <ProgressBar current={questionNumber} total={totalQuestions} />

        <div className="bg-white rounded-3xl shadow-soft-lg p-8 flex-1 flex flex-col mt-6 animate-fade-in">
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 bg-primary-100 text-primary-700 text-sm font-medium rounded-full">
              问题 {questionNumber}
            </span>
            <span className="text-soft-400 text-sm">
              共 {totalQuestions} 题
            </span>
          </div>

          <h2 className="font-display text-xl text-soft-800 mb-8 leading-relaxed">
            {question.text}
          </h2>

          <div className="space-y-3 flex-1">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleSelect(index, option.value)}
                disabled={selectedIndex !== null}
                className={`
                  w-full p-4 text-left rounded-xl border-2 transition-all duration-200 cursor-pointer
                  ${selectedIndex === index 
                    ? 'bg-primary-50 border-primary-400 text-primary-800 shadow-soft' 
                    : 'bg-soft-50 border-soft-200 text-soft-700 hover:bg-primary-50 hover:border-primary-300 hover:text-primary-800'
                  }
                `}
              >
                <div className="flex items-center gap-4">
                  <span className={`
                    w-8 h-8 flex items-center justify-center rounded-lg font-medium text-sm transition-colors
                    ${selectedIndex === index 
                      ? 'bg-primary-500 text-white' 
                      : 'bg-white border-2 border-soft-200 text-soft-500'
                    }
                  `}>
                    {selectedIndex === index ? (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      String.fromCharCode(65 + index)
                    )}
                  </span>
                  <span className="font-body">
                    {option.text}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
