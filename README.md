Pokedux - Pokémon Redux App

Pokedux es una aplicación web que consume la PokéAPI y permite visualizar una lista de Pokémon. Utiliza React, Redux y Ant Design para la interfaz de usuario.

🚀 Tecnologías utilizadas

React: Biblioteca para construir la interfaz de usuario.

Redux: Manejo global del estado.

Ant Design: Estilizado y componentes UI.

Axios: Llamadas HTTP a la PokéAPI.

📦 Instalación y configuración

Clona el repositorio:
```
git clone https://github.com/tuusuario/pokedux.git
cd pokedux
```

Instala las dependencias:
```
npm install
```

Inicia la aplicación en modo desarrollo:
```
npm start
```

La app estará disponible en http://localhost:3000.

📂 Estructura del proyecto
```
Pokedux/
│── src/
│   ├── api/
│   │   ├── getApi.js         # Funciones para llamadas a la PokéAPI
│   ├── components/
│   │   ├── PokemonCard.js   # Tarjeta individual de cada Pokémon
│   │   ├── PokemonList.js   # Lista de Pokémon
│   │   ├── Searcher.js      # Buscador de Pokémon
│   ├── actions/
│   │   ├── actions.js       # Acciones de Redux
│   ├── reducers/
│   │   ├── rootReducer.js   # Reductor principal de Redux
│   ├── styles/
│   │   ├── App.css         # Estilos principales
│   ├── App.js              # Componente principal
│   ├── index.js            # Punto de entrada de la app
│── public/
│── package.json
│── README.md
```
🔥 Características principales

🌍 Obtiene y muestra una lista de los primeros 151 Pokémon.

🔍 Buscador interactivo de Pokémon.

💾 Manejo de estado global con Redux.

🎨 Interfaz moderna con Ant Design.

🛠 Posibles mejoras

Añadir paginación.

Mostrar más detalles de cada Pokémon.

Implementar una vista de favoritos.

👨‍💻 Autor

Desarrollado por Tu Nombre.

