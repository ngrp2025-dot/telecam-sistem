import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

export const metadata: Metadata = {
  title: 'Telecam Sistem SL | Tecnología avanzada al servicio de tu seguridad',
  description: 'Soluciones integrales de seguridad en España: videovigilancia analítica, intrusión certificada y control de accesos para hogares y empresas.',
  openGraph: {
    title: 'Telecam Sistem SL | Tecnología avanzada al servicio de tu seguridad',
    description: 'Soluciones integrales de seguridad en España: videovigilancia analítica, intrusión certificada y control de accesos.',
    url: 'https://www.telecamsistem.com',
    siteName: 'Telecam Sistem SL',
    locale: 'es_ES',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
