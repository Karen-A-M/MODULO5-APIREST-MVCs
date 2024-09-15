<h1 align="center"> SmartStock: Curamos el caos del inventario con código inteligente </h1>

<p align="center">
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSabLpRMgX2bOAkv2vXS4M0eJBL7nVmGyQ_eSxsN0jPBdrxBMuSHsPCH345r9KMFi8jUO8&usqp=CAU"/>
</p>

<h2 align="center"> Aplicación sobre Inventario Medico </h2>

La medicina es nuestra pasión, la programación nuestra herramienta.

<h3 align="center"> Los llamados de información que se pueden hacer a través de la aplicación son los siguientes: </h3>

GET | 127.0.0.1/status --> Devuelve el estado del servidor.

GET | 127.0.0.1/users --> Obtener todos los usuarios registrados.
- Sin token: Obtener solamente el nombre y el rol de los usuarios
- Con token: Obtener toda la informacion de los usuarios (id, nombre, rol y email)

GET | 127.0.0.1/supplies --> Obtener todos los suministros registrados.
- Sin token: Obtener solamente el nombre y la descripcion de los suministros
- Con token: Obtener toda la informacion de los suministros (id, nombre, descripcion, stock y fecha de actualizacion)

**Nota: para las demas acciones, se necesita un token para realizar las acciones correspondientes**

GET | 127.0.0.1/supplies/:id --> Obtener un suminstro por id.

POST | 127.0.0.1/auth/register --> Registrar un nuevo usuario.
- Se necesita la siguiente informacion: name, rol, email y password

POST | 127.0.0.1/auth/login --> Iniciar sesion.
- Se necesita la siguiente informacion: email y password

POST | 127.0.0.1/auth/logout --> Cerrar sesion.

POST | 127.0.0.1/supplies/ --> Crear un nuevo suministro.
- Se necesita la siguiente informacion: name, description, stock y update

PATCH | 127.0.0.1/supplies/:id --> Actualizar un suministro.
- Se necesita la siguiente informacion: stock y update

DELETE | 127.0.0.1/users/:id --> Eliminar un usuario.

DELETE | 127.0.0.1/supplies/:id --> Eliminar un suministro.
