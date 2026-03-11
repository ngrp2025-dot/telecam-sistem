import Section from '@/components/Section';

export const metadata = {
    title: 'Aviso Legal | Telecam Sistem SL',
    description: 'Aviso legal e información corporativa de Telecam Sistem SL.',
};

export default function AvisoLegal() {
    return (
        <Section bgWhite>
            <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
                <h1 className="section-title text-center">AVISO LEGAL</h1>

                <div style={{ fontSize: '1rem', lineHeight: '1.8', color: 'var(--text-main)' }}>
                    <h3 style={{ fontWeight: 600, marginTop: '2rem', marginBottom: '0.5rem' }}>1. Titular del sitio web</h3>
                    <p className="mb-4">
                        El presente sitio web es titularidad de Telecam Sistem SL (en adelante, ‘Telecam Sistem’).<br />
                        Correo electrónico de contacto: info@telecamsistem.com<br />
                        Dominio: telecamsistem.com
                    </p>

                    <h3 style={{ fontWeight: 600, marginTop: '2rem', marginBottom: '0.5rem' }}>2. Objeto</h3>
                    <p className="mb-4">
                        Este sitio web tiene como finalidad ofrecer información sobre los servicios de seguridad electrónica de Telecam Sistem SL (videovigilancia, intrusión, control de accesos, redes y servicios asociados), así como facilitar vías de contacto y solicitud de presupuesto.
                    </p>

                    <h3 style={{ fontWeight: 600, marginTop: '2rem', marginBottom: '0.5rem' }}>3. Condiciones de uso</h3>
                    <p className="mb-4">
                        El acceso y uso de este sitio web atribuye la condición de usuario e implica la aceptación de las presentes condiciones. El usuario se compromete a hacer un uso adecuado del sitio web, de conformidad con la ley, la buena fe y el orden público.
                    </p>

                    <h3 style={{ fontWeight: 600, marginTop: '2rem', marginBottom: '0.5rem' }}>4. Propiedad intelectual e industrial</h3>
                    <p className="mb-4">
                        Todos los contenidos del sitio web (textos, imágenes, diseño, logotipos, código, etc.) son titularidad de Telecam Sistem SL o se utilizan con la licencia correspondiente. Queda prohibida su reproducción, distribución o modificación sin autorización expresa.
                    </p>

                    <h3 style={{ fontWeight: 600, marginTop: '2rem', marginBottom: '0.5rem' }}>5. Responsabilidad</h3>
                    <p className="mb-4">
                        Telecam Sistem SL no se hace responsable de posibles daños derivados de interferencias, interrupciones, virus informáticos o desconexiones por causas ajenas. El contenido del sitio es informativo y no constituye una oferta contractual vinculante salvo indicación expresa.
                    </p>

                    <h3 style={{ fontWeight: 600, marginTop: '2rem', marginBottom: '0.5rem' }}>6. Enlaces externos</h3>
                    <p className="mb-4">
                        Este sitio puede incluir enlaces a sitios de terceros. Telecam Sistem SL no asume responsabilidad por el contenido, políticas o prácticas de dichos sitios.
                    </p>

                    <h3 style={{ fontWeight: 600, marginTop: '2rem', marginBottom: '0.5rem' }}>7. Legislación aplicable y jurisdicción</h3>
                    <p className="mb-4">
                        La relación entre el usuario y Telecam Sistem SL se regirá por la legislación española. En caso de conflicto, las partes se someterán a los juzgados y tribunales de Barcelona, salvo que la normativa de consumidores establezca otro fuero.
                    </p>
                </div>
            </div>
        </Section>
    );
}
