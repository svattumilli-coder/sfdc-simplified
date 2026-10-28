import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Clock, CheckCircle, Code2, ChevronRight } from 'lucide-react';
import { ProgressContext } from '../App';
import { lessons } from '../data/lessons';
import { modules } from '../data/modules';
import LessonCard from '../components/Lesson/LessonCard';
import ProgressBar from '../components/common/ProgressBar';

export function ApexPath() {
  const ctx = useContext(ProgressContext)!;
  const { progress } = ctx;

  const apexLessons = lessons.filter(l => l.moduleId === 'apex-basics');
  const soqlLessons = lessons.filter(l => l.moduleId === 'soql');
  const dmlLessons = lessons.filter(l => l.moduleId === 'dml');

  const allDisplayLessons = [...apexLessons, ...soqlLessons, ...dmlLessons];
  const completedCount = allDisplayLessons.filter(l => progress.completedLessons.includes(l.id)).length;
  const totalMinutes = allDisplayLessons.reduce((sum, l) => sum + l.duration, 0);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-sf-blue text-sm mb-2">
          <BookOpen size={14} />
          <Link to="/dashboard" className="hover:underline">Dashboard</Link>
          <ChevronRight size={12} className="text-sf-gray-4" />
          <span>Apex Learning Path</span>
        </div>
        <h1 className="text-2xl font-bold text-sf-gray-9">Salesforce Apex Learning Path</h1>
        <p className="text-sf-gray-6 mt-1 max-w-2xl">
          Master Apex from the ground up — from variables and data types to SOQL queries and DML operations.
        </p>
        <div className="flex items-center gap-6 mt-4">
          <span className="flex items-center gap-1.5 text-sm text-sf-gray-6">
            <BookOpen size={15} /> {allDisplayLessons.length} lessons
          </span>
          <span className="flex items-center gap-1.5 text-sm text-sf-gray-6">
            <Clock size={15} /> ~{Math.round(totalMinutes / 60)} hours
          </span>
          <span className="flex items-center gap-1.5 text-sm text-sf-gray-6">
            <CheckCircle size={15} className="text-sf-green" /> {completedCount} completed
          </span>
          <span className="flex items-center gap-1.5 text-sm text-sf-gray-6">
            <Code2 size={15} /> {allDisplayLessons.filter(l => l.challengeId).length} challenges
          </span>
        </div>
        <ProgressBar
          value={completedCount}
          max={allDisplayLessons.length}
          className="mt-3 max-w-xs"
          showLabel
          label="Overall progress"
        />
      </div>

      {/* Apex Basics module */}
      <ModuleSection
        title="Module 1: Apex Fundamentals"
        description="The essential building blocks of Apex programming."
        lessons={apexLessons}
        progress={progress}
        color="bg-sf-blue"
      />

      {/* SOQL module */}
      <ModuleSection
        title="Module 2: SOQL — Querying Data"
        description="Learn to retrieve Salesforce records with precision."
        lessons={soqlLessons}
        progress={progress}
        color="bg-sf-teal"
      />

      {/* DML module */}
      <ModuleSection
        title="Module 3: DML — Writing Data"
        description="Create, update, and delete Salesforce records safely."
        lessons={dmlLessons}
        progress={progress}
        color="bg-sf-green"
      />

      {/* Coming soon */}
      <div className="card border-2 border-dashed border-gray-200 text-center py-8 mt-6">
        <div className="text-3xl mb-3">🚀</div>
        <h3 className="font-semibold text-sf-gray-7 mb-1">More modules coming soon</h3>
        <p className="text-sm text-sf-gray-5">Apex Triggers, Lightning Web Components, and Integrations</p>
      </div>
    </div>
  );
}

function ModuleSection({
  title,
  description,
  lessons: moduleLessons,
  progress,
  color,
}: {
  title: string;
  description: string;
  lessons: typeof lessons;
  progress: { completedLessons: string[]; quizScores: Record<string, number> };
  color: string;
}) {
  if (moduleLessons.length === 0) return null;
  const completedInModule = moduleLessons.filter(l => progress.completedLessons.includes(l.id)).length;

  return (
    <div className="mb-8">
      <div className="flex items-start gap-3 mb-4">
        <div className={`w-1 h-full min-h-[3rem] rounded-full ${color} flex-shrink-0 mt-1`} style={{ width: 4 }} />
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h2 className="font-bold text-sf-gray-9">{title}</h2>
            <span className="text-sm text-sf-gray-5">{completedInModule}/{moduleLessons.length}</span>
          </div>
          <p className="text-sm text-sf-gray-6">{description}</p>
          <ProgressBar
            value={completedInModule}
            max={moduleLessons.length}
            size="sm"
            className="mt-2 max-w-[200px]"
          />
        </div>
      </div>
      <div className="space-y-3 pl-4">
        {moduleLessons.map((lesson, idx) => {
          const isCompleted = progress.completedLessons.includes(lesson.id);
          const isLocked = idx > 0 && !progress.completedLessons.includes(moduleLessons[idx - 1].id) && !isCompleted;
          return (
            <LessonCard
              key={lesson.id}
              lesson={lesson}
              isCompleted={isCompleted}
              isLocked={isLocked}
              quizScore={progress.quizScores[lesson.id]}
            />
          );
        })}
      </div>
    </div>
  );
}
