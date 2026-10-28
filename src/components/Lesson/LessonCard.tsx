import { Link } from 'react-router-dom';
import { Clock, CheckCircle, Lock, ChevronRight, BookOpen } from 'lucide-react';
import type { Lesson } from '../../types';
import { DifficultyBadge } from '../common/Badge';

interface LessonCardProps {
  lesson: Lesson;
  isCompleted: boolean;
  isLocked?: boolean;
  quizScore?: number;
}

export default function LessonCard({ lesson, isCompleted, isLocked = false, quizScore }: LessonCardProps) {
  const card = (
    <div
      className={`bg-white rounded-xl border-2 p-5 transition-all duration-200 ${
        isLocked
          ? 'border-gray-100 opacity-60 cursor-not-allowed'
          : isCompleted
          ? 'border-green-200 hover:border-green-400 hover:shadow-sf-lg cursor-pointer'
          : 'border-gray-100 hover:border-sf-blue hover:shadow-sf-lg cursor-pointer'
      }`}
    >
      <div className="flex items-start gap-4">
        {/* Status icon */}
        <div className="flex-shrink-0 mt-0.5">
          {isLocked ? (
            <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center">
              <Lock size={16} className="text-sf-gray-5" />
            </div>
          ) : isCompleted ? (
            <div className="w-9 h-9 rounded-full bg-green-100 flex items-center justify-center">
              <CheckCircle size={18} className="text-sf-green" />
            </div>
          ) : (
            <div className="w-9 h-9 rounded-full bg-blue-50 flex items-center justify-center">
              <BookOpen size={16} className="text-sf-blue" />
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <div>
              <h3 className={`font-semibold text-sm ${isLocked ? 'text-sf-gray-5' : 'text-sf-gray-9'}`}>
                {lesson.title}
              </h3>
              <p className={`text-xs mt-0.5 ${isLocked ? 'text-sf-gray-4' : 'text-sf-gray-6'}`}>
                {lesson.subtitle}
              </p>
            </div>
            {!isLocked && (
              <ChevronRight size={16} className="text-sf-gray-4 flex-shrink-0 mt-0.5" />
            )}
          </div>

          <div className="flex items-center gap-3 mt-2">
            <DifficultyBadge difficulty={lesson.difficulty} />
            <span className="flex items-center gap-1 text-xs text-sf-gray-5">
              <Clock size={11} />
              {lesson.duration} min
            </span>
            {isCompleted && quizScore !== undefined && (
              <span className="text-xs text-sf-green font-medium">
                Quiz: {quizScore}%
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  if (isLocked) return card;

  return (
    <Link to={`/lesson/${lesson.id}`} className="block">
      {card}
    </Link>
  );
}
