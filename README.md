# 🧬 BioAventura — Curso interactivo de Biología (estilo LMS)

Página web educativa hecha en **React + Vite**. Funciona como un **curso en línea** (similar a Udemy), sin base de datos:

- 📚 **6 capítulos** con **60 lecciones** en secuencia: lectura → video → lectura → actividad → …
- 🎬 Videos de YouTube embebidos entre las lecturas
- 🎮 **12 actividades interactivas** con **10 tipos de juego**
- 📊 **Progreso y puntajes** guardados en el navegador (`localStorage`)
- 🎓 **Diploma digital** al completar todas las lecciones
- 📥 **Reporte docente** descargable (protegido con contraseña `Tesis123`)
- 🎨 Diseño responsivo con barra lateral de lecciones y vista única (sin cambiar de pestaña)

---

## 🚀 Cómo ejecutarlo en tu computadora

Necesitas tener [Node.js](https://nodejs.org/) instalado (versión 18 o superior).

```bash
# 1. Instalar las dependencias (solo la primera vez)
npm install

# 2. Iniciar el servidor de desarrollo
npm run dev
```

Luego abre en el navegador la dirección que aparece (normalmente `http://localhost:5173/`).

Para generar la versión final optimizada:

```bash
npm run build     # crea la carpeta "dist"
npm run preview   # prueba esa versión final localmente
```

---

## 🌐 Cómo publicarlo en GitHub Pages

Tu objetivo es tener un enlace como `https://TU-USUARIO.github.io/`.
El proyecto ya está configurado (`base: './'`) para funcionar **en cualquiera de los dos casos** de abajo.

### ✅ Opción A (recomendada): Publicación automática con GitHub Actions

Con este método, cada vez que subes cambios el sitio se actualiza solo.

1. **Crea el repositorio en GitHub.**
   - Para un enlace corto tipo `https://TU-USUARIO.github.io/`
     → el repositorio debe llamarse **exactamente** `TU-USUARIO.github.io`.
   - Para un enlace tipo `https://TU-USUARIO.github.io/biologia/`
     → el repositorio puede llamarse como quieras (por ejemplo `biologia`).

2. **Sube el proyecto** (desde esta carpeta):

   ```bash
   git init
   git add .
   git commit -m "Primera versión de BioAventura"
   git branch -M main
   git remote add origin https://github.com/TU-USUARIO/NOMBRE-DEL-REPO.git
   git push -u origin main
   ```

3. En GitHub, entra a tu repositorio → **Settings** → **Pages**.
   En **"Build and deployment"**, en **Source**, elige **GitHub Actions**.

4. ¡Listo! Ve a la pestaña **Actions** y espera a que termine (ícono verde ✅).
   Tu página quedará publicada en el enlace que muestra la sección **Pages**.

> El archivo que hace la magia ya está incluido en `.github/workflows/deploy.yml`.

### 🅱️ Opción B: Publicación manual con el paquete `gh-pages`

1. Sube el proyecto a GitHub (pasos 1 y 2 de la Opción A).
2. Ejecuta:

   ```bash
   npm run deploy
   ```

   Esto construye el sitio y lo sube a una rama llamada `gh-pages`.
3. En GitHub: **Settings** → **Pages** → en **Source** elige la rama **`gh-pages`** y la carpeta **`/ (root)`**. Guarda.
4. Espera 1–2 minutos y abre tu enlace `https://TU-USUARIO.github.io/...`.

---

## 🎓 Cómo funciona el curso

1. El estudiante entra a **Iniciar curso** (`/curso`) e ingresa **nombres y apellidos**.
2. Navega por las lecciones desde la **barra lateral** o con los botones Anterior / Continuar.
3. Cada lección de lectura o video se marca como vista al continuar; las actividades guardan el **puntaje** al completarse.
4. Al terminar las **60 lecciones**, aparece el **diploma** con el nombre del estudiante (imprimible).
5. El docente puede descargar un **reporte** con todos los estudiantes y puntajes desde el botón en la cabecera del curso (contraseña: `Tesis123`).

Los datos se guardan en `localStorage` del navegador (clave `bioaventura_datos`). No se envían a ningún servidor.

---

## ✏️ Cómo cambiar el contenido

| Quiero cambiar...                | Edito este archivo               |
| -------------------------------- | -------------------------------- |
| Secuencia del curso (pasos)      | `src/data/curso.js`              |
| Los 6 capítulos (metadatos)      | `src/data/temas.js`              |
| Las páginas de cada capítulo     | `src/data/capitulos.js`          |
| Las 12 actividades               | `src/data/actividades.js`        |
| Persistencia y reporte docente   | `src/utils/storage.js`           |
| Los colores y estilos            | `src/styles/global.css`          |

**Imágenes:** cada tema tiene un campo `imagen` con un enlace. Si un enlace falla o lo dejas vacío, la página muestra automáticamente un fondo de color con el emoji del tema (nunca se ve "rota"). Para usar tus propias imágenes, puedes ponerlas en la carpeta `public/` y usar la ruta, por ejemplo `imagen: './mi-imagen.jpg'`.

---

## 🗂️ Estructura del proyecto

```
Poyect/
├─ index.html
├─ vite.config.js          # base: './' (clave para GitHub Pages)
├─ .github/workflows/deploy.yml   # despliegue automático
├─ public/
│  └─ favicon.svg
└─ src/
   ├─ main.jsx             # arranque de React (HashRouter)
   ├─ App.jsx              # rutas: /, /curso, /curso/:pasoId
   ├─ context/
   │  └─ CourseContext.jsx # estado del curso, registro, diploma
   ├─ data/
   │  ├─ curso.js          # secuencia de 60 lecciones
   │  ├─ temas.js          # metadatos de los 6 capítulos
   │  ├─ capitulos.js      # páginas de lectura
   │  └─ actividades.js    # las 12 actividades
   ├─ components/
   │  ├─ course/           # sidebar, pasos, modales, reporte
   │  └─ activities/       # 10 tipos de juego
   ├─ pages/               # Inicio, Curso...
   ├─ utils/
   │  └─ storage.js        # localStorage y reporte docente
   └─ styles/global.css    # diseño + layout estilo Udemy
```

---

## 📚 Los 6 capítulos

1. La Célula · 2. La Fotosíntesis · 3. El ADN y la Genética ·
4. Los Ecosistemas · 5. El Cuerpo Humano · 6. La Biodiversidad

Cada capítulo tiene **10 lecciones** (lecturas, videos y actividades intercalados).

---

Hecho con 💚 para aprender biología jugando.
