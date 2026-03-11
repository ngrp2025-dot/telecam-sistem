# Telecam Sistem SL - Sitio Web Corporativo

Proyecto Next.js (App Router) desarrollado para **Telecam Sistem SL**, centrado en ofrecer una experiencia premium de seguridad residencial e industrial.

## Stack Tecnológico
- **Framework:** Next.js (App Router, Reac 19)
- **Lenguaje:** TypeScript
- **Estilos:** Vanilla CSS moderno (Grid, Flexbox, Custom Properties) sin Tailwind.
- **Formularios:** Client-side form con envío a API Route (`/api/lead`).

## Instrucciones de Instalación Local

1. **Instalar dependencias:**
   ```bash
   npm install
   ```

2. **Arrancar modo desarrollo:**
   ```bash
   npm run dev
   ```
   Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

3. **Construir para producción:**
   ```bash
   npm run build
   ```
   > Esto verifica Typescript y ESLint, además de compilar y optimizar la web.

4. **Arrancar entorno de producción local:**
   ```bash
   npm run start
   ```

## Cómo Desplegar en Vercel

Vercel es el entorno nativo de Next.js. El flujo ideal es conectar este repositorio de GitHub:

1. **Sube el código a GitHub:**
   Crea un repositorio en GitHub, inicializa localmente con `git init`, haz add/commit y pushea tu código a `main`.
2. **Conecta en Vercel:**
   - Inicia sesión en [Vercel](https://vercel.com).
   - Haz click en "Add New..." -> "Project".
   - Importa tu repositorio de GitHub "telecam-sistem".
   - Vercel detectará automáticamente que es un proyecto de Next.js.
   - Presiona "Deploy".

Tras 1 o 2 minutos, el sitio web estará en vivo con HTTPS automático.

## Notas sobre el Backend para Emails
Actualmente la ruta `/api/lead` valida y visualiza los datos en la consola (server logs). Para que lleguen al email (`info@telecamsistem.com`):
1. Crea una cuenta gratuita en [Resend](https://resend.com) u otra alternativa SMTP.
2. Agrega la clave API de Resend en `.env.local`
3. Instala el SDK de resend (`npm install resend`) y añade la lógica de envío en `app/api/lead/route.ts` en la línea marcada como "// TO DO para el futuro: Integrar Resend".
