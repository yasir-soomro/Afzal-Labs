import type {Metadata} from 'next';
import './globals.css'; // Global styles

export const metadata: Metadata = {
  title: 'Afzal Labs',
  description: 'Building Intelligent Web Systems',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className="bg-zinc-50 h-full m-0 antialiased">
      <body suppressHydrationWarning className="h-full m-0 bg-zinc-50 text-zinc-900">
        {children}
      </body>
    </html>
  );
}
