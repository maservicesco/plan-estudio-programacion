# 📘 Fase 1 · Apuntes 02 — Condicionales (if / else)

Hacer que el código **tome decisiones** según las condiciones.

---

## 1. Operadores de comparación (producen `true` o `false`)

Comparan dos valores y devuelven un **boolean** (verdadero/falso):

| Operador | Significa | Ejemplo | Resultado |
|----------|-----------|---------|-----------|
| `===` | igual a (mismo valor Y tipo) | `5 === 5` | `true` |
| `!==` | distinto de | `5 !== 3` | `true` |
| `>` | mayor que | `5 > 3` | `true` |
| `<` | menor que | `5 < 3` | `false` |
| `>=` | mayor o igual | `5 >= 5` | `true` |
| `<=` | menor o igual | `4 <= 3` | `false` |

⚠️ **Usá siempre `===` (triple igual), NO `==` (doble).** El triple compara valor Y tipo (más seguro y predecible). El doble hace conversiones raras. Regla: `===` siempre.

⚠️ **Ojo:** un `=` solo es **asignar** (poner un valor en una caja). Tres `===` es **comparar**. No los confundas:
```js
let x = 5;      // asignación: mete 5 en x
x === 5;        // comparación: ¿x es igual a 5? → true
```

---

## 2. `if` — "si se cumple esto, hacé aquello"

```js
const edad = 20;

if (edad >= 18) {
  console.log("Sos mayor de edad");
}
```
- Lo que va entre `( )` es la **condición** (tiene que dar `true` o `false`).
- Lo que va entre `{ }` se ejecuta **solo si** la condición es `true`.

---

## 3. `if / else` — "si no, hacé esta otra cosa"

```js
const edad = 15;

if (edad >= 18) {
  console.log("Podés entrar");
} else {
  console.log("No podés entrar");   // se ejecuta si la condición es false
}
```

---

## 4. `if / else if / else` — varias opciones en cadena

```js
const nota = 7;

if (nota >= 9) {
  console.log("Excelente");
} else if (nota >= 6) {
  console.log("Aprobado");
} else {
  console.log("Desaprobado");
}
```
JavaScript evalúa de arriba hacia abajo y **ejecuta el primer bloque que dé `true`**, después se saltea el resto.

---

## 5. Operadores lógicos (combinar condiciones)

| Operador | Nombre | Da `true` cuando... | Ejemplo |
|----------|--------|---------------------|---------|
| `&&` | AND (y) | **ambas** condiciones son true | `edad >= 18 && tieneEntrada` |
| `\|\|` | OR (o) | **al menos una** es true | `esVip \|\| tieneEntrada` |
| `!` | NOT (no) | invierte: `!true` es `false` | `!estaLloviendo` |

```js
const edad = 25;
const tieneEntrada = true;

if (edad >= 18 && tieneEntrada) {
  console.log("Bienvenido al recital");
} else {
  console.log("No podés pasar");
}
```

---

## Resumen de una línea
> Un **condicional** evalúa una **condición** (que da `true`/`false` usando comparadores como `===`, `>`, `>=`) y ejecuta un bloque de código u otro con `if`/`else if`/`else`. Combinás condiciones con `&&` (y), `||` (o), `!` (no).
