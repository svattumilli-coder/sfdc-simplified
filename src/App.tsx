import { createContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Layout/Navbar';
import { Footer } from './components/Layout/Footer';
import { useProgress } from './hooks/useProgress';
import { Home } from './pages/Home';
import { Dashboard } from './pages/Dashboard';
import { ApexPath } from './pages/ApexPath';
import { LessonDetail } from './pages/LessonDetail';
import { SOQLExplorer } from './pages/SOQLExplorer';
import { DebuggingSimulator } from './pages/DebuggingSimulator';
import { Missions } from './pages/Missions';
import { About } from './pages/About';
import { Challenge } from './pages/Challenge';

export const ProgressContext = createContext<ReturnType<typeof useProgress> | null>(null);

function NotFound() {
  return (
    <div className="max-w-xl mx-auto px-4 py-24 text-center">
      <div className="text-6xl font-bold text-sf-gray-3 mb-4">404</div>
      <h2 className="text-xl font-bold mb-2">Page not found</h2>
      <p className="text-sf-gray-6 mb-6">The page you are looking for does not exist.</p>
      <a href="/" className="btn-primary">Go Home</a>
    </div>
  );
}

function AppRoutes() {
  const progress = useProgress();
  return (
    <ProgressContext.Provider value={progress}>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/apex" element={<ApexPath />} />
            <Route path="/lesson/:lessonId" element={<LessonDetail />} />
            <Route path="/soql" element={<SOQLExplorer />} />
            <Route path="/debug" element={<DebuggingSimulator />} />
            <Route path="/missions" element={<Missions />} />
            <Route path="/about" element={<About />} />
            <Route path="/challenge/:id" element={<Challenge />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </ProgressContext.Provider>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
