# 📘 Fase 1 · Apuntes 03 — Bucles (loops)

Hacer que el código **repita** una tarea sin escribirla mil veces.

---

## ¿Para qué sirven?

Si querés mostrar los números del 1 al 100, no vas a escribir 100 `console.log`. Un **bucle** repite un bloque de código las veces que necesites.

---

## 1. El bucle `for` (el más usado)

```js
for (let i = 1; i <= 5; i++) {
  console.log(i);   // imprime 1, 2, 3, 4, 5
}
```

Tiene **3 partes** entre los paréntesis, separadas por `;`:

| Parte | Código | Qué hace |
|-------|--------|----------|
| 1. Inicialización | `let i = 1` | Crea el contador y lo arranca en 1. Se ejecuta **una sola vez** al principio. |
| 2. Condición | `i <= 5` | Mientras sea `true`, el bucle sigue. Se chequea **antes de cada vuelta**. |
| 3. Incremento | `i++` | Suma 1 al contador **al final de cada vuelta**. |

- `i++` es un atajo para `i = i + 1` (sumar 1).
- `i` es solo un nombre de contador (por convención se usa `i`, de "index").

**Cómo lo lee JavaScript:**
```
i=1 → ¿1<=5? sí → imprime 1 → i pasa a 2
i=2 → ¿2<=5? sí → imprime 2 → i pasa a 3
...
i=6 → ¿6<=5? NO → corta el bucle
```

---

## 2. El bucle `while` ("mientras")

Repite **mientras** una condición sea verdadera:

```js
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;          // ⚠️ NO te olvides de esto
}
```

⚠️ **Peligro: bucle infinito.** Si te olvidás de `i++`, la condición nunca se vuelve falsa y el programa se cuelga para siempre. Si eso pasa, cortalo con **`Ctrl + C`** en la terminal.

> **`for` vs `while`:** usá `for` cuando sabés cuántas veces repetir (contar del 1 al 10). Usá `while` cuando repetís hasta que pase algo (mientras el usuario no escriba "salir").

---

## 3. El operador módulo `%` (resto de una división)

Devuelve **lo que sobra** de una división. Súper útil con bucles:

```js
10 % 2   // 0  (10 dividido 2 es exacto, no sobra nada)
10 % 3   // 1  (10 = 3*3 + 1, sobra 1)
7 % 2    // 1  (sobra 1 → es impar)
```

**Truco clásico:** si `numero % 2 === 0`, el número es **par**. Si no, es **impar**.

---

## Resumen de una línea
> Un **bucle** repite un bloque de código: `for` cuando sabés cuántas veces (contador + condición + incremento), `while` mientras se cumpla una condición. `i++` suma 1; `%` da el resto (ideal para detectar pares).
