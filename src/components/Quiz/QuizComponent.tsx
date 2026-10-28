import { useState } from 'react';
import { CheckCircle, XCircle, ChevronRight, Trophy } from 'lucide-react';
import type { QuizQuestion } from '../../types';

interface QuizComponentProps {
  questions: QuizQuestion[];
  lessonId: string;
  onComplete: (score: number, total: number) => void;
}

export default function QuizComponent({ questions, onComplete }: QuizComponentProps) {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [scores, setScores] = useState<boolean[]>([]);
  const [finished, setFinished] = useState(false);

  const question = questions[current];
  const isCorrect = selected === question?.correct;

  const handleSelect = (idx: number) => {
    if (answered) return;
    setSelected(idx);
    setAnswered(true);
    const correct = idx === question.correct;
    setScores(prev => [...prev, correct]);
  };

  const handleNext = () => {
    if (current < questions.length - 1) {
      setCurrent(prev => prev + 1);
      setSelected(null);
      setAnswered(false);
    } else {
      const total = scores.filter(Boolean).length + (selected === question?.correct ? 1 : 0);
      setFinished(true);
      onComplete(total, questions.length);
    }
  };

  const handleRestart = () => {
    setCurrent(0);
    setSelected(null);
    setAnswered(false);
    setScores([]);
    setFinished(false);
  };

  if (finished) {
    const finalScore = scores.filter(Boolean).length;
    const pct = Math.round((finalScore / questions.length) * 100);
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center mx-auto mb-4">
          <Trophy size={28} className="text-yellow-600" />
        </div>
        <h3 className="text-xl font-bold text-sf-gray-9 mb-2">Quiz Complete!</h3>
        <p className="text-sf-gray-6 mb-1">
          You got <span className="font-semibold text-sf-gray-9">{finalScore} of {questions.length}</span> correct
        </p>
        <div className={`text-3xl font-bold mt-4 mb-6 ${pct >= 80 ? 'text-sf-green' : pct >= 60 ? 'text-yellow-500' : 'text-sf-red'}`}>
          {pct}%
        </div>
        {pct >= 80 ? (
          <p className="text-sf-green font-medium mb-6">Excellent work! You've mastered this material.</p>
        ) : pct >= 60 ? (
          <p className="text-yellow-600 font-medium mb-6">Good effort! Review the explanations to strengthen your understanding.</p>
        ) : (
          <p className="text-sf-red font-medium mb-6">Keep studying! Review the lesson and try again.</p>
        )}
        <button onClick={handleRestart} className="btn-secondary">
          Retake Quiz
        </button>
      </div>
    );
  }

  return (
    <div>
      {/* Progress */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm text-sf-gray-6">
          Question {current + 1} of {questions.length}
        </span>
        <div className="flex gap-1">
          {questions.map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full ${
                i < scores.length
                  ? scores[i] ? 'bg-sf-green' : 'bg-sf-red'
                  : i === current ? 'bg-sf-blue' : 'bg-gray-200'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Question */}
      <p className="text-sf-gray-9 font-medium mb-4 leading-relaxed">{question.question}</p>

      {/* Options */}
      <div className="space-y-3 mb-4">
        {question.options.map((opt, idx) => {
          let cls = 'w-full text-left px-4 py-3 rounded-lg border-2 text-sm font-medium transition-all ';
          if (!answered) {
            cls += 'border-gray-200 hover:border-sf-blue hover:bg-blue-50 text-sf-gray-8 cursor-pointer';
          } else if (idx === question.correct) {
            cls += 'border-green-400 bg-green-50 text-sf-green';
          } else if (idx === selected && !isCorrect) {
            cls += 'border-red-400 bg-red-50 text-sf-red';
          } else {
            cls += 'border-gray-100 text-sf-gray-5 cursor-not-allowed';
          }

          return (
            <button key={idx} className={cls} onClick={() => handleSelect(idx)}>
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full border-2 flex items-center justify-center text-xs font-bold flex-shrink-0"
                  style={{ borderColor: answered && idx === question.correct ? '#2E844A' : answered && idx === selected ? '#EA001E' : '#C9C7C5' }}>
                  {String.fromCharCode(65 + idx)}
                </span>
                {answered && idx === question.correct && <CheckCircle size={15} className="text-sf-green flex-shrink-0" />}
                {answered && idx === selected && !isCorrect && <XCircle size={15} className="text-sf-red flex-shrink-0" />}
                <span>{opt}</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Explanation */}
      {answered && (
        <div className={`p-4 rounded-lg mb-4 text-sm ${isCorrect ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
          <div className="flex items-start gap-2">
            {isCorrect
              ? <CheckCircle size={16} className="text-sf-green mt-0.5 flex-shrink-0" />
              : <XCircle size={16} className="text-sf-red mt-0.5 flex-shrink-0" />}
            <div>
              <p className={`font-semibold mb-1 ${isCorrect ? 'text-sf-green' : 'text-sf-red'}`}>
                {isCorrect ? 'Correct!' : 'Not quite.'}
              </p>
              <p className="text-sf-gray-7">{question.explanation}</p>
            </div>
          </div>
        </div>
      )}

      {/* Next button */}
      {answered && (
        <button onClick={handleNext} className="btn-primary flex items-center gap-2">
          {current < questions.length - 1 ? 'Next Question' : 'See Results'}
          <ChevronRight size={16} />
        </button>
      )}
    </div>
  );
}
