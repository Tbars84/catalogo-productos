# CatalogoProductos

This project was generated with [Angular CLI] version 7.2.2.

## Url de github pages
https://tbars84.github.io/catalogo-productos/  
+++++++++  
se debe habilitar en local el sevidor Json Server para comunicarse con
+++++++++  
http://localhost:3000/  

## Development server
Run `ng serve` to start Angular project  

Run `npm run server` to start Json Server backEnd service of the application CatalogoProductos  

## Estructura del proyecto:
Toda la app se realizo en una carpeta con nombre catalogo-productos para garantizar su independencia del app.module del framework de angular, la estructura de archivos tiene el siguiente orden(para garantizr su escalabilidad):  
+commons  
modulos de transversales a la aplicación
+components  
compontentes hijos, para potencializar su uso en diferentes casos, siempre deben estar ligados a componentes padres para recibir data y se comunican por Input y Output  
+containers  
compontentes padres que reciben la data, asi se potencializa un uso centralizado de los 
servicios  
+models  
interfaces que nos permiten generar un tipado fuerte de las propiedades en la aplicacion  
+services  
comunicacion con servicios de backend, en este caso el back se realizo con jsonServer y se encuentra alojado en la carpeta server  