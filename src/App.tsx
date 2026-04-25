import { Navigate, Route, Routes } from 'react-router-dom';
import { SiteShell } from './components/SiteShell';
import { IntroPage } from './pages/IntroPage';
import { IteratedPage } from './pages/IteratedPage';
import { OneShotPage } from './pages/OneShotPage';

function App() {
  return (
    <SiteShell>
      <Routes>
        <Route path="/" element={<IntroPage />} />
        <Route path="/one-shot" element={<OneShotPage />} />
        <Route path="/iterated" element={<IteratedPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </SiteShell>
  );
}

export default App;
