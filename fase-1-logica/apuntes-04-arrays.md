# 📘 Fase 1 · Apuntes 04 — Arrays (listas de datos)

Guardar **muchos valores** en una sola variable, en orden.

---

## 1. ¿Qué es un array?

Una **lista ordenada** de valores dentro de una sola variable. Se escribe con corchetes `[ ]` y los elementos separados por comas:

```js
const frutas = ["manzana", "banana", "naranja"];
const numeros = [10, 20, 30, 40];
```

Reemplaza tener que hacer `fruta1`, `fruta2`, `fruta3`... en variables sueltas.

---

## 2. Índices: la posición de cada elemento (¡empiezan en 0!)

Cada elemento tiene una **posición (índice)**. ⚠️ **La numeración arranca en 0, no en 1.**

```js
const frutas = ["manzana", "banana", "naranja"];
//                  0          1          2       ← índices

console.log(frutas[0]);  // "manzana"  (el PRIMERO es el 0)
console.log(frutas[1]);  // "banana"
console.log(frutas[2]);  // "naranja"  (el ÚLTIMO)
console.log(frutas[3]);  // undefined  (no existe esa posición)
```

> 🔑 **La regla que confunde a todos:** el primer elemento es `[0]`, el segundo `[1]`... El último siempre está en la posición `length - 1`.

---

## 3. `.length` — cuántos elementos tiene

```js
const frutas = ["manzana", "banana", "naranja"];
console.log(frutas.length);   // 3
```

Como los índices arrancan en 0, el **último elemento** está en `frutas[frutas.length - 1]`.

---

## 4. Modificar un array

```js
const frutas = ["manzana", "banana"];

frutas.push("naranja");    // AGREGA al final  → ["manzana", "banana", "naranja"]
frutas.pop();              // QUITA el último  → ["manzana", "banana"]
frutas[0] = "pera";        // CAMBIA por índice → ["pera", "banana"]

console.log(frutas);
```

| Método | Qué hace |
|--------|----------|
| `.push(x)` | Agrega `x` al final |
| `.pop()` | Quita el último |
| `.unshift(x)` | Agrega `x` al principio |
| `.shift()` | Quita el primero |

> 💡 Nota: se puede usar `.push()` aunque el array sea `const`. `const` impide reasignar la variable entera, pero sí permite modificar el contenido del array.

---

## 5. Recorrer un array con un bucle (¡acá se juntan array + for!)

```js
const frutas = ["manzana", "banana", "naranja"];

for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}
// imprime: manzana, banana, naranja
```
Fijate: `i` arranca en **0** (primer índice) y la condición es `i < frutas.length` (no `<=`, porque el último índice es length-1).

### Forma más simple: `for...of`
Cuando solo querés cada elemento (sin importar el índice):
```js
for (const fruta of frutas) {
  console.log(fruta);
}
```
Más limpio y sin riesgo de equivocarte con los índices.

---

## Resumen de una línea
> Un **array** `[ ]` es una lista ordenada de valores; accedés a cada uno por su **índice empezando en 0** (`arr[0]`), sabés cuántos hay con `.length`, lo modificás con `.push()`/`.pop()`, y lo recorrés con un `for` o un `for...of`.
