import { useState, useEffect } from 'react';
import { AppPhase, Answer, UserProfile, CareerMatch } from './types';
import { questions } from './data/questions';
import { calculateProfile, calculateCareerMatches, getMBTIType, getMBTIDescription } from './utils/calculation';
import { Welcome } from './components/Welcome';
import { QuestionCard } from './components/QuestionCard';
import { ResultCard } from './components/ResultCard';

function App() {
  const [phase, setPhase] = useState<AppPhase>('welcome');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [careerMatches, setCareerMatches] = useState<CareerMatch[]>([]);
  const [mbtiType, setMbtiType] = useState('');
  const [mbtiDescription, setMbtiDescription] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  useEffect(() => {
    localStorage.removeItem('mbti-answers');
  }, []);

  const handleStart = () => {
    setPhase('testing');
    setCurrentQuestion(0);
    setAnswers([]);
  };

  const handleReset = () => {
    localStorage.removeItem('mbti-answers');
    setPhase('welcome');
    setCurrentQuestion(0);
    setAnswers([]);
    setProfile(null);
    setCareerMatches([]);
    setMbtiType('');
    setMbtiDescription('');
  };

  const handleAnswer = (answer: Answer) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setIsAnalyzing(true);
      setTimeout(() => {
        const calculatedProfile = calculateProfile(newAnswers);
        const matches = calculateCareerMatches(calculatedProfile);
        const type = getMBTIType(calculatedProfile);
        const description = getMBTIDescription(type);

        setProfile(calculatedProfile);
        setCareerMatches(matches);
        setMbtiType(type);
        setMbtiDescription(description);
        setPhase('result');
        setIsAnalyzing(false);
      }, 2000);
    }
  };

  if (isAnalyzing) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl shadow-soft-lg p-10 text-center animate-fade-in">
          <div className="w-16 h-16 mx-auto mb-6 bg-primary-100 rounded-2xl flex items-center justify-center">
            <svg className="w-8 h-8 text-primary-600 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </div>
          <h2 className="font-display text-2xl text-soft-800 mb-2">正在分析你的性格密码...</h2>
          <p className="text-soft-500 font-body">请稍候</p>
        </div>
      </div>
    );
  }

  if (phase === 'welcome') {
    return <Welcome onStart={handleStart} />;
  }

  if (phase === 'testing') {
    return (
      <QuestionCard
        question={questions[currentQuestion]}
        questionNumber={currentQuestion + 1}
        totalQuestions={questions.length}
        onAnswer={handleAnswer}
      />
    );
  }

  if (phase === 'result' && profile && careerMatches.length > 0) {
    return (
      <ResultCard
        careerMatches={careerMatches}
        profile={profile}
        mbtiType={mbtiType}
        mbtiDescription={mbtiDescription}
        onReset={handleReset}
      />
    );
  }

  return null;
}

export default App;
