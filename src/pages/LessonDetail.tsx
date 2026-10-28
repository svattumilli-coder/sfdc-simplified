import { useContext, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ChevronRight, ChevronLeft, Clock, CheckCircle, BookOpen, Code2, Lightbulb, AlertTriangle, Info } from 'lucide-react';
import { ProgressContext } from '../App';
import { getLessonById, lessons } from '../data/lessons';
import { getChallengeById } from '../data/challenges';
import type { ContentBlock } from '../types';
import QuizComponent from '../components/Quiz/QuizComponent';

function renderText(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\n/g, '<br/>');
}

function ContentBlockView({ block }: { block: ContentBlock }) {
  const typeIcons: Record<string, React.ReactNode> = {
    note: <Info size={16} className="text-sf-blue flex-shrink-0 mt-0.5" />,
    warning: <AlertTriangle size={16} className="text-orange-500 flex-shrink-0 mt-0.5" />,
    tip: <Lightbulb size={16} className="text-yellow-500 flex-shrink-0 mt-0.5" />,
  };

  const typeClasses: Record<string, string> = {
    note: 'note-box',
    warning: 'warning-box',
    tip: 'hint-box',
  };

  if (block.type === 'explanation') {
    return (
      <div className="lesson-section">
        {block.title && <h3 className="text-lg font-semibold text-sf-gray-9 mb-3">{block.title}</h3>}
        <p className="text-sf-gray-7 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: renderText(block.text) }} />
      </div>
    );
  }

  if (block.type === 'example') {
    return (
      <div className="lesson-section">
        {block.title && <h3 className="text-lg font-semibold text-sf-gray-9 mb-2">{block.title}</h3>}
        {block.text && <p className="text-sf-gray-7 mb-3 leading-relaxed">{block.text}</p>}
        {block.code && (
          <div className="rounded-xl overflow-hidden border border-gray-200">
            <div className="bg-sf-gray-8 px-4 py-2 flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
              <span className="text-sf-gray-5 text-xs ml-2 font-mono">Apex</span>
            </div>
            <pre className="code-block rounded-none overflow-x-auto">
              <code>{block.code}</code>
            </pre>
            {block.output && (
              <div className="bg-gray-800 border-t border-gray-700 px-4 py-3">
                <div className="text-xs text-sf-gray-5 mb-1 font-mono">// Output:</div>
                <pre className="text-green-400 text-sm font-mono whitespace-pre-wrap">{block.output}</pre>
              </div>
            )}
          </div>
        )}
      </div>
    );
  }

  if (block.type === 'note' || block.type === 'warning' || block.type === 'tip') {
    return (
      <div className={`${typeClasses[block.type] || 'note-box'} lesson-section`}>
        <div className="flex items-start gap-2">
          {typeIcons[block.type]}
          <div>
            {block.title && <p className="font-semibold text-sm mb-1">{block.title}</p>}
            <p className="text-sm leading-relaxed"
              dangerouslySetInnerHTML={{ __html: renderText(block.text) }} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="lesson-section">
      {block.title && <h3 className="text-lg font-semibold text-sf-gray-9 mb-2">{block.title}</h3>}
      <p className="text-sf-gray-7">{block.text}</p>
    </div>
  );
}

export function LessonDetail() {
  const { lessonId } = useParams<{ lessonId: string }>();
  const navigate = useNavigate();
  const ctx = useContext(ProgressContext)!;
  const { progress, completeLesson, recordQuizScore, isLessonCompleted } = ctx;

  const [activeTab, setActiveTab] = useState<'lesson' | 'quiz' | 'challenge'>('lesson');
  const [quizCompleted, setQuizCompleted] = useState(false);

  const lesson = getLessonById(lessonId || '');
  if (!lesson) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-xl font-bold text-sf-gray-9 mb-2">Lesson not found</h2>
        <Link to="/apex" className="text-sf-blue hover:underline">Back to lessons</Link>
      </div>
    );
  }

  const challenge = lesson.challengeId ? getChallengeById(lesson.challengeId) : null;
  const completed = isLessonCompleted(lesson.id);
  const hasQuizScore = !!progress.quizScores[lesson.id];

  const allLessons = lessons;
  const idx = allLessons.findIndex(l => l.id === lesson.id);
  const prevLesson = idx > 0 ? allLessons[idx - 1] : null;
  const nextLesson = idx < allLessons.length - 1 ? allLessons[idx + 1] : null;

  const handleMarkComplete = () => {
    completeLesson(lesson.id);
  };

  const handleQuizComplete = (score: number, total: number) => {
    recordQuizScore(lesson.id, score, total);
    setQuizCompleted(true);
    if (score === total) completeLesson(lesson.id);
  };

  const tabs = [
    { id: 'lesson' as const, label: 'Lesson', icon: BookOpen },
    { id: 'quiz' as const, label: `Quiz (${lesson.quiz.length}Q)`, icon: CheckCircle },
    ...(challenge ? [{ id: 'challenge' as const, label: 'Challenge', icon: Code2 }] : []),
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumb */}
      <div className="flex items-center gap-1 text-sm text-sf-gray-5 mb-6">
        <Link to="/apex" className="hover:text-sf-blue">Apex Path</Link>
        <ChevronRight size={13} />
        <span className="text-sf-gray-7">{lesson.title}</span>
      </div>

      {/* Lesson header */}
      <div className="card mb-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-medium text-sf-blue bg-blue-50 px-2 py-0.5 rounded">
                Lesson {lesson.order}
              </span>
              <span className="flex items-center gap-1 text-xs text-sf-gray-5">
                <Clock size={11} /> {lesson.duration} min
              </span>
              {completed && (
                <span className="flex items-center gap-1 text-xs text-sf-green font-medium">
                  <CheckCircle size={12} /> Completed
                </span>
              )}
            </div>
            <h1 className="text-2xl font-bold text-sf-gray-9">{lesson.title}</h1>
            <p className="text-sf-gray-6 mt-1">{lesson.description}</p>
          </div>
          {!completed && (
            <button
              onClick={handleMarkComplete}
              className="flex-shrink-0 flex items-center gap-1.5 text-sm text-sf-gray-6 border border-gray-200 hover:border-sf-green hover:text-sf-green px-3 py-1.5 rounded-lg transition-colors"
            >
              <CheckCircle size={14} />
              Mark done
            </button>
          )}
        </div>

        {/* Learning objectives */}
        <div className="mt-4 pt-4 border-t border-gray-100">
          <p className="text-xs font-semibold text-sf-gray-7 mb-2">You will learn:</p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1">
            {lesson.learningObjectives.map((obj, i) => (
              <li key={i} className="flex items-start gap-1.5 text-xs text-sf-gray-6">
                <span className="text-sf-blue mt-0.5">•</span>
                {obj}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 mb-6 bg-gray-100 p-1 rounded-lg w-fit">
        {tabs.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setActiveTab(id)}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-md text-sm font-medium transition-all ${
              activeTab === id
                ? 'bg-white text-sf-gray-9 shadow-sm'
                : 'text-sf-gray-6 hover:text-sf-gray-9'
            }`}
          >
            <Icon size={14} />
            {label}
            {id === 'quiz' && hasQuizScore && (
              <span className="text-xs text-sf-green ml-1">{progress.quizScores[lesson.id]}%</span>
            )}
          </button>
        ))}
      </div>

      {/* Tab content */}
      {activeTab === 'lesson' && (
        <div className="card">
          {lesson.content.map((block, i) => (
            <ContentBlockView key={i} block={block} />
          ))}
          <div className="pt-6 border-t border-gray-100 mt-6">
            <button
              onClick={() => setActiveTab('quiz')}
              className="btn-primary flex items-center gap-2"
            >
              Take the Quiz
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      )}

      {activeTab === 'quiz' && (
        <div className="card">
          <h2 className="text-lg font-bold text-sf-gray-9 mb-4">Knowledge Check</h2>
          <QuizComponent
            questions={lesson.quiz}
            lessonId={lesson.id}
            onComplete={handleQuizComplete}
          />
          {quizCompleted && challenge && (
            <div className="mt-6 pt-6 border-t border-gray-100">
              <button
                onClick={() => setActiveTab('challenge')}
                className="btn-primary flex items-center gap-2"
              >
                Try the Challenge
                <Code2 size={16} />
              </button>
            </div>
          )}
        </div>
      )}

      {activeTab === 'challenge' && challenge && (
        <div className="card">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h2 className="text-lg font-bold text-sf-gray-9">{challenge.title}</h2>
              <p className="text-sf-gray-6 text-sm mt-1">{challenge.description}</p>
            </div>
          </div>
          <Link
            to={`/challenge/${challenge.id}`}
            className="btn-primary inline-flex items-center gap-2"
          >
            Open Full Challenge Editor
            <Code2 size={15} />
          </Link>
        </div>
      )}

      {/* Navigation */}
      <div className="flex items-center justify-between mt-6">
        {prevLesson ? (
          <Link
            to={`/lesson/${prevLesson.id}`}
            className="flex items-center gap-2 text-sm text-sf-gray-6 hover:text-sf-blue transition-colors"
          >
            <ChevronLeft size={16} />
            {prevLesson.title}
          </Link>
        ) : <div />}
        {nextLesson && (
          <Link
            to={`/lesson/${nextLesson.id}`}
            className="flex items-center gap-2 text-sm text-sf-blue font-medium hover:text-sf-blue-dark"
          >
            {nextLesson.title}
            <ChevronRight size={16} />
          </Link>
        )}
      </div>
    </div>
  );
}
