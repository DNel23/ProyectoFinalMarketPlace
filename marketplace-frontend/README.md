tecnologias y librerias
react router dom: implementacion de navegacion spa con 7 rutas dinamicas. se incluye redireccion programatica para proteger rutas privadas (perfil y publicar).

context api: uso de un estado global centralizado mediante userprovider para gestionar la sesion del usuario y la persistencia de productos, eliminando el prop drilling.

react-bootstrap: diseno responsivo basado en los mockups del hito 1, utilizando componentes modulares.

hooks (use-state, use-effect, use-context, use-navigate, use-params): desarrollo de logica reactiva para validacion de formularios y captura de parametros en urls dinamicas.

estructura del proyecto
/src/context: contiene el userprovider (cerebro de la aplicacion).

/src/views: vistas principales (home, marketplace, registro, login, perfil, detalle, formulario).

/src/components: componentes reutilizables como el navbar y las cards de productos.

puntos clave evaluados
navegacion: uso de browserrouter, routes y route.

seguridad: redireccion automatica al /login si un usuario no autenticado intenta acceder a rutas privadas.

validacion: logica de formularios en registro y login para asegurar la integridad de los datos (largo de contrasena y formato de email).

dinamicidad: renderizacion de productos basada en el estado global y visualizacion de detalles mediante useparams.

como ejecutar el proyecto
clonar el repositorio.

instalar las dependencias:
npm install

iniciar el entorno de desarrollo:
npm run dev