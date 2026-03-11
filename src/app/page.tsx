"use client";
import Image from 'next/image';
import Link from 'next/link';
import Section from '@/components/Section';
import ServiceCard from '@/components/ServiceCard';
import PricingCard from '@/components/PricingCard';
import './page.css';

export default function Home() {
  return (
    <>
      {/* 1) Hero Section */}
      <section className="hero">
        <div className="hero-bg">
          <Image
            src="/images/hero-security.webp"
            alt="Hero background"
            fill
            priority
          />
        </div>
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <h1 className="hero-title">Tecnología avanzada al servicio de tu seguridad</h1>
          <p className="hero-subtitle">Soluciones integrales: videovigilancia analítica, intrusión certificada y control de accesos.</p>
          <div className="hero-actions">
            <Link href="/solicitar-presupuesto" className="btn btn-primary">
              Solicitar presupuesto
            </Link>
            <a href="https://wa.me/34660114968" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
              Contacto por WhatsApp
            </a>
          </div>
          <p className="trust-line mt-2">Te llamamos en menos de 24 h laborables.</p>
        </div>
      </section>

      {/* 2) Services Section */}
      <Section bgWhite>
        <h2 className="section-title text-center">Nuestros Servicios</h2>
        <p className="section-subtitle">Soluciones profesionales diseñadas para proteger lo que más importa.</p>

        <div className="split-grid reverse mb-8">
          <div className="content-block">
            <h3 className="section-title" style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>Sistemas Integrados</h3>
            <p className="content-lead">Descubra todas nuestras capacidades de seguridad combinadas.</p>
          </div>
          <div className="image-block">
            <Image src="/images/services.webp" alt="Servicios Integrados" fill />
          </div>
        </div>

        <div className="services-grid">
          <ServiceCard
            title="Niebla para zonas estratégicas"
            description="Protección inmediata para zonas críticas. Reduce visibilidad y frena intrusiones mientras se activa el protocolo de seguridad."
          />
          <ServiceCard
            title="Control de acceso vehicular"
            description="Gestiona entradas y salidas con control, registro y autorizaciones. Seguridad y orden en parkings, accesos y perímetros."
          />
          <ServiceCard
            title="Control de acceso empresarial"
            description="Controla quién entra, cuándo y dónde. Soluciones para oficinas, almacenes y áreas restringidas con gestión flexible."
          />
          <ServiceCard
            title="Redes"
            description="Infraestructura de red estable y segura para tus sistemas. Conectividad fiable para videovigilancia, control de accesos y monitorización remota."
          />
          <ServiceCard
            title="Alarmas cableadas e inalámbricas"
            description="Sistemas de intrusión adaptados a tu entorno. Instalación profesional y configuraciones según nivel de riesgo y operativa."
          />
          <ServiceCard
            title="Soluciones en videovigilancia analítica"
            description="CCTV con análisis inteligente para detección y verificación. Mayor precisión, menos falsas alarmas y mejor capacidad de respuesta."
          />
        </div>
      </Section>

      {/* 3) Pricing / Financing Section */}
      <Section>
        <h2 className="section-title text-center">Financiación Flexible</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <PricingCard price="Desde 4.860€" monthly="135€/mes" />
          <PricingCard price="Desde 1.944€" monthly="54€/mes" />
          <PricingCard price="Desde 1.080€" monthly="30€/mes" />
        </div>
        <p className="text-center text-muted mt-4">
          Financiación disponible. Importes orientativos según proyecto, equipos y alcance de la instalación.
        </p>
      </Section>

      {/* 4) Strategic Zones */}
      <Section bgWhite>
        <div className="split-grid">
          <div className="image-block">
            <Image src="/images/strategic-zones.webp" alt="Zonas estratégicas" fill />
          </div>
          <div className="content-block">
            <h2 className="section-title">Zonas Estratégicas</h2>
            <div className="zone-group">
              <h4 className="zone-title">Retail:</h4>
              <ul className="list-check">
                <li>Acceso principales y secundarios</li>
                <li>Zonas de caja y cobro</li>
                <li>Almacenes internos entradas de mercancías</li>
                <li>Área de alto valor</li>
              </ul>
            </div>
            <div className="zone-group">
              <h4 className="zone-title">Naves Industriales:</h4>
              <ul className="list-check">
                <li>Perímetro exterior</li>
                <li>Puertas de carga y descarga</li>
                <li>Zonas de almacenamiento</li>
                <li>Áreas restringidas</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* 5) Certified Intrusion */}
      <Section>
        <div className="split-grid reverse">
          <div className="content-block">
            <h2 className="section-title">Intrusión Certificada</h2>
            <p className="content-lead">
              Diseñamos e implementamos sistemas de intrusión conforme a normativa vigente, adaptando el nivel de riesgo y el entorno operativo del cliente.
            </p>
            <ul className="list-check mt-4">
              <li>Grado 2: Entornos comerciales y oficinas</li>
              <li>Grado 3: Retail de alto valor y entornos industriales</li>
            </ul>
          </div>
          <div className="image-block">
            <Image src="/images/intrusion-certified.webp" alt="Intrusión Certificada" fill />
          </div>
        </div>
      </Section>

      {/* 6) About Us */}
      <Section bgWhite>
        <div className="split-grid">
          <div className="image-block">
            <Image src="/images/about.webp" alt="Quiénes somos" fill />
          </div>
          <div className="content-block">
            <h2 className="section-title">Quiénes somos</h2>
            <p className="content-lead">
              <strong>Telecam Sistem SL</strong>
              Desde 2016 y 9 años de experiencia, nuestra misión es proteger hogar, negocio y tranquilidad.
            </p>
            <p className="mb-2"><strong>Nuestros servicios incluyen:</strong></p>
            <ul className="list-check mb-4">
              <li>Cámaras de seguridad (CCTV)</li>
              <li>Alarmas de intrusión grado2 y grado3</li>
              <li>Automatización y monitoreo remoto</li>
              <li>Mantenimiento preventivo y soporte técnico especializado</li>
            </ul>
            <p className="mb-4">
              <strong>Nuestro compromiso:</strong> Utilizamos tecnología de última generación, ofrecemos instalaciones rápidas y brindamos atención personalizada cuidando cada detalle “como si fuera para nuestra propia familia”.
            </p>
            <p className="mb-2"><strong>¿Por qué elegirnos?</strong></p>
            <ul className="list-check mb-4">
              <li>9 años de trayectoria comprobada</li>
              <li>Equipos de alta calidad y garantía real</li>
              <li>Asesoramiento claro, sin vueltas</li>
              <li>Respuesta rápida y soporte postventa</li>
            </ul>
            <p className="mt-4 text-primary font-bold" style={{ fontWeight: 700, fontSize: '1.1rem' }}>
              Telecam Sistem Tecnología al servicio de tu seguridad.
            </p>
          </div>
        </div>
      </Section>

      {/* 7) Contact CTA */}
      <Section className="text-center">
        <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>¿Listo para proteger su espacio?</h2>
        <p className="section-subtitle">
          Contáctenos hoy para recibir un presupuesto personalizado o para resolver cualquier duda que tenga sobre nuestros servicios.
        </p>
        <div className="flex justify-center gap-4" style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/solicitar-presupuesto" className="btn btn-primary">
            Solicitar presupuesto
          </Link>
          <a href="https://wa.me/34660114968" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
            Contacto por WhatsApp
          </a>
        </div>
        <p className="mt-4">
          O envíanos un correo a: <a href="mailto:info@telecamsistem.com" className="text-primary" style={{ fontWeight: 600 }}>info@telecamsistem.com</a>
        </p>
      </Section>
    </>
  );
}
