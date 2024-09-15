<h1 align="center"> SmartStock: Curamos el caos del inventario con código inteligente </h1>

<p align="center">
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSabLpRMgX2bOAkv2vXS4M0eJBL7nVmGyQ_eSxsN0jPBdrxBMuSHsPCH345r9KMFi8jUO8&usqp=CAU"/>
</p>

<h2 align="center"> Aplicación sobre Inventario Medico </h2>

La medicina es nuestra pasión, la programación nuestra herramienta.

<h3 align="center"> Los llamados de información que se pueden hacer a través de la aplicación son los siguientes: </h3>

GET | 127.0.0.1/status --> Devuelve el estado del servidor.

GET | 127.0.0.1/auth --> Obtener info general útil de la APP.
GET | 127.0.0.1/users --> Obtener info general útil de la APP.
GET | 127.0.0.1/supplies --> Obtener info general útil de la APP.

GET | 127.0.0.1/users --> Obtener todos los usuarios registrados.
- Sin token: Obtener solamente el nombre y el rol de los usuarios

GET | 127.0.0.1/charts --> Obtener todas las cartas natales.

GET | 127.0.0.1/charts/:name --> Obtener una carta natal por nombre.

POST | 127.0.0.1/users --> Dar de alta nuevo usuario.

POST | 127.0.0.1/charts --> Crear nueva carta natal.

PATCH | 127.0.0.1/users/:id --> Actualizar un usuario.

PATCH | 127.0.0.1/charts/:id --> Actualizar una carta natal.

DELETE | 127.0.0.1/users/:id --> Eliminar un usuario.

DELETE | 127.0.0.1/charts/:id --> Eliminar una carta natal.