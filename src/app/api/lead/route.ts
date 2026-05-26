import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const DESTINATION_EMAIL = 'info@telecamsistem.com';

const resend = new Resend(process.env.RESEND_API_KEY);

// Use env var if valid, otherwise use hardcoded destination
function getContactEmail(): string {
    const envEmail = (process.env.CONTACT_EMAIL || '').trim();
    if (envEmail && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(envEmail)) {
        return envEmail;
    }
    return DESTINATION_EMAIL;
}

export async function POST(request: Request) {
    try {
        const data = await request.json();

        // Server-side validation
        if (!data.name || !data.phone || !data.email || !data.city || !data.service || !data.contactPreference || !data.privacyAccept) {
            return NextResponse.json({ error: 'Faltan campos obligatorios' }, { status: 400 });
        }

        const contactEmail = getContactEmail();

        // Console log the payload for verification
        console.log(`[${new Date().toISOString()}] === Nuevo Lead Recibido ===`);
        console.log(`Nombre: ${data.name}`);
        console.log(`Empresa: ${data.company || 'N/A'}`);
        console.log(`Teléfono: ${data.phone}`);
        console.log(`Email: ${data.email}`);
        console.log(`Ciudad/Provincia: ${data.city}`);
        console.log(`Servicio de interés: ${data.service}`);
        console.log(`Preferencia: ${data.contactPreference}`);
        console.log(`Mensaje: \n${data.message || 'Sin mensaje'}`);
        console.log('===========================');

        // Enviar email usando Resend
        console.log('Intentando enviar email a:', contactEmail);
        console.log('RESEND_API_KEY presente:', !!process.env.RESEND_API_KEY);
        console.log('CONTACT_EMAIL raw:', JSON.stringify(process.env.CONTACT_EMAIL));
        
        const { data: emailData, error } = await resend.emails.send({
            from: 'Telecam Sistem <onboarding@resend.dev>',
            to: contactEmail,
            subject: `Nuevo Lead: ${data.service} - ${data.name}`,
            html: `
                <h2>Nuevo cliente interesado desde la web</h2>
                <p><strong>Nombre:</strong> ${data.name}</p>
                <p><strong>Empresa:</strong> ${data.company || 'N/A'}</p>
                <p><strong>Teléfono:</strong> ${data.phone}</p>
                <p><strong>Email:</strong> ${data.email}</p>
                <p><strong>Ciudad/Provincia:</strong> ${data.city}</p>
                <p><strong>Servicio de interés:</strong> ${data.service}</p>
                <p><strong>Preferencia de contacto:</strong> ${data.contactPreference}</p>
                <p><strong>Mensaje:</strong></p>
                <blockquote style="background: #f4f4f4; padding: 10px; border-left: 5px solid #0056b3;">
                    ${(data.message || 'Sin mensaje').replace(/\n/g, '<br>') || 'N/A'}
                </blockquote>
                <hr>
                <p><small>Este correo fue enviado automáticamente desde el formulario de contacto de Telecam Sistem.</small></p>
            `,
        });

        if (error) {
            console.error('❌ Error de Resend:', JSON.stringify(error));
            return NextResponse.json({ error: 'Error al enviar el email', details: error }, { status: 500 });
        }

        console.log('✅ Email enviado con éxito. ID:', emailData?.id);
        return NextResponse.json({ success: true, message: 'Lead procesado y enviado', id: emailData?.id }, { status: 200 });

    } catch (error) {
        console.error('Error procesando lead:', error);
        return NextResponse.json({ error: 'Error del servidor' }, { status: 500 });
    }
}
