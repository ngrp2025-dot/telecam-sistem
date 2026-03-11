import Image from 'next/image';
import Link from 'next/link';
import './Header.css';

export default function Header() {
    return (
        <header className="header">
            <div className="container header-inner">
                <Link href="/" className="logo-link">
                    <Image
  src="/brand/logo.png"
  alt="Telecam Sistem Logo"
  width={360}
  height={80}
  style={{ width: "360px", height: "80px" }}
  className="logo"
  priority
/>

                </Link>
                <nav className="desktop-nav">
                    <Link href="/financiacion" className="nav-link">Financiación</Link>
                    <Link href="/solicitar-presupuesto" className="btn btn-primary">Solicitar presupuesto</Link>
                </nav>
                {/* Mobile menu could be toggled here, keeping it simple for now */}
            </div>
        </header>
    );
}
