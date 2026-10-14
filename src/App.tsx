import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Download } from './pages/Download';
import { Help } from './pages/Help';
import { Privacy } from './pages/Privacy';
import { useI18n } from './i18n';

function NotFound() {
  const { t } = useI18n();
  return <div className="container page-content"><section className="page-hero"><p className="eyebrow">404</p><h1>{t.notFound.title}</h1><p>{t.notFound.text}</p><Link className="button button-primary" to="/">{t.common.home}</Link></section></div>;
}

export function App() {
  return <BrowserRouter><Routes><Route element={<Layout />}><Route index element={<Home />} /><Route path="download" element={<Download />} /><Route path="help" element={<Help />} /><Route path="privacy" element={<Privacy />} /><Route path="*" element={<NotFound />} /></Route></Routes></BrowserRouter>;
}
