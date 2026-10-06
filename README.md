<div align="center">
  <p>
  
  ![](https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=000)
  ![](https://img.shields.io/badge/vite-9135FF?style=for-the-badge&logo=vite&logoColor=fff)
  ![](https://img.shields.io/badge/mui-007FFF?style=for-the-badge&logo=mui&logoColor=fff)
  ![](https://img.shields.io/badge/redux-764ABC?style=for-the-badge&logo=redux&logoColor=fff)
  ![](https://img.shields.io/badge/scss-%23CC6699?style=for-the-badge&logo=sass&logoColor=fff)
  ![](https://img.shields.io/badge/biome-%2360A5FA?style=for-the-badge&logo=biome&logoColor=fff)
  ![](https://img.shields.io/badge/react%20router-%23CA4245?style=for-the-badge&logo=reactrouter&logoColor=fff)
  ![](https://img.shields.io/badge/typescript-%233178C6?style=for-the-badge&logo=typescript&logoColor=fff)
  </p>
  <img src="image.png" width="140"/>

  <h1>🚀 React + Vite | plantilla base 🚀</h1>
</div>

<p>
  Una plantilla práctica de React para el trabajo diario en productos,
  entrevistas técnicas y nuevos proyectos. Ofrece una configuración de Vite con
  tipado, una estructura de código clara orientada a funcionalidades y los
  fundamentos de interfaz, estado, enrutamiento y herramientas de calidad
  necesarios para empezar a desarrollar sin arrastrar la demo predeterminada de
  Vite.
</p>

## 🛠️ Stack Tecnológico

| Área | Tecnología incluida |
| --- | --- |
| Aplicación | React 19, React DOM, TypeScript 6 y Vite 8 |
| Integración de compilación de React | `@vitejs/plugin-react`, Babel y React Compiler |
| Navegación | React Router 8 |
| Interfaz | Material UI 9 con Emotion |
| Estado del cliente | Redux Toolkit y React Redux |
| Estilos | SCSS mediante `sass-embedded` |
| Calidad de código | Biome 2.5 para formateo, linting y organización segura de imports |

## ⚙️ Inicio rápido

```bash
pnpm install
```

```bash
pnpm run dev
```

El servidor de desarrollo se abre en `http://localhost:3000`. El puerto 
configurado es estricto, por lo que Vite muestra un error en vez de elegir otro
silenciosamente.

## 📜 Verificación de calidad

Comprueba el formateo, las reglas de lint y las asistencias seguras sin
modificar archivos. Ejecútalo antes de compartir cambios.

```bash
  pnpm run biome:check
```
Aplica el formateo y las correcciones seguras de Biome, incluida la organización
de imports. Revisa los cambios resultantes antes de confirmarlos.

```bash
  pnpm run biome:fix
```
Servir la compilación de producción localmente.

```bash
  pnpm run preview
```
## 📂 Estructura del proyecto

```text
src/
├── app/                # Shell de la aplicación, providers, router, store, styles y theme
├── assets/             # Recursos de la aplicación
├── entities/           # Punto de extensión para la capa de entidades
├── features/           # Punto de extensión para la capa de funcionalidades
├── pages/              # Páginas de nivel de ruta
├── shared/             # API, configuración, hooks, librerías, tipos e interfaz compartidos
├── widgets/            # Punto de extensión para interfaz compuesta
├── index.scss          # Punto de entrada de SCSS global
└── main.tsx            # Punto de entrada de React
```

`entities`, `features` y `widgets` están presentes intencionadamente como puntos de
extensión vacíos. Añade código allí cuando la aplicación necesite esas capas; el
starter no implica que ya contengan funcionalidades de dominio.

## Arquitectura Feature-Sliced Design

La plantilla utiliza una estructura ligera de capas FSD. Mantén cada
responsabilidad en la capa aplicable más específica:

| Capa | Ubicación | Responsabilidad |
| --- | --- | --- |
| App | `src/app` | Shell de la aplicación, proveedores, enrutamiento, store, estilos y tema. |
| Pages | `src/pages` | Pantallas de nivel de ruta. Las páginas se ubican directamente en `src/pages`; `src/app/router` les asigna las rutas. |
| Widgets | `src/widgets` | Reservada para bloques de interfaz compuestos. |
| Features | `src/features` | Reservada para funcionalidades orientadas al usuario. |
| Entities | `src/entities` | Reservada para entidades de dominio. |
| Shared | `src/shared` | API, configuración, hooks, librerías, tipos e interfaz reutilizables. |

`widgets`, `features` y `entities` son puntos de extensión vacíos en la plantilla.

## Decisiones técnicas

| Decisión | Motivo |
| --- | --- |
| Modo estricto de TypeScript | Los proyectos TypeScript de la aplicación y de la configuración de Vite habilitan el modo `strict` junto con comprobaciones de código sin uso. |
| Biome | `pnpm biome:check` valida el formateo, las reglas de lint y las asistencias seguras. Los recursos estáticos de `public/` se excluyen de las comprobaciones, mientras el formateo se limita a los archivos fuente y a `vite.config.ts`. |
| React Compiler | La configuración de Vite habilita React Compiler mediante el preset de Babel. |
| Alias de imports | `@app`, `@pages`, `@shared`, `@widgets` y `@entities` se configuran en TypeScript y Vite para lograr imports estables. |
| MUI y Emotion | Material UI está disponible para componentes accesibles y usa Emotion para la integración de estilos. |
| Redux Toolkit | Ya existe un store en `src/app/store` para el crecimiento predecible del estado del cliente. |
| SCSS | Los estilos globales comienzan en `src/index.scss`, con Sass proporcionado por `sass-embedded`. |

## Próximos pasos

Estas capacidades están previstas para el futuro; no están incluidas en el starter
actual:

- Pruebas automatizadas y un comando de test
- Integración continua (CI)
- Manejo específico de 404 y errores de aplicación
- Internacionalización (i18n)
- Pre - commit | Husky
