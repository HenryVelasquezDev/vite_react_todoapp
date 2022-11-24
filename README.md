# React Vite

Este proyecto fue generado con vite [Vite](https://vitejs.dev/).

1. Se crea el proyecto con vite:
        
         npm create vite


2. Se ingresa a la carpeta del proyecto generado y se ejecuta la sentencia de instalaciond de modulos

        cd <ruta_proyecto>
        npm install

3. Se inicia su ejecución

        npm run dev

4. Para el uso de iconos de FontAwesome realizamos la instalación correspondiente

        npm i --save @fortawesome/free-solid-svg-icons
        npm i --save @fortawesome/fontawesome-svg-core
        npm i --save @fortawesome/react-fontawesome@latest

5. Para hacer uso de react modal realizamos la instalación correspondiente

        npm install --save react-modal

6. Para hacer uso de randomColor realizamos la instalación correspondiente

        npm i randomcolor


## Descripción Proyecto

    El proyecto se genera a manera de realizar practicas basicas de React con Vite.

    Se realiza proyecto para listar tareas, editarlas, eliminarlas y marcar como realizado.

    Las tareas se guardan en el localStorage cada vez que se registra una nueva o se cambia algun valor de una tarea existente, las tareas marcadas como ejecutadas se les cambia el estado y se marcan en la interfaz, al recargar la pagina solo se cargaran aquellas tareas pendientes por realizar