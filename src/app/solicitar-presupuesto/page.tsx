"use client";

import { useState } from 'react';
import Link from 'next/link';
import Section from '@/components/Section';
import './solicitar.css';

export default function SolicitarPresupuesto() {
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        phone: '',
        email: '',
        city: '',
        service: '',
        contactPreference: '',
        message: '',
        privacyAccept: false,
    });

    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
        const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
        setFormData(prev => ({ ...prev, [name]: val }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const res = await fetch('/api/lead', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (res.ok) {
                setStatus('success');
            } else {
                setStatus('error');
            }
        } catch {
            setStatus('error');
        }
    };

    if (status === 'success') {
        return (
            <Section className="success-screen text-center">
                <h1 className="success-icon">✓</h1>
                <h2 className="section-title">¡Mensaje enviado!</h2>
                <p className="success-msg">Gracias. Hemos recibido tu solicitud. Te contactaremos a la mayor brevedad.</p>
                <Link href="/" className="btn btn-primary mt-4">Volver al inicio</Link>
            </Section>
        );
    }

    return (
        <Section bgWhite>
            <div className="form-wrapper">
                <h1 className="section-title text-center">Solicitar presupuesto</h1>
                <p className="text-center text-muted mb-8">
                    Complete el siguiente formulario para que podamos analizar su caso y ofrecerle la solución de seguridad más adecuada.
                </p>

                {status === 'error' && (
                    <div className="alert-error">Hubo un problema al enviar el formulario. Por favor, intente nuevamente o contáctenos por WhatsApp.</div>
                )}

                <form onSubmit={handleSubmit} className="lead-form">
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="form-group">
                            <label htmlFor="name" className="form-label">Nombre y apellidos *</label>
                            <input type="text" id="name" name="name" required className="form-control" value={formData.name} onChange={handleChange} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="company" className="form-label">Empresa (opcional)</label>
                            <input type="text" id="company" name="company" className="form-control" value={formData.company} onChange={handleChange} />
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="form-group">
                            <label htmlFor="phone" className="form-label">Teléfono *</label>
                            <input type="tel" id="phone" name="phone" required className="form-control" value={formData.phone} onChange={handleChange} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email" className="form-label">Email *</label>
                            <input type="email" id="email" name="email" required className="form-control" value={formData.email} onChange={handleChange} />
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="form-group">
                            <label htmlFor="city" className="form-label">Ciudad / Provincia *</label>
                            <input type="text" id="city" name="city" required className="form-control" value={formData.city} onChange={handleChange} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="service" className="form-label">Tipo de servicio *</label>
                            <select id="service" name="service" required className="form-control" value={formData.service} onChange={handleChange}>
                                <option value="">Seleccione un servicio</option>
                                <option value="Videovigilancia analítica">Videovigilancia analítica</option>
                                <option value="Alarmas (cableadas / inalámbricas)">Alarmas (cableadas / inalámbricas)</option>
                                <option value="Control de acceso vehicular">Control de acceso vehicular</option>
                                <option value="Control de acceso empresarial">Control de acceso empresarial</option>
                                <option value="Redes">Redes</option>
                                <option value="Niebla / protección en zonas estratégicas">Niebla / protección en zonas estratégicas</option>
                                <option value="Otro">Otro</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-group mt-2">
                        <span className="form-label">Preferencia de contacto *</span>
                        <div className="radio-group" style={{ display: 'flex', gap: '2rem' }}>
                            <label>
                                <input type="radio" name="contactPreference" value="Llamada" required checked={formData.contactPreference === 'Llamada'} onChange={handleChange} />
                                Llamada
                            </label>
                            <label>
                                <input type="radio" name="contactPreference" value="WhatsApp" required checked={formData.contactPreference === 'WhatsApp'} onChange={handleChange} />
                                WhatsApp
                            </label>
                        </div>
                    </div>

                    <div className="form-group mt-4">
                        <label htmlFor="message" className="form-label">Mensaje (opcional)</label>
                        <textarea id="message" name="message" className="form-control" value={formData.message} onChange={handleChange} placeholder="Detalles de su instalación o dudas..."></textarea>
                    </div>

                    <div className="form-group checkbox-group mt-4">
                        <label>
                            <input type="checkbox" name="privacyAccept" required checked={formData.privacyAccept} onChange={handleChange} />
                            <span>He leído y acepto la <Link href="/privacidad" target="_blank" className="text-primary" style={{ textDecoration: 'underline' }}>Política de Privacidad</Link></span>
                        </label>
                    </div>

                    <button type="submit" className="btn btn-primary mt-4 btn-submit" disabled={status === 'loading'}>
                        {status === 'loading' ? 'Enviando...' : 'Enviar solicitud'}
                    </button>
                </form>
            </div>
        </Section>
    );
}
