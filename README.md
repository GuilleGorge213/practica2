# practica2
Practica 2:
Ruta 1: /productos
Esta ruta debe devolver la lista de todos los productos. Además, puede aceptar parámetros para filtrar los productos por precio.
Descripción: Devuelve todos los productos. Permite filtrar por un rango de precios usando SearchParams.
Query Params opcionales:
minPrecio (devuelve productos cuyo precio sea mayor o igual al valor proporcionado).
maxPrecio (devuelve productos cuyo precio sea menor o igual al valor proporcionado).


Ejemplo de uso:
/productos → Devuelve todos los productos.
/productos?minPrecio=20 → Devuelve todos los productos con precio mayor o igual a 20.
/productos?maxPrecio=50 → Devuelve todos los productos con precio menor o igual a 50.
/productos?minPrecio=20&maxPrecio=50 → Devuelve todos los productos cuyo precio esté entre 20 y 50.
Ruta 2: /producto/:id
Esta ruta permite obtener la información de un producto específico usando el id del producto como parámetro en la URL.
Descripción: Devuelve los detalles de un producto a partir de su id.
Parámetro URL: id (el identificador del producto).
Ejemplo de uso:
/producto/1 → Devuelve la información del producto con id 1.
/producto/3 → Devuelve la información del producto con id 3.


Notas adicionales:
Si no existe un producto con el id especificado, devolver un mensaje de error: "Producto no encontrado".
Ruta 3: /calcular-promedio
Esta ruta debe calcular el precio promedio de todos los productos. También puede aceptar un parámetro opcional para calcular el promedio solo de productos dentro de un rango de precios.
Descripción: Calcula el precio promedio de los productos. Permite calcular el promedio solo para productos dentro de un rango de precios usando los Query Params minPrecio y maxPrecio.
Query Params opcionales:
minPrecio (filtra productos con precio mayor o igual al valor proporcionado).
maxPrecio (filtra productos con precio menor o igual al valor proporcionado).


Ejemplo de uso:
/calcular-promedio → Calcula el precio promedio de todos los productos.
/calcular-promedio?minPrecio=20 → Calcula el precio promedio de los productos cuyo precio es mayor o igual a 20.
/calcular-promedio?maxPrecio=50 → Calcula el precio promedio de los productos cuyo precio es menor o igual a 50.
/calcular-promedio?minPrecio=20&maxPrecio=50 → Calcula el promedio de productos con precios entre 20 y 50.
Datos de producto
const productos = [

{ id: 1, nombre: 'Producto A', precio: 30 },

{ id: 2, nombre: 'Producto B', precio: 20 },

 { id: 3, nombre: 'Producto C', precio: 50 },

 { id: 4, nombre: 'Producto D', precio: 10 }

];





IMPORTANTE
NO se puede usar material de internet que resuelva directamente el ejercicio

NO se puede usar ningún asistente de código inteligente, estilo chat-gtp o copilot

Se deberá entregar mediante un repositorio de github y una release
