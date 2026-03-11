import Section from '@/components/Section';

export const metadata = {
    title: 'Política de Privacidad | Telecam Sistem SL',
    description: 'Política de Privacidad y gestión de datos de Telecam Sistem SL.',
};

export default function Privacidad() {
    return (
        <Section bgWhite>
            <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
                <h1 className="section-title text-center">POLÍTICA DE PRIVACIDAD</h1>

                <div style={{ fontSize: '1rem', lineHeight: '1.8', color: 'var(--text-main)' }}>
                    <h3 style={{ fontWeight: 600, marginTop: '2rem', marginBottom: '0.5rem' }}>1. Responsable del tratamiento</h3>
                    <p className="mb-4">
                        Responsable: Telecam Sistem SL<br />
                        Correo: info@telecamsistem.com
                    </p>

                    <h3 style={{ fontWeight: 600, marginTop: '2rem', marginBottom: '0.5rem' }}>2. Datos que recopilamos</h3>
                    <p className="mb-4">
                        Tratamos los datos que el usuario facilita a través de los formularios y canales de contacto: nombre, teléfono, email, ciudad/provincia, empresa (opcional), tipo de servicio solicitado y mensaje.
                    </p>

                    <h3 style={{ fontWeight: 600, marginTop: '2rem', marginBottom: '0.5rem' }}>3. Finalidades</h3>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem' }}>
                        <li>Gestionar solicitudes de información y presupuestos.</li>
                        <li>Contactar con el usuario por llamada o WhatsApp según la preferencia indicada.</li>
                        <li>Gestión comercial y administrativa de la relación con potenciales clientes.</li>
                    </ul>

                    <h3 style={{ fontWeight: 600, marginTop: '2rem', marginBottom: '0.5rem' }}>4. Base legal</h3>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem' }}>
                        <li>Consentimiento del interesado al enviar formularios o contactar.</li>
                        <li>Medidas precontractuales a petición del interesado (presupuestos).</li>
                    </ul>

                    <h3 style={{ fontWeight: 600, marginTop: '2rem', marginBottom: '0.5rem' }}>5. Destinatarios</h3>
                    <p className="mb-4">
                        No se cederán datos a terceros salvo obligación legal o cuando sea necesario para la prestación del servicio (por ejemplo, proveedores de hosting/correo o herramientas de gestión), bajo contratos de encargo del tratamiento.
                    </p>

                    <h3 style={{ fontWeight: 600, marginTop: '2rem', marginBottom: '0.5rem' }}>6. Conservación</h3>
                    <p className="mb-4">
                        Los datos se conservarán durante el tiempo necesario para atender la solicitud y, posteriormente, durante los plazos legalmente exigibles o mientras exista interés legítimo/consentimiento para comunicaciones relacionadas, pudiendo solicitar la baja en cualquier momento.
                    </p>

                    <h3 style={{ fontWeight: 600, marginTop: '2rem', marginBottom: '0.5rem' }}>7. Derechos</h3>
                    <p className="mb-4">
                        El usuario puede ejercer los derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad enviando un correo a info@telecamsistem.com, indicando &apos;Protección de datos&apos; y aportando información suficiente para su identificación.
                    </p>

                    <h3 style={{ fontWeight: 600, marginTop: '2rem', marginBottom: '0.5rem' }}>8. Seguridad</h3>
                    <p className="mb-4">
                        Telecam Sistem SL aplica medidas técnicas y organizativas para proteger los datos personales frente a accesos no autorizados, pérdida o alteración.
                    </p>

                    <h3 style={{ fontWeight: 600, marginTop: '2rem', marginBottom: '0.5rem' }}>9. Comunicaciones por WhatsApp</h3>
                    <p className="mb-4">
                        Si el usuario elige WhatsApp como canal preferente, acepta que la comunicación se realice mediante dicho servicio, sujeto a sus propias condiciones y políticas.
                    </p>

                    <h3 style={{ fontWeight: 600, marginTop: '2rem', marginBottom: '0.5rem' }}>10. Cambios en la política</h3>
                    <p className="mb-4">
                        Telecam Sistem SL podrá actualizar esta política para adaptarla a cambios normativos o del servicio. Se recomienda revisarla periódicamente.
                    </p>
                </div>
            </div>
        </Section>
    );
}
