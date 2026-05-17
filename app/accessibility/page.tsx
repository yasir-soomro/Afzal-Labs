import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export const metadata = {
  title: 'Accessibility Statement - Afzal Labs',
  description: 'Accessibility Statement for Afzal Labs',
};

export default function AccessibilityStatementPage() {
  return (
    <div className="w-full min-h-screen bg-zinc-50 text-zinc-900 font-sans flex flex-col overflow-x-hidden relative selection:bg-blue-200 selection:text-blue-900">
      <Navbar />
      <main id="main-content" className="flex-1 w-full max-w-4xl mx-auto px-4 md:px-10 pt-32 pb-20" tabIndex={-1}>
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-black tracking-tighter uppercase text-zinc-900">Accessibility Statement</h1>
          <p className="mt-4 text-sm font-mono text-zinc-500 uppercase tracking-widest">Last Updated: May 2026</p>
        </div>
        
        <div className="prose prose-zinc max-w-none prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tight prose-a:text-blue-600">
          <p className="text-lg text-zinc-600 leading-relaxed mb-8">
            Afzal Labs is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards to guarantee we provide equal access to all of our users.
          </p>
          
          <h2 className="text-2xl mt-8 mb-4">1. Conformance Status</h2>
          <p className="mb-4">
            The Web Content Accessibility Guidelines (WCAG) defines requirements for designers and developers to improve accessibility for people with disabilities. It defines three levels of conformance: Level A, Level AA, and Level AAA. Afzal Labs strives to conform to WCAG 2.1 Level AA standards.
          </p>
          
          <h2 className="text-2xl mt-8 mb-4">2. Accessibility Features</h2>
          <p className="mb-4">
            We have implemented various features to enhance accessibility within our digital platforms, including:
          </p>
          <ul className="list-disc pl-5 mb-4">
            <li><strong>Keyboard Navigation:</strong> All interactive elements, including navigation menus and forms, are fully accessible via keyboard.</li>
            <li><strong>Skip to Main Content:</strong> A visually hidden link is provided at the top of every page to allow keyboard users to bypass navigation and jump straight to the main content.</li>
            <li><strong>Screen Reader Compatibility:</strong> We use semantic HTML and ARIA labels where necessary to provide context to screen reader software. Form inputs and error messages are programmatically linked.</li>
            <li><strong>Contrast and Visual Design:</strong> We ensure sufficient color contrast between text and background colors. Users can also utilize browser-based zoom without breaking the page layouts.</li>
          </ul>

          <h2 className="text-2xl mt-8 mb-4">3. Feedback</h2>
          <p className="mb-4">
            We welcome your feedback on the accessibility of Afzal Labs. If you encounter any accessibility barriers while using our platform, please let us know:
          </p>
          <ul className="list-disc pl-5 mb-4">
            <li>Email: accessibility@afzallabs.example.com</li>
            <li>Use the contact form on our main page.</li>
          </ul>
          <p className="mb-4">
            We try to respond to feedback within 5 business days.
          </p>

          <h2 className="text-2xl mt-8 mb-4">4. Ongoing Efforts</h2>
          <p className="mb-4">
            We consider accessibility a continuously evolving process and conduct regular audits of our code and design to resolve any identified issues and improve overall usability for everyone.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
