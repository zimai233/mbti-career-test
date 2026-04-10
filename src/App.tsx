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
    const saved = localStorage.getItem('mbti-answers');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed.phase === 'result' && parsed.profile) {
          setPhase('result');
          setProfile(parsed.profile);
          setCareerMatches(parsed.careerMatches);
          setMbtiType(parsed.mbtiType);
          setMbtiDescription(parsed.mbtiDescription);
        } else if (parsed.phase && parsed.answers && parsed.phase === 'testing') {
          setPhase('testing');
          setAnswers(parsed.answers);
          setCurrentQuestion(parsed.currentQuestion || 0);
        }
      } catch (e) {
        localStorage.removeItem('mbti-answers');
      }
    }
  }, []);

  useEffect(() => {
    if (phase === 'result' && profile) {
      localStorage.setItem('mbti-answers', JSON.stringify({
        phase: 'result',
        profile,
        careerMatches,
        mbtiType,
        mbtiDescription,
      }));
    } else if (phase === 'testing') {
      localStorage.setItem('mbti-answers', JSON.stringify({
        phase,
        answers,
        currentQuestion,
      }));
    } else if (phase === 'welcome') {
      localStorage.removeItem('mbti-answers');
    }
  }, [phase, answers, currentQuestion, profile, careerMatches, mbtiType, mbtiDescription]);

  const handleStart = () => {
    setPhase('testing');
    setCurrentQuestion(0);
    setAnswers([]);
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
        <div className="absolute inset-0 bg-gradient-to-br from-cosmic-950 via-cosmic-900 to-cosmic-950" />
        
        <div className="relative z-10 text-center">
          <div className="text-8xl mb-8 animate-float">🔮</div>
          <h2 className="font-display text-3xl text-white mb-4">正在分析你的性格密码...</h2>
          <div className="flex justify-center gap-2">
            <div className="w-3 h-3 bg-cosmic-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
            <div className="w-3 h-3 bg-violet-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
            <div className="w-3 h-3 bg-gold-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
          </div>
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
      />
    );
  }

  return null;
}

export default App;
