# 📗 Cheat Sheet — Comandos esenciales (Terminal + Git)

Hoja de referencia rápida. ⭐ = memorizar sí o sí (uso diario) · 🔸 = útil, se consulta.

---

## 🖥️ PARTE A — TERMINAL / CONSOLA

> Nota: estás en **PowerShell** (Windows). La mayoría de estos también funcionan en Mac/Linux.

### Navegar entre carpetas
| Comando | Qué hace |
|---|---|
| ⭐ `pwd` | Muestra en qué carpeta estás parado ("print working directory") |
| ⭐ `ls` | Lista archivos y carpetas del lugar actual |
| ⭐ `cd carpeta` | Entra a una carpeta |
| ⭐ `cd ..` | Sube un nivel (a la carpeta contenedora) |
| 🔸 `cd` (solo) | Vuelve a tu carpeta de usuario (home) |
| 🔸 `cls` / `clear` | Limpia la pantalla de la terminal |

### Crear / ver / borrar
| Comando | Qué hace |
|---|---|
| ⭐ `mkdir nombre` | Crea una carpeta |
| ⭐ `cat archivo` | Muestra el contenido de un archivo |
| 🔸 `echo "texto" > archivo.txt` | Crea un archivo con ese texto (sobrescribe) |
| 🔸 `echo "texto" >> archivo.txt` | AGREGA texto al final (no borra lo anterior) |
| 🔸 `New-Item archivo.txt` | Crea un archivo vacío (PowerShell) |
| 🔸 `cp origen destino` | Copia un archivo |
| 🔸 `mv origen destino` | Mueve o renombra un archivo |
| ⚠️ `rm archivo` | **Borra un archivo (¡no va a la papelera!)** |
| ⚠️ `rm -r carpeta` | Borra una carpeta y TODO su contenido (cuidado) |

### Comodines útiles
| Comando | Qué hace |
|---|---|
| 🔸 `code .` | Abre la carpeta actual en VS Code |
| 🔸 `↑` (flecha arriba) | Repite el comando anterior (no lo reescribas) |
| 🔸 `Tab` | Autocompleta nombres de archivos/carpetas |
| 🔸 `Ctrl + C` | Cancela/corta el comando que está corriendo |

---

## 🔀 PARTE B — GIT

### Configuración (una vez por computadora)
| Comando | Qué hace |
|---|---|
| `git config --global user.name "Nombre"` | Define tu nombre de autor |
| `git config --global user.email "mail"` | Define tu email de autor |

### El ciclo diario ⭐ (esto es el 90% de tu uso)
| Comando | Qué hace |
|---|---|
| ⭐ `git status` | ¿Qué cambió? Tu radar. Úsalo TODO el tiempo |
| ⭐ `git add .` | Prepara todos los cambios para el commit |
| ⭐ `git add archivo` | Prepara solo ese archivo |
| ⭐ `git commit -m "mensaje"` | Guarda una "foto" con su descripción |
| ⭐ `git push` | Sube tus commits a GitHub |
| ⭐ `git pull` | Baja cambios desde GitHub a tu compu |

### Arrancar / conectar un proyecto
| Comando | Qué hace |
|---|---|
| `git init` | Empieza a versionar un proyecto (1 vez por proyecto) |
| `git clone <url>` | Descarga un repo de GitHub a tu compu |
| `git remote add origin <url>` | Conecta tu repo local con uno de GitHub |
| `git remote -v` | Muestra a qué remotos estás conectado |
| `git push -u origin main` | Primer push: fija el destino por defecto |

### Ver historial / revisar
| Comando | Qué hace |
|---|---|
| 🔸 `git log` | Historial completo de commits |
| 🔸 `git log --oneline` | Historial resumido (1 línea por commit) |
| 🔸 `git diff` | Muestra exactamente qué líneas cambiaste |
| 🔸 `git show <hash>` | Ver el detalle de un commit específico |

### Ramas (branches) — lo verás más adelante, anotalo igual
| Comando | Qué hace |
|---|---|
| 🔸 `git branch` | Lista tus ramas y marca en cuál estás |
| 🔸 `git branch nombre` | Crea una rama nueva |
| 🔸 `git checkout nombre` / `git switch nombre` | Te cambia a esa rama |
| 🔸 `git merge nombre` | Fusiona los cambios de otra rama en la actual |

### Salvavidas (cuando algo sale mal)
| Comando | Qué hace |
|---|---|
| 🆘 `git restore archivo` | Descarta los cambios NO commiteados de un archivo |
| 🆘 `git restore --staged archivo` | "Des-prepara" un archivo (deshace el `git add`) |
| 🆘 `git log --oneline` | Encontrar el hash para volver a una versión previa |

---

## 🧠 Los que SÍ O SÍ debés tener en la mano
```
Terminal:  pwd · ls · cd · cd .. · mkdir · cat
Git:       git status · git add . · git commit -m "..." · git push · git pull
```
Con estos 11 ya te movés el 90% del tiempo. El resto se consulta.
