# Anotaciones de la construccion del frontend 

## Etapas
### 1. Dashboard
La Finalidad del Dashboard del Portafolio es que se pueda hacer CRUD desde el front al backend para poder manipular y editar el portafilo de manera rapida, de manera que a la hora de hacer cambios al portafolio no haya que hacerlo manual desde la base de datos.

#### SKILLS y PROFILE
En el dashboard ya llevo hecho el profile y el skills manager, dichos se uso como en todo el front reac con javascript, pero en estos dos use tanto estado heredado de padre a hijos como estado local global con zustand, el manejo del estado de servidor lo maneje con zustand y logica de programacion para mantener actualizada el estado cacheado de cada cosa sin tener que estar haciendo request a cada accion de CRUD, con react hook forms tambien use links para entrelazar cada pagina desde sidebar y esta mantiene el estado cacheado, lo actualiza pero sin hacer request al servidor a cada rato.
PD: React Flowbite y algunas veces flowbite puro (tailwind flowbite) se han usado como pre maquetas de tablas y de cards.

#### PROJECTS
Ahora vamos con projects, el cual alberga el administrador CRUD de los proyectos del portafolio, a partir de aqui el manejo del estado del servidor sera manejado con react query, mientras que el local seguira siendo manejado con zustand. Seguire usando tailwid, para tablas y cards estoy evaluando otras opciones ademas de flowbite (por ejemplo mui components).

