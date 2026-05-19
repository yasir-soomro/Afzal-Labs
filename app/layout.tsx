import type {Metadata} from 'next';
import './globals.css'; // Global styles

export const metadata: Metadata = {
  title: {
    default: 'Afzal Labs | Agentic Web Systems',
    template: '%s | Afzal Labs',
  },
  description: 'Design and engineering for intelligent web systems and autonomous applications.',
  keywords: ['Agentic Web Systems', 'Web Engineering', 'TypeScript', 'React', 'Next.js', 'AI'],
  authors: [{ name: 'Yasir' }],
  creator: 'Yasir',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://afzallabs.com', // Replace with actual URL if known
    title: 'Afzal Labs | Agentic Web Systems',
    description: 'Design and engineering for intelligent web systems and autonomous applications.',
    siteName: 'Afzal Labs',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Afzal Labs | Agentic Web Systems',
    description: 'Design and engineering for intelligent web systems and autonomous applications.',
    creator: '@afzallabs',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className="bg-zinc-50 h-full m-0 antialiased scroll-smooth">
      <body suppressHydrationWarning className="h-full m-0 bg-zinc-50 text-zinc-900 flex flex-col">
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-[100] bg-zinc-900 text-white px-4 py-2 rounded-md font-mono text-sm font-bold shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
