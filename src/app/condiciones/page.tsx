import Section from '@/components/Section';

export const metadata = {
    title: 'Condiciones | Telecam Sistem SL',
    description: 'Condiciones de uso y contratación de Telecam Sistem SL.',
};

export default function Condiciones() {
    return (
        <Section bgWhite>
            <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
                <h1 className="section-title text-center">CONDICIONES</h1>

                <div style={{ fontSize: '1rem', lineHeight: '1.8', color: 'var(--text-main)' }}>
                    <h3 style={{ fontWeight: 600, marginTop: '2rem', marginBottom: '0.5rem' }}>1. Información general</h3>
                    <p className="mb-4">
                        Estas condiciones regulan el uso del sitio web y las solicitudes de presupuesto realizadas por los usuarios.
                    </p>

                    <h3 style={{ fontWeight: 600, marginTop: '2rem', marginBottom: '0.5rem' }}>2. Solicitud de presupuesto</h3>
                    <p className="mb-4">
                        La solicitud de presupuesto a través del formulario o por WhatsApp/email no implica contratación automática. Telecam Sistem SL podrá solicitar información adicional para elaborar una propuesta ajustada al entorno y necesidades.
                    </p>

                    <h3 style={{ fontWeight: 600, marginTop: '2rem', marginBottom: '0.5rem' }}>3. Propuestas y precios</h3>
                    <p className="mb-4">
                        Las cifras o rangos que se muestren en el sitio web tienen carácter orientativo. La propuesta final dependerá del análisis técnico, alcance, materiales, instalación y condiciones del servicio.
                    </p>

                    <h3 style={{ fontWeight: 600, marginTop: '2rem', marginBottom: '0.5rem' }}>4. Plazos de instalación y disponibilidad</h3>
                    <p className="mb-4">
                        Los plazos se confirmarán en la propuesta. Podrán variar por disponibilidad de materiales, agenda de instalación o condiciones del lugar.
                    </p>

                    <h3 style={{ fontWeight: 600, marginTop: '2rem', marginBottom: '0.5rem' }}>5. Garantías y soporte</h3>
                    <p className="mb-4">
                        Las garantías aplicables se especificarán en el presupuesto/contrato, junto con condiciones de mantenimiento y soporte cuando corresponda.
                    </p>

                    <h3 style={{ fontWeight: 600, marginTop: '2rem', marginBottom: '0.5rem' }}>6. Uso del sitio</h3>
                    <p className="mb-4">
                        El usuario se compromete a no usar el sitio con fines ilícitos, ni introducir o difundir malware, ni realizar acciones que dañen o impidan su funcionamiento.
                    </p>

                    <h3 style={{ fontWeight: 600, marginTop: '2rem', marginBottom: '0.5rem' }}>7. Limitación de responsabilidad</h3>
                    <p className="mb-4">
                        Telecam Sistem SL no se responsabiliza por daños derivados del uso incorrecto de la información del sitio o por interrupciones ajenas a su control.
                    </p>

                    <h3 style={{ fontWeight: 600, marginTop: '2rem', marginBottom: '0.5rem' }}>8. Modificaciones</h3>
                    <p className="mb-4">
                        Telecam Sistem SL puede modificar estas condiciones para adaptarlas a cambios legales o del servicio. La versión vigente será la publicada en el sitio.
                    </p>
                </div>
            </div>
        </Section>
    );
}
