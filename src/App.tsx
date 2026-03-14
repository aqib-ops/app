import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { useLenis } from './hooks/useLenis';
import { SiteLayout } from './components/site/SiteLayout';
import { HomePage } from './pages/HomePage';
import { SolutionsPage } from './pages/SolutionsPage';
import { PricingPage } from './pages/PricingPage';
import { CaseStudiesPage } from './pages/CaseStudiesPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsAndConditionsPage } from './pages/TermsAndConditionsPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { ServiceLandingPage } from './pages/ServiceLandingPage';
import { CaseStudyDetailPage } from './pages/CaseStudyDetailPage';
import { InsightsPage } from './pages/InsightsPage';
import { InsightDetailPage } from './pages/InsightDetailPage';
import { WorkflowAuditChecklistPage } from './pages/WorkflowAuditChecklistPage';
import { FAQHubPage } from './pages/FAQHubPage';
import { CompareAlternativesPage } from './pages/CompareAlternativesPage';
import { CompareDetailPage } from './pages/CompareDetailPage';
import { IndustryPage } from './pages/IndustryPage';
import './App.css';

function App() {
  useLenis();

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/case-studies/d2c-order-notifications" element={<CaseStudyDetailPage caseStudySlug="d2c-order-notifications" />} />
          <Route path="/case-studies/lead-qualification-pipeline" element={<CaseStudyDetailPage caseStudySlug="lead-qualification-pipeline" />} />
          <Route path="/case-studies/content-approval-engine" element={<CaseStudyDetailPage caseStudySlug="content-approval-engine" />} />
          <Route path="/shopify-automation" element={<ServiceLandingPage serviceSlug="shopify-automation" />} />
          <Route path="/crm-automation" element={<ServiceLandingPage serviceSlug="crm-automation" />} />
          <Route path="/support-automation" element={<ServiceLandingPage serviceSlug="support-automation" />} />
          <Route path="/ai-agent-ops" element={<ServiceLandingPage serviceSlug="ai-agent-ops" />} />
          <Route path="/insights" element={<InsightsPage />} />
          <Route path="/insights/automate-lead-follow-up-with-n8n" element={<InsightDetailPage postSlug="automate-lead-follow-up-with-n8n" />} />
          <Route path="/insights/support-triage-automation-playbook" element={<InsightDetailPage postSlug="support-triage-automation-playbook" />} />
          <Route path="/insights/shopify-ops-automation-checklist" element={<InsightDetailPage postSlug="shopify-ops-automation-checklist" />} />
          <Route path="/insights/ai-agent-ops-guardrails-playbook" element={<InsightDetailPage postSlug="ai-agent-ops-guardrails-playbook" />} />
          <Route path="/insights/automation-reliability-playbook" element={<InsightDetailPage postSlug="automation-reliability-playbook" />} />
          <Route path="/insights/ecommerce-returns-exceptions-automation" element={<InsightDetailPage postSlug="ecommerce-returns-exceptions-automation" />} />
          <Route path="/workflow-audit-checklist" element={<WorkflowAuditChecklistPage />} />
          <Route path="/faq" element={<FAQHubPage />} />
          <Route path="/compare-alternatives" element={<CompareAlternativesPage />} />
          <Route path="/compare-alternatives/aqib-ops" element={<CompareDetailPage compareSlug="aqib-ops" />} />
          <Route path="/compare-alternatives/hiring-in-house" element={<CompareDetailPage compareSlug="hiring-in-house" />} />
          <Route path="/compare-alternatives/generic-agency" element={<CompareDetailPage compareSlug="generic-agency" />} />
          <Route path="/industry/healthcare-automation" element={<IndustryPage industrySlug="healthcare-automation" />} />
          <Route path="/industry/ecommerce-automation" element={<IndustryPage industrySlug="ecommerce-automation" />} />
          <Route path="/industry/saas-automation" element={<IndustryPage industrySlug="saas-automation" />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditionsPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/404" element={<NotFoundPage />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="/blog" element={<Navigate to="/insights" replace />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
