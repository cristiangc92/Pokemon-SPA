# Pokemon - SPA (Deployado y Responsivo)

# Proyecto (Single Page Application) Pokemon App #

#### ► Deploy Backend: https://pokemon-spa.onrender.com/
#### ► Deploy Frontend: https://pokemon-spa-sooty.vercel.app/

#### Tecnologías necesarias:
- [ ] React
- [ ] Redux
- [ ] Express
- [ ] Sequelize
- [ ] Postgres

__IMPORTANTE__: Se utilizo Bootstrap y sus correspondientes estilos, ademas de CSS puro.

## Descripción 

Esta es una aplicación en la cual se pueden ver algunos pokemons junto con información relevante de los mismas utilizando la api externa [pokeapi](https://pokeapi.co/) y a partir de ella poder, entre otras cosas:

  - Buscar pokemons
  - Filtrarlos / Ordenarlos
  - Agregar nuevos pokemons propios por medio de un formulario

### Endpoints/Flags:

  * GET https://pokeapi.co/api/v2/pokemon
    - Para obtener mayor información sobre los pokemons.
  * GET https://pokeapi.co/api/v2/pokemon/{name}
    - Para obtener mayor informacion de un pokemon especifico buscado por nombre.
  * GET https://pokeapi.co/api/v2/type
    - Para obtener el listado de los tipos de videojuegos.
  * GET https://pokeapi.co/api/v2/pokemon/{id}
    - Para obtener la información completa sobre un pokemon particular segun su ID.

#### Frontend

Aplicación de React/Redux que contenga las siguientes pantallas/rutas.

__Pagina inicial__: 
Landing page con:
- [ ] Imagen representativa al proyecto
- [ ] Botón para ingresar al home (`Ruta principal`)

__Ruta principal__: debe contiene
- [ ] Input de búsqueda para encontrar pokemons por nombre.
- [ ] Área donde se verá el listado de videojuegos. Deberá mostrar su:
  - Imagen
  - Nombre
  - Tipos (Electrico, Fuego, Agua, etc)
- [ ] Botones/Opciones para filtrar por tipo de pokemon y por pokemon existente o creado por nosotros.
- [ ] Botones/Opciones para ordenar tanto ascendentemente como descendentemente los pokemons por orden alfabético y por fuerza.
- [ ] Paginado para ir buscando y mostrando los siguientes pokemons, 12 pokemons por pagina.

__IMPORTANTE__: Dentro de la Ruta Principal se muestran los videojuegos traidos desde la API como así también los de la base de datos. 

__Ruta de detalle de videojuego__: 
- [ ] Los campos mostrados en la ruta principal para cada pokemon (imagen, nombre y tipos)
- [ ] Número de Pokemon (id)
- [ ] Estadísticas (vida, fuerza, defensa, velocidad)
- [ ] Altura y peso

__Ruta de creación de videojuegos__:
- [ ] Un formulario __controlado con JavaScript__ con los siguientes campos:
  - Nombre
  - Imagen
  - Puntos de Vida
  - Puntos de Ataque
  - Puntos de Defensa
  - Puntos de Velocidad
  - Altura
  - Peso
- [ ] Posibilidad de seleccionar/agregar varios tipos
- [ ] Botón/Opción para crear un nuevo videojuego

> El formulario de creación  esta validado con JavaScript y HTML. 

#### Base de datos

El modelo de la base de datos:

- [ ] Pokemon con las siguientes propiedades:
  - ID (Número de Pokemon) *
  - Nombre *
  - Vida
  - Fuerza
  - Velocidad
  - Altura
  - Peso
- [ ] Tipo con las siguientes propiedades:
  - ID
  - Nombre

La relación entre ambas entidades debe ser de muchos a muchos ya que un pokemon puede pertenecer a más de un tipo y, a su vez, un tipo puede incluir a muchos pokemons.

#### Backend

Servidor en Node/Express con las siguientes rutas:

- [ ] __GET /pokemons__:
  - Obtener un listado de los pokemons.
  - Debe devolver solo los datos necesarios para la ruta principal.
- [ ] __GET /pokemons/{idPokemon}__:
  - Obtener el detalle de un pokemon en particular.
  - Debe traer solo los datos pedidos en la ruta de detalle de pokemon.
- [ ] __GET /pokemons?name="..."__:
  - Obtener el pokemon que coincida exactamente con el nombre pasado como query parameter (Puede ser de pokeapi o creado por nosotros).
  - Si no existe ningún pokemon mostrar un mensaje adecuado.
- [ ] __POST /pokemons__:
  - Recibe los datos recolectados desde el formulario controlado de la ruta de creación de pokemons por body.
  - Crea un pokemon en la base de datos.
- [ ] __GET /types__:
  - Obtener todos los tipos de pokemons posibles.
  - En una primera instancia deberán traerlos desde pokeapi y guardarlos en su propia base de datos y luego ya utilizarlos desde allí.


## Descarga e instalación:

Forkear el repositorio o descargarlo para tener una copia del mismo 

__IMPORTANTE:__ Es necesario contar minimamente con la última versión estable de Node y NPM. Asegurarse de contar con ella para poder instalar correctamente las dependecias necesarias para correr el proyecto.

Actualmente las versiónes necesarias son:

 * __Node__: 12.18.3 o mayor
 * __NPM__: 6.14.16 o mayor

Para verificar que versión tienen instalada:

> node -v
>
> npm -v

## Inicio del Proyecto

El proyecto cuenta con dos carpetas: `api` y `client`. En estas carpetas estará el código del back-end y el front-end respectivamente.

En `api` crear un archivo llamado: `.env` que tenga la siguiente forma:

```
DB_USER=usuariodepostgres
DB_PASSWORD=passwordDePostgres
DB_HOST=localhost
```

Reemplazar `usuariodepostgres` y `passwordDePostgres` con tus propias credenciales para conectarte a postgres. 

Adicionalmente será necesario que creen desde psql una base de datos llamada `videogame`

El contenido de `client` fue creado usando: Vite.

Una vez abierto el proyecto es necesario iniciarlo: 

- Abrir en terminall integrado la carpeta `client`  y escribir `npm run dev`
- Abrir en terminall integrado la carpeta `api`  y escribir `npm start`

Todo listo!!!
