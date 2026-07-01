# 📘 Apuntes 01 — Conceptos base (Fase 0)

Referencia rápida de los conceptos fundamentales. Volvé acá cuando dudes.

---

## 1. Modelo Cliente–Servidor

Cuando entrás a una web, dos computadoras se hablan:

- **Cliente** = el **navegador** (Chrome, Firefox...). Es el *software* que corre en TU máquina y hace pedidos. (Vos sos el *usuario*; el cliente es el programa que actúa por vos.)
- **Servidor** = **otra computadora**, en algún data center, que tiene los archivos y datos de esa web (ej: los servidores de Instagram) y responde a los pedidos.
- **La red / internet** = el "camarero": transporta los mensajes de ida y vuelta.
- **HTTP** = el *idioma* en que cliente y servidor se hablan (petición → respuesta).

> Al escribir `instagram.com` + Enter: tu **navegador (cliente)** manda una **petición HTTP** por la **red** al **servidor** de Instagram, que responde con el HTML/CSS/JS + datos, y el navegador los dibuja.

---

## 2. Variable

Una variable es una **caja con etiqueta que guarda un valor**. No es una acción — es un *contenedor de datos* al que le ponés nombre para reusarlo.

```js
let edad = 30;        // caja llamada "edad" que guarda el número 30
let nombre = "Ana";   // caja llamada "nombre" que guarda el texto "Ana"
edad = 31;            // el valor PUEDE cambiar → por eso "variable"
```

La intuición de "puede tener un valor u otro" es correcta: *varía*. Pero lo esencial es que **almacena**, no que ejecuta.

---

## 3. HTML vs CSS vs JavaScript (los 3 lenguajes del frontend)

Analogía del cuerpo humano 🧍:

| Lenguaje | Rol | Analogía |
|----------|-----|----------|
| **HTML** | **Estructura y contenido** (títulos, textos, botones, imágenes) | El **esqueleto** |
| **CSS** | **Presentación** (colores, tamaños, posición, diseño) | La **ropa y el aspecto** |
| **JavaScript** | **Comportamiento** (qué pasa al hacer clic, lógica, interactividad) | Los **músculos** que lo mueven |

⚠️ Corrección importante: **JavaScript NO es "el lenguaje en que se escribe HTML/CSS".** Son **3 lenguajes distintos** que trabajan juntos. HTML se escribe en HTML, CSS en CSS, JS en JS.

---

## 4. Terminal / Línea de comandos

Es una ventana donde le das órdenes a la computadora **escribiendo texto** en vez de hacer clics.

- Ejemplos: **CMD**, **PowerShell**, la **terminal integrada de VS Code**, **bash**.
- Sirve para: navegar carpetas, crear archivos, ejecutar programas, usar Git, correr tu código.

⚠️ Ojo: la parte de **"Inspeccionar" / DevTools de Chrome** NO es la terminal. Eso es una herramienta para *ver el código de una web ajena*. La terminal es donde vos das comandos.

---

## 5. Git vs GitHub

- **Git** = herramienta de **control de versiones**. Guarda "fotos" (commits) de tu código en el tiempo. Te deja volver atrás, ver qué cambiaste y cuándo. Corre en **tu máquina**.
- **GitHub** = un **sitio web** donde *subís* esos repositorios para guardarlos en la nube, compartirlos y colaborar. Es tu **portafolio público** para conseguir trabajo.

Analogía: **Git** es como el historial de versiones de un Google Doc. **GitHub** es como Google Drive donde guardás y compartís ese documento.

⚠️ Correcciones: Git **NO** "valida el código" ni "busca errores", y **NO** genera bases de datos ni SQL. Es solo historial + colaboración de código.

---

## Resumen de una línea
> Programar full-stack = construir **Frontend** (HTML+CSS+JS en el cliente) + **Backend** (lógica en el servidor) + **Base de datos** (datos), conectados por **HTTP**, versionado con **Git/GitHub**.
