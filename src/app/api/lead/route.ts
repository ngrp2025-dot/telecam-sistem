import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const data = await request.json();

        // Server-side validation
        if (!data.name || !data.phone || !data.email || !data.city || !data.service || !data.contactPreference || !data.privacyAccept) {
            return NextResponse.json({ error: 'Faltan campos obligatorios' }, { status: 400 });
        }

        // Console log the payload for verification as requested
        console.log('=== Nuevo Lead Recibido ===');
        console.log(`Nombre: ${data.name}`);
        console.log(`Empresa: ${data.company || 'N/A'}`);
        console.log(`Teléfono: ${data.phone}`);
        console.log(`Email: ${data.email}`);
        console.log(`Ciudad/Provincia: ${data.city}`);
        console.log(`Servicio de interés: ${data.service}`);
        console.log(`Preferencia: ${data.contactPreference}`);
        console.log(`Mensaje: \n${data.message || 'Sin mensaje'}`);
        console.log('Privacidad aceptada: Sí');
        console.log('===========================');

        // 💡 TO DO para el futuro: Integrar Resend, Sendgrid, o SMTP para enviar emails aquí

        return NextResponse.json({ success: true, message: 'Recibido correctamente' }, { status: 200 });

    } catch (error) {
        console.error('Error procesando lead:', error);
        return NextResponse.json({ error: 'Error del servidor' }, { status: 500 });
    }
}
