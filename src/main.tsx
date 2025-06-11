// 'Suspense' i react'tan import ediyoruz
import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import './i18n';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* App bileşenini Suspense ile sarmalıyoruz */}
    <Suspense fallback="Yükleniyor...">
      <App />
    </Suspense>
  </StrictMode>
);
