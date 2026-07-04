# 🧬 BioAventura — Libro digital interactivo de Biología

Página web educativa hecha en **React + Vite**. Incluye:

- 📖 Un **libro** con **6 capítulos** y **30 páginas** de lectura (5 por capítulo), con imágenes, puntos clave, vocabulario y datos curiosos.
- 🎮 Una zona de **12 actividades interactivas** (2 por capítulo) con **10 tipos de juego**.
- 🎨 Diseño colorido y responsivo, pensado para captar la atención de los estudiantes.
- 💾 **Sin base de datos**: todo el contenido está en archivos JSON internos (una maqueta).

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

## ✏️ Cómo cambiar el contenido

Todo el texto e imágenes está en archivos fáciles de editar:

| Quiero cambiar...                | Edito este archivo               |
| -------------------------------- | -------------------------------- |
| Los 6 capítulos (metadatos)      | `src/data/temas.js`              |
| Las páginas de cada capítulo     | `src/data/capitulos.js`          |
| Las 12 actividades               | `src/data/actividades.js`        |
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
   ├─ App.jsx              # rutas de la app
   ├─ data/
   │  ├─ temas.js          # 🔵 los 10 temas
   │  └─ actividades.js    # 🟢 las 20 actividades
   ├─ components/          # navbar, tarjetas, imagen con respaldo...
   │  └─ activities/       # Ahorcado, Completar, Quiz, VerdaderoFalso
   ├─ pages/               # Inicio, Libro, TemaDetalle, Actividades...
   ├─ utils/               # comparación de texto sin tildes
   └─ styles/global.css    # 🎨 todo el diseño
```

---

## 📚 Los 6 capítulos

1. La Célula · 2. La Fotosíntesis · 3. El ADN y la Genética ·
4. Los Ecosistemas · 5. El Cuerpo Humano · 6. La Biodiversidad

Cada capítulo tiene **5 páginas** y **2 actividades** para reforzar lo aprendido.

---

Hecho con 💚 para aprender biología jugando.
