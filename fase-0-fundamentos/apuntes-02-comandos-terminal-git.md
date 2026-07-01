# 📘 Apuntes 02 — Comandos de terminal y Git (Fase 0)

Referencia de los comandos que usamos en el Ejercicio 0.1. Volvé cuando dudes.

---

## Parte A — Comandos de la TERMINAL (navegar y crear cosas)

Estos comandos le hablan al **sistema operativo** (moverte por carpetas, crear archivos). No tienen nada que ver con Git todavía.

| Comando | Significa | Qué hace | Ejemplo |
|---------|-----------|----------|---------|
| `cd` | **c**hange **d**irectory | Te movés a otra carpeta | `cd "C:/Users/.../Programar"` |
| `cd ..` | subir | Vas a la carpeta que la contiene (un nivel arriba) | `cd ..` |
| `ls` | **l**i**s**t | Lista lo que hay en la carpeta actual | `ls` |
| `mkdir` | **m**a**k**e **dir**ectory | Crea una carpeta nueva | `mkdir mi-practica` |
| `echo` | "eco" | Imprime un texto en pantalla | `echo "hola"` |
| `>` | redirección | En vez de imprimir, **manda el texto a un archivo** (lo crea/sobrescribe) | `echo "hola" > nota.txt` |
| `cat` | con**cat**enate | Muestra el contenido de un archivo | `cat nota.txt` |

> 💡 **Mapa mental:** la terminal siempre está "parada" en una carpeta (tu ubicación actual). `cd` te mueve, `ls` te muestra qué hay, `mkdir` crea carpetas, `echo ... >` crea archivos con texto.

**Nota sobre `>`:** en PowerShell (Windows), `echo "texto" > archivo.txt` guarda el archivo en una codificación (UTF-16) que a veces se ve rara o Git la marca como "binario". Es cosmético. Más adelante usaremos VS Code para crear/editar archivos y no pasa.

---

## Parte B — Comandos de GIT (guardar versiones)

Estos le hablan a **Git**. Recordá: Git guarda "fotos" (commits) de tu código en el tiempo.

| Comando | Qué hace | Cuándo se usa |
|---------|----------|---------------|
| `git config --global user.name "..."` | Define tu nombre de autor | **Una sola vez** por computadora |
| `git config --global user.email "..."` | Define tu email de autor | **Una sola vez** por computadora |
| `git init` | Empieza a "vigilar" un proyecto con Git | **Una vez** por proyecto |
| `git status` | Muestra qué cambió / qué está listo para la foto | **Todo el tiempo** (es tu radar) |
| `git add .` | "Prepará TODOS los cambios para la foto" (staging) | Antes de cada commit |
| `git add archivo.txt` | Prepara solo ese archivo | Cuando querés commits selectivos |
| `git commit -m "mensaje"` | **Saca la foto** con un mensaje que la describe | Cuando terminaste algo que querés guardar |
| `git log` | Muestra el historial de todas las fotos | Para revisar qué hiciste y cuándo |

**El flag `-m`** en `commit` = **m**essage. El texto entre comillas describe qué cambió en esa foto. Buenos mensajes = buena historia del proyecto.

---

## El ciclo de trabajo de Git (memorizá este flujo)

```
   Editás archivos
        │
        ▼
   git status     ← "¿qué cambió?"  (opcional pero recomendado)
        │
        ▼
   git add .      ← "prepará los cambios"     (STAGING)
        │
        ▼
   git commit -m "..."   ← "sacá la foto"     (COMMIT)
        │
        ▼
   git log        ← "mostrame el historial"
```

Las 3 zonas de Git:
1. **Working directory** = tus archivos como están ahora (donde editás).
2. **Staging area** = la "sala de espera" de lo que va a entrar en la próxima foto (lo que pusiste con `git add`).
3. **Repositorio** = el álbum de fotos ya sacadas (los commits).

---

## Lo que todavía NOS FALTA de Git (próximo paso)
- **GitHub**: subir este repositorio a la nube con `git remote add` + `git push`. Ahí tu código se vuelve tu **portafolio público** para conseguir trabajo.
- **`.gitignore`**: un archivo para decirle a Git "estos archivos NO los guardes" (config interna, secretos, etc.).
