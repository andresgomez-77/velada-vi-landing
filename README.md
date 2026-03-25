<div align="center">

# 🥊 La Velada del Año VI — Landing Page

## Landing page moderna enfocada en experiencia de usuario, animaciones avanzadas y rendimiento.

### Fan Project · Portfolio · No Oficial

[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=flat-square&logo=tailwindcss)](https://tailwindcss.com)
[![Vite](https://img.shields.io/badge/Vite-8.0-646CFF?style=flat-square&logo=vite)](https://vitejs.dev)
[![Vercel](https://img.shields.io/badge/Deployed-Vercel-000000?style=flat-square&logo=vercel)](https://velada-vi-landing.vercel.app)
[![CI](https://img.shields.io/github/actions/workflow/status/andresgomez-77/velada-vi-landing/ci.yml?style=flat-square&label=CI)](https://github.com/andresgomez-77/velada-vi-landing/actions)

**[🔴 Ver Demo en Vivo](https://velada-vi-landing.vercel.app)**

![La Velada VI Landing Page](https://raw.githubusercontent.com/andresgomez-77/velada-vi-landing/main/src/assets/img/imagen_prueba.webp)

</div>

---

## 📋 Descripción

Proyecto desarrollado como práctica avanzada de frontend, enfocado en experiencia de usuario, animaciones complejas y optimización de rendimiento.

> ⚠️ **Disclaimer:** Este es un proyecto no oficial de portafolio. No está afiliado a Ibai Llanos, su equipo ni al evento La Velada del Año. Creado únicamente con fines educativos y de demostración técnica.

---

## ✨ Features

- 🎬 **Intro animada** con imagen de fondo y efectos de entrada
- ⏱️ **Countdown** en tiempo real hasta el evento
- 🥊 **Galería de luchadores** con efecto hover expandible (estilo Avengers)
- 📋 **Cartelera completa** con todas las peleas y el Main Event destacado
- 📺 **Stream en vivo** integrado con Twitch, YouTube y TikTok
- 🎙️ **Equipo de comentaristas** con cards animadas
- 📱 **100% Responsive** — Mobile First
- 🌙 **Dark theme** con paleta dorada
- ♿ **Accesible** — roles ARIA, focus visible, reduced motion

---

## 🛠️ Stack Técnico

| Tecnología    | Versión | Uso         |
| ------------- | ------- | ----------- |
| React         | 19      | UI Library  |
| TypeScript    | 5.9     | Type Safety |
| Tailwind CSS  | v4      | Estilos     |
| Framer Motion | 12      | Animaciones |
| Vite          | 8.0     | Build Tool  |
| Vitest        | 4       | Testing     |
| ESLint        | 9       | Linting     |

---

## 🚀 Instalación y Uso

```bash
# Clonar el repositorio
git clone https://github.com/andresgomez-77/velada-vi-landing.git
cd velada-vi-landing

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Build de producción
npm run build

# Preview del build
npm run preview
```

---

## 🧪 Tests y Calidad

```bash
# Ejecutar tests
npm run test

# Tests con UI
npm run test:ui

# Cobertura de tests
npm run test:coverage

# Lint
npm run lint

# Type check
npx tsc --noEmit
```

---

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── Commentators/     # Equipo de comentaristas
│   ├── Countdown/        # Contador regresivo
│   ├── Fighters/         # Galería de luchadores
│   ├── Fights/           # Cartelera de peleas
│   ├── Footer/           # Pie de página
│   ├── Hero/             # Sección principal
│   ├── Intro/            # Pantalla de introducción
│   ├── Navbar/           # Navegación
│   ├── Sponsors/         # Patrocinadores
│   └── Stream/           # Sección de stream
├── data/
│   ├── fighters.ts       # Datos de luchadores
│   └── fights.ts         # Datos de peleas
├── hooks/
│   └── useCountdown.ts   # Hook countdown
└── test/                 # Tests unitarios
```

---

## 🔄 CI/CD

El proyecto usa **GitHub Actions** con 3 workflows:

- **CI** — ESLint + TypeScript check + Build en cada PR
- **Security** — Auditoría de dependencias
- **Release Please** — Releases automáticos con conventional commits

La rama `main` está protegida — todo cambio requiere PR con checks en verde.

---

## 📱 Screenshots

| Desktop               | Mobile          |
| --------------------- | --------------- |
| Hero con countdown    | Hero responsive |
| Galería de luchadores | Grid 2 columnas |
| Cartelera completa    | Cards adaptadas |

---

## 🧑‍💻 Aprendizajes

- Tailwind v4 y sus diferencias con v3 (nuevo sistema de configuración, clases dinámicas)
- Framer Motion para animaciones complejas con `AnimatePresence` y `layoutId`
- Patrones de responsive design con detección JS cuando CSS no es suficiente
- CI/CD profesional con GitHub Actions y branch protection
- Deploy automático con Vercel

---

## 🧠 Decisiones Técnicas

- Implementación de animaciones complejas utilizando Framer Motion (`layoutId`, `AnimatePresence`) para transiciones fluidas entre componentes.
- Manejo de estado local optimizado para evitar re-renderizados innecesarios en componentes dinámicos como el countdown.
- Uso de hooks personalizados (`useCountdown`) para encapsular lógica reutilizable.
- Estructura modular de componentes para escalabilidad y mantenimiento.
- Estrategias de responsive design combinando Tailwind CSS con lógica en JavaScript cuando CSS no es suficiente.

---

## ⚡ Optimización

- Lazy loading de componentes para mejorar tiempo de carga inicial
- Optimización de imágenes (formato `.webp`)
- Minimización de re-renderizados con separación de componentes
- Build optimizado con Vite

---

## 🚧 Retos Técnicos

- Manejo de animaciones complejas sin afectar rendimiento
- Sincronización del countdown en tiempo real
- Adaptación de layout dinámico en múltiples dispositivos
- Integración de múltiples plataformas de streaming (Twitch, YouTube, TikTok)
---
## 📄 Licencia

MIT License — Libre para uso educativo.

**Este proyecto no tiene afiliación oficial con Ibai Llanos, La Velada del Año ni ninguna de las marcas mencionadas.**

---

<div align="center">

Desarrollado con ❤️ por **[Andrés Gómez](https://github.com/andresgomez-77)**

⭐ Si te gustó el proyecto, dale una estrella en GitHub

</div>
