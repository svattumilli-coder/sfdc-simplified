interface ProgressBarProps {
  value: number;
  max?: number;
  className?: string;
  color?: string;
  height?: string;
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
  label?: string;
}

const colorMap: Record<string, string> = {
  blue: 'bg-sf-blue',
  green: 'bg-sf-green',
  orange: 'bg-sf-orange',
  purple: 'bg-sf-purple',
};

const sizeMap = {
  sm: 'h-1.5',
  md: 'h-2.5',
  lg: 'h-4',
};

export default function ProgressBar({
  value,
  max = 100,
  className = '',
  color = 'blue',
  height,
  size = 'md',
  showLabel = false,
  label,
}: ProgressBarProps) {
  const pct = Math.min(100, Math.max(0, (value / max) * 100));
  const barColor = colorMap[color] ?? color;
  const barHeight = height ?? sizeMap[size];

  return (
    <div className={className}>
      {(showLabel || label) && (
        <div className="flex justify-between items-center mb-1">
          {label && <span className="text-xs text-sf-gray-6">{label}</span>}
          {showLabel && <span className="text-xs font-medium text-sf-gray-7">{Math.round(pct)}%</span>}
        </div>
      )}
      <div className={`w-full bg-sf-gray-2 rounded-full ${barHeight} overflow-hidden`}>
        <div
          className={`${barHeight} rounded-full ${barColor} transition-all duration-500 ease-out`}
          style={{ width: `${pct}%` }}
          role="progressbar"
          aria-valuenow={value}
          aria-valuemin={0}
          aria-valuemax={max}
        />
      </div>
    </div>
  );
}
