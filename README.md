# Proyecto JavaScript - Ejercicios Básicos

Descripción
-----------

Colección de ejemplos y ejercicios para aprender JavaScript (básico). Incluye archivos de ejemplo sobre tipos de datos, operadores, condicionales, estructuras, funciones, clases y manejo de errores, además de ejercicios prácticos.

Estructura del proyecto
-----------------------

- `src/`
  - `index.html` — página de ejemplo/índice.
  - `Basic/` — ejemplos y lecciones numeradas:
    - `0.1 HolaMundo.js`, `0.2 Variables.js`, `0.3TiposdeDatos.js`, etc.
  - `Basic/Exercicies/` — ejercicios agrupados (por tema): `1.EjerciciosTiposdeDatos.js`, `2.EjerciciosOperadores.js`, ...

Requisitos
----------

- Navegador web moderno (para abrir `src/index.html`).
- Node.js (opcional, para ejecutar scripts `.js` desde la línea de comandos).
- Recomendado: la extensión Live Server para VS Code o un servidor HTTP simple.

Cómo usar
---------

- Abrir `src/index.html` en el navegador (doble clic o sirviendo el directorio).
- Para servir el proyecto localmente (ejemplos):

  - Con Python (si disponible):

    ```bash
    python -m http.server 8000
    ```

  - Con `serve` (Node):

    ```bash
    npm install -g serve
    serve .
    ```

- Ejecutar un archivo JS con Node (nombres con espacios deben escaparse o renombrarse):

  ```bash
  node "src/Basic/0.1 HolaMundo.js"
  ```

Buenas prácticas y notas
------------------------

- Algunos archivos contienen espacios, puntos y caracteres especiales en sus nombres. Considera renombrarlos a formatos sin espacios (por ejemplo `01-HolaMundo.js`) para facilitar su ejecución desde terminal y control de versiones.
- Este repositorio es didáctico: si quieres, puedo ayudarte a agregar un `package.json` mínimo, scripts de ejecución o renombrar los archivos automáticamente.

Contacto
--------

Si quieres que adapte el README (más detalles, instrucciones para Windows, tareas automatizadas, u otros cambios), dime qué añadir y lo actualizo.
