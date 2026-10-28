import { CheckCircle, Star, Zap, Award, BookOpen, Code2, Target } from 'lucide-react';

interface BadgeProps {
  id: string;
}

const badgeConfig: Record<string, { label: string; icon: React.ReactNode; color: string; bg: string }> = {
  'first-lesson': {
    label: 'First Step',
    icon: <BookOpen size={14} />,
    color: 'text-sf-blue',
    bg: 'bg-blue-50',
  },
  'five-lessons': {
    label: '5 Lessons',
    icon: <Star size={14} />,
    color: 'text-sf-teal',
    bg: 'bg-teal-50',
  },
  'ten-lessons': {
    label: '10 Lessons',
    icon: <Award size={14} />,
    color: 'text-sf-purple',
    bg: 'bg-purple-50',
  },
  'first-challenge': {
    label: 'First Challenge',
    icon: <Code2 size={14} />,
    color: 'text-sf-orange',
    bg: 'bg-orange-50',
  },
  'five-challenges': {
    label: '5 Challenges',
    icon: <Zap size={14} />,
    color: 'text-yellow-600',
    bg: 'bg-yellow-50',
  },
  'module-complete': {
    label: 'Module Done',
    icon: <CheckCircle size={14} />,
    color: 'text-sf-green',
    bg: 'bg-green-50',
  },
  'perfect-quiz': {
    label: 'Perfect Quiz',
    icon: <Target size={14} />,
    color: 'text-sf-blue',
    bg: 'bg-blue-50',
  },
};

export default function Badge({ id }: BadgeProps) {
  const config = badgeConfig[id] || {
    label: id,
    icon: <Star size={14} />,
    color: 'text-sf-gray-6',
    bg: 'bg-gray-50',
  };

  return (
    <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${config.color} ${config.bg} border border-current border-opacity-20`}>
      {config.icon}
      {config.label}
    </div>
  );
}

export function DifficultyBadge({ difficulty }: { difficulty: string }) {
  const map: Record<string, { label: string; class: string }> = {
    beginner: { label: 'Beginner', class: 'bg-green-100 text-green-700' },
    intermediate: { label: 'Intermediate', class: 'bg-yellow-100 text-yellow-700' },
    advanced: { label: 'Advanced', class: 'bg-red-100 text-red-700' },
  };
  const { label, class: cls } = map[difficulty] || map.beginner;
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${cls}`}>
      {label}
    </span>
  );
}

export function StatusBadge({ status }: { status: string }) {
  const map: Record<string, { label: string; class: string }> = {
    completed: { label: '✓ Completed', class: 'bg-green-100 text-green-700' },
    'in-progress': { label: '↻ In Progress', class: 'bg-blue-100 text-sf-blue' },
    available: { label: 'Available', class: 'bg-gray-100 text-sf-gray-6' },
    locked: { label: '🔒 Locked', class: 'bg-gray-100 text-sf-gray-5' },
  };
  const { label, class: cls } = map[status] || map.available;
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${cls}`}>
      {label}
    </span>
  );
}

export function BadgeList({ badges }: { badges: string[] }) {
  if (badges.length === 0) {
    return (
      <p className="text-sf-gray-5 text-sm">
        No badges yet. Complete lessons and challenges to earn them!
      </p>
    );
  }
  return (
    <div className="flex flex-wrap gap-2">
      {badges.map(id => <Badge key={id} id={id} />)}
    </div>
  );
}
