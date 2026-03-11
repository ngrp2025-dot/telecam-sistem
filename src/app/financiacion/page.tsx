import Link from 'next/link';
import Section from '@/components/Section';

export const metadata = {
    title: 'Financiación | Telecam Sistem SL',
    description: 'Opciones de financiación para sistemas de seguridad. Financia tu sistema de seguridad de forma flexible sin altos desembolsos iniciales.',
};

export default function Financiacion() {
    return (
        <Section bgWhite>
            <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
                <h1 className="section-title text-center">FINANCIACIÓN</h1>

                <div style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-main)' }}>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--primary)' }}>Financia tu sistema de seguridad de forma flexible</h2>
                    <p className="mb-4">
                        En Telecam Sistem SL ofrecemos opciones de financiación para que puedas implantar tu sistema de seguridad sin hacer un desembolso inicial elevado. La financiación está pensada para adaptarse tanto a hogares como a empresas, según el alcance del proyecto.
                    </p>

                    <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--text-main)', marginTop: '2.5rem' }}>Ejemplos orientativos</h3>
                    <p className="mb-2">
                        Estos importes son orientativos y pueden variar en función del tipo de instalación, el número de equipos, el nivel de seguridad requerido y las características del espacio:
                    </p>
                    <ul className="list-check mb-4">
                        <li>Desde 4.860€ o 135€/mes</li>
                        <li>Desde 1.944€ o 54€/mes</li>
                        <li>Desde 1.080€ o 30€/mes</li>
                    </ul>

                    <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--text-main)', marginTop: '2.5rem' }}>¿Cómo funciona?</h3>
                    <ol style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
                        <li className="mb-2">Nos envías tu solicitud con los datos básicos.</li>
                        <li className="mb-2">Analizamos necesidades y entorno (residencial o empresa).</li>
                        <li className="mb-2">Te proponemos una solución y, si lo deseas, una opción de financiación ajustada al proyecto.</li>
                    </ol>

                    <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--text-main)', marginTop: '2.5rem' }}>Solicita información</h3>
                    <p className="mb-8">
                        Si quieres conocer la opción más adecuada para tu caso, completa el formulario y te contactaremos para asesorarte.
                    </p>

                    <div className="flex justify-center gap-4 mt-8" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                        <Link href="/solicitar-presupuesto" className="btn btn-primary">
                            Solicitar presupuesto
                        </Link>
                        <a href="https://wa.me/34660114968" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
                            Contacto por WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        </Section>
    );
}
