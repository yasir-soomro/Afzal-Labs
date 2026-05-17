import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export const metadata = {
  title: 'Privacy Policy - Afzal Labs',
  description: 'Privacy Policy for Afzal Labs',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="w-full min-h-screen bg-zinc-50 text-zinc-900 font-sans flex flex-col overflow-x-hidden relative selection:bg-blue-200 selection:text-blue-900">
      <Navbar />
      <main id="main-content" className="flex-1 w-full max-w-4xl mx-auto px-4 md:px-10 pt-32 pb-20" tabIndex={-1}>
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-black tracking-tighter uppercase text-zinc-900">Privacy Policy</h1>
          <p className="mt-4 text-sm font-mono text-zinc-500 uppercase tracking-widest">Last Updated: May 2026</p>
        </div>
        
        <div className="prose prose-zinc max-w-none prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tight prose-a:text-blue-600">
          <p className="text-lg text-zinc-600 leading-relaxed mb-8">
            At Afzal Labs, we take your privacy seriously. This policy describes what personal information we collect and how we use it to provide our intelligent web systems and services.
          </p>
          
          <h2 className="text-2xl mt-8 mb-4">1. Information Collection</h2>
          <p className="mb-4">
            We collect information you explicitly provide when contacting us via our payload transmitter, such as your name, email address, and project requirements. We also collect standard telemetry data to optimize system performance and latencies.
          </p>
          
          <h2 className="text-2xl mt-8 mb-4">2. Usage of Information</h2>
          <p className="mb-4">
            Your data is strictly used to architect, provision, and maintain the software solutions you have requested. We do not sell your personal data to third parties. Our cognitive models are not trained on your private, sensitive data unless explicitly permitted in our enterprise agreements.
          </p>

          <h2 className="text-2xl mt-8 mb-4">3. Data Security</h2>
          <p className="mb-4">
            We employ industry-standard encryption, rapid incident response protocols, and continuous security auditing to ensure your transmitted payloads and personal data remain secure from unauthorized access.
          </p>
          
          <h2 className="text-2xl mt-8 mb-4">4. Contact Us</h2>
          <p className="mb-4">
            If you have questions about this Privacy Policy, please initiate contact via the transmission form on our main interface or reach us directly at privacy@afzallabs.example.com.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
