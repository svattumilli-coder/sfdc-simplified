import { useState, useEffect, useCallback } from 'react';
import type { UserProgress } from '../types';

const STORAGE_KEY = 'sfda_progress';
const XP_PER_LESSON = 100;
const XP_PER_CHALLENGE = 150;
const XP_PER_QUIZ_CORRECT = 20;

const defaultProgress: UserProgress = {
  completedLessons: [],
  completedChallenges: [],
  quizScores: {},
  challengeSubmissions: {},
  xp: 0,
  streakDays: 0,
  lastVisit: new Date().toISOString(),
  badges: [],
};

export function useProgress() {
  const [progress, setProgress] = useState<UserProgress>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? { ...defaultProgress, ...JSON.parse(stored) } : defaultProgress;
    } catch {
      return defaultProgress;
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }, [progress]);

  const completeLesson = useCallback((lessonId: string) => {
    setProgress(prev => {
      if (prev.completedLessons.includes(lessonId)) return prev;
      const newXP = prev.xp + XP_PER_LESSON;
      const badges = [...prev.badges];
      if (prev.completedLessons.length === 0) badges.push('first-lesson');
      if (prev.completedLessons.length === 4) badges.push('five-lessons');
      if (prev.completedLessons.length === 9) badges.push('ten-lessons');
      return {
        ...prev,
        completedLessons: [...prev.completedLessons, lessonId],
        xp: newXP,
        badges,
      };
    });
  }, []);

  const completeChallenge = useCallback((challengeId: string, code: string) => {
    setProgress(prev => {
      const wasNew = !prev.completedChallenges.includes(challengeId);
      const badges = [...prev.badges];
      if (wasNew && prev.completedChallenges.length === 0) badges.push('first-challenge');
      if (wasNew && prev.completedChallenges.length === 4) badges.push('five-challenges');
      return {
        ...prev,
        completedChallenges: wasNew
          ? [...prev.completedChallenges, challengeId]
          : prev.completedChallenges,
        challengeSubmissions: { ...prev.challengeSubmissions, [challengeId]: code },
        xp: wasNew ? prev.xp + XP_PER_CHALLENGE : prev.xp,
        badges,
      };
    });
  }, []);

  const recordQuizScore = useCallback((lessonId: string, score: number, total: number) => {
    setProgress(prev => ({
      ...prev,
      quizScores: { ...prev.quizScores, [lessonId]: Math.round((score / total) * 100) },
      xp: prev.xp + score * XP_PER_QUIZ_CORRECT,
    }));
  }, []);

  const isLessonCompleted = useCallback(
    (lessonId: string) => progress.completedLessons.includes(lessonId),
    [progress.completedLessons]
  );

  const isChallengeCompleted = useCallback(
    (challengeId: string) => progress.completedChallenges.includes(challengeId),
    [progress.completedChallenges]
  );

  const getLevel = () => {
    if (progress.xp < 500) return { level: 1, title: 'Trailblazer Recruit', next: 500 };
    if (progress.xp < 1500) return { level: 2, title: 'Apex Apprentice', next: 1500 };
    if (progress.xp < 3000) return { level: 3, title: 'SOQL Scholar', next: 3000 };
    if (progress.xp < 5000) return { level: 4, title: 'DML Developer', next: 5000 };
    if (progress.xp < 8000) return { level: 5, title: 'Trigger Tamer', next: 8000 };
    return { level: 6, title: 'Platform Champion', next: Infinity };
  };

  const resetProgress = useCallback(() => {
    setProgress(defaultProgress);
  }, []);

  return {
    progress,
    completeLesson,
    completeChallenge,
    recordQuizScore,
    isLessonCompleted,
    isChallengeCompleted,
    getLevel,
    resetProgress,
  };
}
