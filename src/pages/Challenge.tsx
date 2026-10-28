import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Code2 } from 'lucide-react';
import { getChallengeById } from '../data/challenges';
import ChallengeEditor from '../components/Challenge/ChallengeEditor';
import { useProgress } from '../hooks/useProgress';

export function Challenge() {
  const { id } = useParams<{ id: string }>();
  const { completeChallenge, isChallengeCompleted, progress } = useProgress();

  const challenge = id ? getChallengeById(id) : undefined;
  const isCompleted = challenge ? isChallengeCompleted(challenge.id) : false;

  if (!challenge) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-xl font-bold mb-4">Challenge not found</h2>
        <Link to="/apex" className="btn-primary">Back to Apex Path</Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <nav className="flex items-center gap-2 text-sm text-sf-gray-5 mb-6">
        <Link to="/apex" className="hover:text-sf-blue transition-colors flex items-center gap-1">
          <ArrowLeft className="w-3 h-3" /> Apex Path
        </Link>
        <span>›</span>
        <span className="text-sf-gray-7">Challenge: {challenge.title}</span>
      </nav>

      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 rounded-lg bg-sf-blue/10 flex items-center justify-center">
          <Code2 className="w-5 h-5 text-sf-blue" />
        </div>
        <div>
          <h1 className="text-2xl font-bold">{challenge.title}</h1>
          <p className="text-sf-gray-6 text-sm">{challenge.description}</p>
        </div>
      </div>

      <ChallengeEditor
        challenge={challenge}
        onComplete={(code) => completeChallenge(challenge.id, code)}
        isCompleted={isCompleted}
        savedCode={progress.challengeSubmissions[challenge.id]}
      />
    </div>
  );
}
