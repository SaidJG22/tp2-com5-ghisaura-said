# Mi Portfolio Multipágina con React Router DOM

**Trabajo Práctico Nº 2 — UTN FRT**

- **Estudiante:** Said Ghisaura
- **Comisión:** 5

## Descripción

Continuación del portfolio del TP1, transformado en una aplicación multipágina con React y React Router DOM. La pantalla se divide en un menú lateral, que queda siempre visible, y un área de contenido que cambia según la ruta, sin recargar la página.

Páginas:

| Página | Ruta | Contenido |
| --- | --- | --- |
| Home | `/` | Nombre, presentación, perfil y accesos rápidos al resto del sitio |
| Sobre mí | `/about` | Presentación, intereses, objetivos, formación (con botón **Ver más / Ver menos**) |
| Habilidades | `/skills` | Tecnologías y herramientas, con filtros por categoría |
| Proyectos | `/projects` | 4 proyectos con descripción, tecnologías, detalle desplegable y enlace |
| Contacto | `/contact` | Email, GitHub, Instagram y sitio web |
| (extra) 404 | cualquier otra | Aviso de página no encontrada |

## Tecnologías utilizadas

- React
- React Router DOM
- JavaScript (JSX)
- Vite
- CSS

## Instalación y ejecución

1. Clonar el repositorio:

   ```bash
   git clone https://github.com/SaidJG22/tp2-com5-ghisaura-said.git
   cd tp2-com5-ghisaura-said
   ```

2. Instalar las dependencias:

   ```bash
   npm install
   ```

3. Ejecutar el proyecto en modo desarrollo:

   ```bash
   npm run dev
   ```

   Después abrir en el navegador la dirección que muestra la consola (por defecto `http://localhost:5173`).

## Repositorio

https://github.com/SaidJG22/tp2-com5-ghisaura-said

## Estructura del proyecto

```
src/
├── App.jsx                → layout (Sidebar + main) y definición de rutas
├── main.jsx               → monta la app dentro de <BrowserRouter>
├── components/
│   ├── Sidebar.jsx        → menú lateral con NavLink (opción activa resaltada)
│   ├── Header.jsx         → título y subtítulo de cada página
│   ├── SkillCard.jsx      → tarjeta de una habilidad
│   ├── ProjectCard.jsx    → tarjeta de un proyecto con "Ver más"
│   └── ContactCard.jsx    → un medio de contacto
├── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   ├── Contact.jsx
│   └── NotFound.jsx
├── data/
│   ├── habilidades.js     → array de habilidades
│   ├── proyectos.js       → array de proyectos
│   └── contactos.js       → array de medios de contacto
└── styles/                → index.css (paleta y clases generales) + un CSS por sección
```

## Dónde se cumple cada requisito técnico

| Requisito | Dónde se cumple |
| --- | --- |
| Proyecto creado con Vite | `package.json` (scripts `vite`), `vite.config.js` |
| React Router DOM instalado | `package.json` → `dependencies` → `react-router-dom` |
| Cinco páginas | `src/pages/`: `Home`, `About`, `Skills`, `Projects`, `Contact` (+ `NotFound`) |
| Al menos 5 componentes propios | `Sidebar`, `Header`, `SkillCard`, `ProjectCard`, `ContactCard` en `src/components/` |
| `BrowserRouter` | `src/main.jsx` línea 9 |
| `Routes` y `Route` | `src/App.jsx` líneas 20-27 |
| `NavLink` | `src/components/Sidebar.jsx` línea 43 (menú lateral, marca la opción activa) |
| `Link` | `src/pages/Home.jsx` líneas 29, 30 y 42; `src/components/Sidebar.jsx` línea 21 |
| Layout persistente | `src/App.jsx`: `<Sidebar />` está fuera de `<Routes>`, solo cambia el `<main>` |
| Props | `Sidebar` (`nombre`, `profesion`), `Header` (`titulo`, `resaltado`, `subtitulo`), `SkillCard`, `ProjectCard` (`proyecto`), `ContactCard`, `Home` y `Contact` (`nombre`) |
| Arrays de datos | `src/data/habilidades.js`, `src/data/proyectos.js`, `src/data/contactos.js` |
| `map()` + `key` | `Projects.jsx` líneas 16-17, `Skills.jsx` líneas 23-25 y 35-37, `Contact.jsx` líneas 18-20, `Sidebar.jsx` líneas 42-44, `ProjectCard.jsx` líneas 15-16 |
| Eventos (`onClick`) | `About.jsx` línea 45, `Skills.jsx` línea 27, `ProjectCard.jsx` línea 21, `Sidebar.jsx` línea 33 |
| `useState` | `About.jsx` línea 6 (Ver más), `Skills.jsx` línea 11 (filtro), `ProjectCard.jsx` línea 5 (detalle), `Sidebar.jsx` línea 16 (menú en celular) |
| Distribución 30/70 | `src/styles/Layout.css`: `grid-template-columns: 30% 70%` |
| Responsive | En pantallas de hasta 768 px el menú pasa arriba con un botón ☰ (`Sidebar.css`, `Layout.css`) |
