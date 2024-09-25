# QueBuenaPINTA - Ecommerce de Bebidas 🍻🍷🍎

## Demo

Puedes ver el proyecto desplegado en Netlify: [QueBuenaPINTA en Netlify]

## Descripción
QueBuenaPINTA es una tienda online especializada en la venta de bebidas como cervezas, vinos y sidras. Este proyecto está desarrollado con React, Firebase y Vite para una experiencia de usuario rápida y eficiente. El objetivo principal es ofrecer una interfaz intuitiva y sencilla para la compra de productos con la posibilidad de gestionar el carrito y finalizar la compra.

## Tabla de Contenidos
- Demo
- Descripción
- Características
- Instalación
- Uso
- Scripts Disponibles
- Tecnologías Utilizadas
- Contribuciones
- Licencia

## Características
- **Catálogo de productos:** Visualización de bebidas con detalles específicos.
- **Categorías:** Filtro por categoría de productos (cervezas, vinos, sidras).
- **Carrito de compras:** Agregar, eliminar y modificar cantidades de productos en el carrito.
- **Finalizar compra:** Sección de checkout con validación de datos de usuario.
- **Firebase Backend:** Los productos y órdenes de compra se almacenan en una base de datos en la nube usando Firebase.

## Instalación
Sigue estos pasos para instalar y correr el proyecto en tu entorno local:

1. Clona el repositorio:
```
git clone https://github.com/Lenta-Maximiliano/ProyectoFinalLenta.git
```
2. Ingresa al directorio del proyecto:
```
cd ProyectoFinalLenta
```
3. Instala las dependecias:
```
npm install
```
4. Crea un archivo .env en el directorio raíz y agrega tus credenciales de Firebase:
```
VITE_REACT_APP_FIREBASE_API_KEY=tu_api_key
VITE_REACT_APP_FIREBASE_AUTH_DOMAIN=tu_auth_domain
VITE_REACT_APP_FIREBASE_PROJECT_ID=tu_project_id
VITE_REACT_APP_FIREBASE_STORAGE_BUCKET=tu_storage_bucket
VITE_REACT_APP_FIREBASE_MESSAGING_SENDER_ID=tu_messaging_sender_id
VITE_REACT_APP_FIREBASE_APP_ID=tu_app_id
```
5. Inicia el servidor de desarrollo:
```
npm run dev
```
## Uso
1. Accede a la aplicación en tu navegador en [http://localhost:5173](http://localhost:5173).  
2. Navega por el catálogo de productos y selecciona bebidas de interés.
3. Añade productos al carrito, modifica cantidades y finaliza la compra en el checkout.

## Scripts Disponibles
En el proyecto, puedes ejecutar los siguientes comandos:
```
npm run dev
```
Inicia el servidor de desarrollo:
```
npm run build
```
Compila la aplicación para producción en la carpeta dist:
```
npm run preview
```
## Tecnologías Utilizadas
Este proyecto está construido con las siguientes tecnologías:
- [React](https://react.dev/) - Librería de JavaScript para construir interfaces de usuario.
- [Vite](https://vitejs.dev/) - Herramienta rápida de bundling.
- [Firebase](https://firebase.google.com/?hl=es-419) - Base de datos y backend para almacenamiento de productos y órdenes.
- [React Router](https://reactrouter.com/en/main) - Manejo de rutas en la aplicación.
- [React Loading](https://www.npmjs.com/package/react-loading) - Componente de carga para la interfaz.

## Contribuciones
Si deseas contribuir a QueBuenaPINTA, sigue estos pasos:
1. Haz un fork del repositorio.
2. Crea una nueva rama con tus cambios:
```
git checkout -b mi-nueva-rama
```
3. Realiza tus modificaciones y haz un commit: 
```
git commit -m 'Agrego nueva funcionalidad'
```
4. Sube los cambios a tu repositorio: 
```
git push origin mi-nueva-rama
```
5. Abre un Pull Request describiendo tus cambios.

¡Toda contribución es bienvenida!

## Licencia
Este proyecto está licenciado bajo la [Licencia MIT](./LICENSE). Consulta el archivo LICENSE para obtener más información.

