# 📗 Referencia — Los símbolos de JavaScript: () [] {} "" ``

Cada símbolo tiene un trabajo distinto. Confundirlos = la mayoría de los errores al empezar.

---

## `( )` — PARÉNTESIS · "agrupar / contener"

Tiene 3 usos principales:

1. **Condiciones** de `if`, `for`, `while` (lo que hay que evaluar):
   ```js
   if (edad >= 18) { ... }
   for (let i = 0; i < 10; i++) { ... }
   ```
2. **Argumentos de una función** (lo que le pasás para que trabaje):
   ```js
   console.log("hola");   // "hola" es el argumento
   ```
3. **Agrupar operaciones matemáticas** (controlar el orden):
   ```js
   (i + 1)      // primero suma, como en matemática
   ```

---

## `[ ]` — CORCHETES · "listas y posiciones"

Dos usos, siempre relacionados con arrays:

1. **Crear un array** (una lista):
   ```js
   const frutas = ["manzana", "banana"];
   ```
2. **Acceder a una posición** por su índice:
   ```js
   frutas[0];   // el primer elemento
   ```

---

## `{ }` — LLAVES · "bloques y objetos"

1. **Delimitar un bloque de código** (el "cuerpo" de un if, for, while, función):
   ```js
   if (edad >= 18) {
     console.log("mayor");   // esto vive DENTRO de las llaves
   }
   ```
2. **Crear un objeto** (lo vas a ver pronto — datos con nombre):
   ```js
   const persona = { nombre: "Maxi", edad: 28 };
   ```
3. **Dentro de un template literal**, combinadas con `$`: `${ }` inserta una variable:
   ```js
   `Hola ${nombre}`
   ```

---

## `" "` o `' '` — COMILLAS · "texto simple (string)"

Crean un **string** (texto). Las dobles `"` y las simples `'` son **iguales** — elegí una y sé consistente.
```js
const nombre = "Maxi";
const saludo = 'Buen día';
```
⚠️ Dentro de estas, `${}` **NO funciona** — se imprime literal.

---

## `` ` ` `` — BACKTICKS · "texto con superpoderes (template literal)"

Es la tecla arriba del `Tab` (en teclado español: backtick + barra espaciadora). Crean un string especial que permite:

1. **Insertar variables** con `${}`:
   ```js
   `Hola ${nombre}, tenés ${edad} años`
   ```
2. **Escribir en varias líneas** sin romperse.

> 🔑 Regla: si el texto lleva variables, usá **backticks**. Si es texto fijo, alcanza con `" "`.

---

## 🧠 Tabla resumen

| Símbolo | Nombre | Para qué |
|---------|--------|----------|
| `( )` | Paréntesis | Condiciones, argumentos de función, agrupar matemática |
| `[ ]` | Corchetes | Crear arrays y acceder por índice |
| `{ }` | Llaves | Bloques de código, objetos, y `${}` en templates |
| `" "` `' '` | Comillas | Texto simple (string) — sin `${}` |
| `` ` ` `` | Backticks | Texto con `${variables}` y multilínea |

---

## Ejemplo con TODOS juntos (para verlos en contexto)
```js
const frutas = ["manzana", "banana"];        // [ ] crea el array

for (let i = 0; i < frutas.length; i++) {    // ( ) condición · { } abre bloque
  console.log(`${i + 1} - ${frutas[i]}`);    // ` ` template · ${ } inserta · [ ] índice · ( ) argumento
}                                            // } cierra bloque
```
