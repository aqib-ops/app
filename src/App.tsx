import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { useLenis } from './hooks/useLenis';
import { SiteLayout } from './components/site/SiteLayout';
import { HomePage } from './pages/HomePage';
import { SolutionsPage } from './pages/SolutionsPage';
import { CaseStudiesPage } from './pages/CaseStudiesPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsAndConditionsPage } from './pages/TermsAndConditionsPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { FAQHubPage } from './pages/FAQHubPage';
import './App.css';

const serviceRedirects = [
  '/solutions',
  '/lead-follow-up-automation',
  '/shopify-automation',
  '/crm-automation',
  '/support-automation',
  '/ai-agent-ops',
];

const contactRedirects = ['/contact', '/pricing', '/workflow-audit-checklist'];

const portfolioRedirects = ['/case-studies', '/compare-alternatives'];

function App() {
  useLenis();

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/portfolio" element={<CaseStudiesPage />} />
          <Route path="/services" element={<SolutionsPage />} />
          <Route path="/faq" element={<FAQHubPage />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditionsPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/404" element={<NotFoundPage />} />

          {serviceRedirects.map((path) => (
            <Route key={path} path={path} element={<Navigate to="/services" replace />} />
          ))}
          {contactRedirects.map((path) => (
            <Route key={path} path={path} element={<Navigate to="/" replace />} />
          ))}
          {portfolioRedirects.map((path) => (
            <Route key={path} path={path} element={<Navigate to="/portfolio" replace />} />
          ))}

          <Route path="/case-studies/:caseStudySlug" element={<Navigate to="/portfolio" replace />} />
          <Route path="/compare-alternatives/:compareSlug" element={<Navigate to="/services" replace />} />
          <Route path="/industry/:industrySlug" element={<Navigate to="/services" replace />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
