import Image from 'next/image';
import Link from 'next/link';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col footer-col-brand">
            <Link href="/" className="footer-logo-link" aria-label="Inicio">
              <div className="footer-logo-wrap">
                <Image
                  src="/brand/logo.png"
                  alt="Telecam Sistem Logo"
                  fill
                  className="footer-logo"
                  priority
                />
              </div>
            </Link>
            <p className="mt-2 text-muted">
              Telecam Sistem S.L. Tecnología avanzada al servicio de tu seguridad.
            </p>
            <p className="mt-2">
              <strong>Email:</strong>{" "}
              <a href="mailto:info@telecamsistem.com" className="email-link">
                info@telecamsistem.com
              </a>
            </p>
          </div>

          <div className="footer-col footer-col-links">
            <h4 className="footer-title">Enlaces</h4>
            <ul className="footer-links">
              <li><Link href="/">Inicio</Link></li>
              <li><Link href="/financiacion">Financiación</Link></li>
              <li><Link href="/solicitar-presupuesto">Solicitar presupuesto</Link></li>
            </ul>
          </div>

          <div className="footer-col footer-col-legal">
            <h4 className="footer-title">Legal</h4>
            <ul className="footer-links">
              <li><Link href="/aviso-legal">Aviso Legal</Link></li>
              <li><Link href="/privacidad">Política de Privacidad</Link></li>
              <li><Link href="/condiciones">Condiciones</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="text-muted text-sm">
            &copy; {new Date().getFullYear()} Telecam Sistem SL. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
