# Laboratorio 4 – Sistemas y Tecnologías Web  
Samuel Robledo  (241282)
Sistemas y Tecnologías Web  
Universidad del Valle de Guatemala
## Modo Disciplina

### Descripción del proyecto

Modo Disciplina es una aplicación web desarrollada utilizando únicamente **HTML, CSS y JavaScript puro**, cuyo objetivo es implementar un sistema de gamificación aplicado a la creación de hábitos diarios.

La aplicación permite al usuario crear misiones (hábitos), completarlas y ganar puntos de experiencia (XP), lo que le permite subir de rango conforme progresa.

Este proyecto fue desarrollado sin el uso de frameworks o librerías externas, cumpliendo con los requisitos del laboratorio.

---

## Funcionalidades implementadas

- Creación de misiones con los siguientes campos:
  - Nombre
  - Descripción
  - Dificultad (Fácil, Normal, Difícil)

- Sistema de asignación de XP:
  - Fácil → 10 XP  
  - Normal → 25 XP  
  - Difícil → 50 XP  

- XP global acumulativo.

- Sistema de rangos dinámicos:
  - 0 – 49 XP → Aprendiz  
  - 50 – 149 XP → Constante  
  - 150+ XP → Imparable  

- Cambio de estado de misión a **SUCCESSFUL** al completarla.

- Actualización visual de misiones completadas.

- Validación de estructura mediante `console.log()` por cada misión creada.

- Despliegue en servidor local utilizando **NGINX**.

---

## Estructura del proyecto


<img width="769" height="260" alt="image" src="https://github.com/user-attachments/assets/446b4624-d99a-4922-8e26-510f8810c262" />


## Instalación y ejecución

### Ejecutar localmente (modo simple)

1. Clonar el repositorio:

git clone https://github.com/samuelrobledo52/Lab4-Java.git


2. Navegar a la carpeta:

cd Lab4-Java/modo-disciplina


3. Abrir el archivo `index.html` en el navegador.

---

### Ejecutar con NGINX (despliegue local)

1. Instalar NGINX:

   <img width="883" height="459" alt="image" src="https://github.com/user-attachments/assets/7c2a175c-afe1-4de3-a3a3-219b17449c3e" />


sudo apt install nginx


2. Copiar la aplicación al servidor:

sudo cp -r modo-disciplina /var/www/html/


3. Acceder desde el navegador:

http://localhost/modo-disciplina


---

## Tecnologías utilizadas

- HTML5  
- CSS3  
- JavaScript  
- NGINX 

---


Link Del video:


