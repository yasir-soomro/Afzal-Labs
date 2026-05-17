import type {Metadata} from 'next';
import './globals.css'; // Global styles

export const metadata: Metadata = {
  title: 'Afzal Labs',
  description: 'Building Intelligent Web Systems',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className="bg-[#0A0A0A] h-full m-0">
      <body suppressHydrationWarning className="h-full m-0 bg-[#0A0A0A] text-[#E0E0E0]">
        {children}
      </body>
    </html>
  );
}
