# 📘 Fase 1 · Apuntes 01 — Correr JS, variables y tipos

---

## 1. ¿Cómo ejecuto JavaScript?

Tenés Node.js instalado, así que podés correr archivos `.js` desde la terminal:

```bash
node mi-archivo.js
```

Node **lee tu archivo de arriba hacia abajo** y ejecuta cada línea en orden.

---

## 2. `console.log()` — tu herramienta para "ver" cosas

Muestra en la terminal lo que le pongas entre paréntesis. Es tu forma de espiar qué está pasando en tu código (la usarás MUCHÍSIMO para debuggear).

```js
console.log("Hola mundo");   // muestra: Hola mundo
console.log(2 + 3);          // muestra: 5
```

---

## 3. Variables — las "cajas con etiqueta"

Una variable **guarda un valor** para reusarlo. Se declaran con `let` o `const`:

```js
let edad = 30;          // caja "edad" que guarda 30
const nombre = "Maxi";  // caja "nombre" que guarda "Maxi"
```

### `let` vs `const` (importante)
| Palabra | Se puede cambiar el valor después? | Cuándo usar |
|---------|-----------------------------------|-------------|
| `const` | ❌ NO (constante) | **Por defecto usá `const`** |
| `let`   | ✅ SÍ | Solo cuando el valor VA a cambiar |

```js
let puntos = 0;
puntos = 10;      // ✅ permitido, es let

const pi = 3.14;
pi = 3;           // ❌ ERROR: no podés reasignar una const
```

> 🔑 Regla de oro: **empezá siempre con `const`. Solo cambialo a `let` si de verdad necesitás reasignar.** Esto hace tu código más seguro y predecible.

⚠️ Existe también `var` (forma vieja). **No la uses.** Solo la vas a ver en código antiguo.

---

## 4. Tipos de datos básicos

El valor dentro de la caja tiene un "tipo". Los esenciales:

| Tipo | Qué es | Ejemplo |
|------|--------|---------|
| **String** | Texto (siempre entre comillas) | `"Hola"`, `'Maxi'` |
| **Number** | Números (enteros o decimales) | `30`, `3.14`, `-5` |
| **Boolean** | Verdadero o falso | `true`, `false` |
| **Undefined** | Una caja declarada sin valor todavía | `let x;` → x es `undefined` |
| **Null** | "Vacío a propósito" | `let y = null;` |

Podés preguntar el tipo con `typeof`:
```js
console.log(typeof "Hola");   // "string"
console.log(typeof 30);       // "number"
console.log(typeof true);     // "boolean"
```

⚠️ **Cuidado clásico:** `"30"` (con comillas) es un **String**, no un Number. `"30" + 1` da `"301"` (pega texto), no `31`. Los tipos importan.

---

## 5. Nombrar variables (buenas prácticas)
- Nombres **descriptivos**: `edadUsuario` mejor que `x`.
- Estilo **camelCase**: primera palabra en minúscula, las siguientes con mayúscula inicial → `nombreCompleto`, `totalDelCarrito`.
- No pueden empezar con número ni tener espacios.

---

## Resumen de una línea
> Una **variable** (`const`/`let`) es una caja con nombre que guarda un **valor** de cierto **tipo** (string, number, boolean...), y `console.log()` te deja ver ese valor en la terminal.
