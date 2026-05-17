import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export const metadata = {
  title: 'Terms of Service - Afzal Labs',
  description: 'Terms of Service for Afzal Labs',
};

export default function TermsOfServicePage() {
  return (
    <div className="w-full min-h-screen bg-zinc-50 text-zinc-900 font-sans flex flex-col overflow-x-hidden relative selection:bg-blue-200 selection:text-blue-900">
      <Navbar />
      <main id="main-content" className="flex-1 w-full max-w-4xl mx-auto px-4 md:px-10 pt-32 pb-20" tabIndex={-1}>
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-black tracking-tighter uppercase text-zinc-900">Terms of Service</h1>
          <p className="mt-4 text-sm font-mono text-zinc-500 uppercase tracking-widest">Last Updated: May 2026</p>
        </div>
        
        <div className="prose prose-zinc max-w-none prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tight prose-a:text-blue-600">
          <p className="text-lg text-zinc-600 leading-relaxed mb-8">
            These Terms of Service govern your use of the Afzal Labs website and our software architecture services. By consulting with us or deploying our systems, you agree to these terms.
          </p>
          
          <h2 className="text-2xl mt-8 mb-4">1. Scope of Services</h2>
          <p className="mb-4">
            Afzal Labs provides software engineering, machine learning integrations, and digital architecture consulting. All deliverables, timelines, and specifications will be formalized in a separate Statement of Work (SOW).
          </p>
          
          <h2 className="text-2xl mt-8 mb-4">2. Intellectual Property</h2>
          <p className="mb-4">
            Unless otherwise stipulated in a signed contract, the codebase, proprietary AI models, and intellectual property developed during the engagement remain the property of Afzal Labs until full payment is executed, upon which the agreed-upon licenses or transfers will occur.
          </p>

          <h2 className="text-2xl mt-8 mb-4">3. Limitation of Liability</h2>
          <p className="mb-4">
            We architect resilient systems, but we are not liable for extended downtimes caused by third-party cloud infrastructure providers (e.g., AWS, GCP, Vercel) or improper utilization of the deployed systems outside the prescribed specifications.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
