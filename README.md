# cAPIrina

El principal objetivo es facilitar de una API con funcionalidades básicas **GET**, **POST**, **PUT**, **DELETE** en al menos uno de los endpoints para que puedan poner a prueba las peticiones **AJAX**.

Otro de los objetivos es familiarizar al alumnado con un proyecto que pueda sufrir modificaciones a lo largo del tiempo, que este alojado en un repositorio remoto y que para lanzarlo tengan que utilizar un contenedor Docker.

## Despliegue

- Lo primero que hay que tener en cuenta es tener instalado **docker** y **git**.
- El primer paso es clonar este proyecto en tu local:

```bash
git clone https://github.com/ipererol/cAPIrina.git
```

> En caso de que se quisieran realizar modificaciones sobre el repositorio se recomendaria que no se hiciera a traves de la url si no a traves de ssh.

- Una vez clonado es necesario construir y lanzar el contenedor, para ello lanza en la carpeta del proyecto:

```bash
docker build -t capirina .
docker run -d -p 3000:3000 --name capirina capirina
```

- Ya tienes el servidor con una API REST lanzado en tu **localhost** y reaccionando a las peticiones que realizadas al puerto **3000**.

## Documentación de la API

Existe una documentación desarrollada con **swagger** y siguiente el estándar de **openAPI**. Puedes acceder a ella cargando en tu navegador la dirección **http://localhost:3000/api/doc**.

En caso de estar lanzando el contenedor en otra máquina sustituye localhost con la dirección IP del dispositivo donde se este ejecutando el contenedor.
