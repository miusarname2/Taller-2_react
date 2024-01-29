## Tabla de Contenidos:

1. [Introducción](#1-introducción)
2. [Estructura del Proyecto](#2-estructura-del-proyecto)
3. [Requisitos](#3-requisitos)
4. [Instalación](#4-instalación)
5. [Uso](#5-uso)


## 1. Introducción:

Este proyecto consiste en una aplicación web desarrollada utilizando JavaScript y React, con el objetivo de implementar diez puntos específicos de un programa en forma de componentes React. Cada uno de estos componentes corresponde a un punto del programa y se puede acceder a ellos a través de rutas específicas en la aplicación. A continuación, se detallan los puntos del programa que se han implementado:

1. Construir el algoritmo para un programa que ingrese tres notas de un alumno y muestre un mensaje "Estudie" si el promedio es menor o igual a 3.9, de lo contrario, muestra "becado".

2. Determinar si un número es par o impar y si es mayor de 10.

3. Calcular el voltaje de un circuito a partir de la resistencia y la intensidad de corriente.

4. Solicitar el nombre y edad de 3 personas y determinar el nombre de la persona con mayor edad.

5. Leer dos números por teclado y realizar diferentes operaciones según su relación.

6. Encontrar al estudiante con la mayor y menor nota, así como contar la cantidad de estudiantes de género masculino y femenino.

7. Calcular el costo total de una compra en una tienda a partir del nombre, precio y cantidad de un artículo.

8. Calcular el perímetro de un cuadrado y el área de un rectángulo a partir de sus dimensiones.

9. Registrar y analizar el desempeño de atletas en salto triple en los juegos olímpicos femeninos de 2022, incluyendo la medalla de oro y la posibilidad de romper récords.

10. Crear un programa cíclico que capture datos numéricos hasta que el usuario ingrese un cero y muestre la sumatoria, el promedio, la cantidad de valores ingresados, el mayor y el menor valor.

Este README proporcionará una guía sobre cómo estructurar, instalar y utilizar este proyecto.

## 2. Estructura del Proyecto:

El proyecto tiene una estructura de carpetas y archivos organizada de la siguiente manera:

```
|-- src/
|   |-- components/
|   |   |-- Home.js
|   |   |-- Point1.js
|   |   |-- Point2.js
|   |   |-- Point3.js
|   |   |-- Point4.js
|   |   |-- Point5.js
|   |   |-- Point6.js
|   |   |-- Point7.js
|   |   |-- Point8.js
|   |   |-- Point9.js
|   |   |-- Point10.js
|   |-- App.js
|   |-- index.js
|-- public/
|   |-- index.html
|-- package.json
|-- README.md
|-- vite.config.js
```

Cada punto del programa se ha implementado como un componente React dentro de la carpeta `components`. El archivo `App.js` maneja las rutas de la aplicación y permite la navegación entre los puntos del programa.

## 3. Requisitos:

Antes de ejecutar el proyecto, asegúrate de tener los siguientes requisitos:

- Node.js instalado en tu sistema. Puedes descargarlo desde [https://nodejs.org/](https://nodejs.org/).

## 4. Instalación:

Sigue estos pasos para instalar y ejecutar el proyecto:

1. Clona el repositorio en tu máquina local:

   ```
   git clone https://github.com/tuusuario/tuproyecto.git
   ```

2. Navega al directorio del proyecto:

   ```
   cd tuproyecto
   ```

3. Instala las dependencias del proyecto:

   ```
   npm install
   ```

## 5. Uso:

Para utilizar la aplicación y ver los resultados de cada punto del programa, sigue estos pasos:

1. Abre una terminal en la carpeta del proyecto.

2. Ejecuta el siguiente comando para iniciar la aplicación:

   ```
   npm run dev
   ```

3. Abre tu navegador web y accede a [http://localhost:3000](http://localhost:3000). Verás la página de inicio con enlaces a cada punto del programa.

4. Haz clic en los enlaces correspondientes para ver el resultado de cada punto.

