¡Bienvenido al repositorio del proyecto Páginas Compartidas!

**Descripción:**

El proyecto “Páginas Compartidas” es una aplicación web diseñada para facilitar el intercambio de libros entre usuarios de una ciudad. La plataforma permite a los usuarios ver un catálogo general, buscar e intercambiar libros en buen estado o de segunda mano, con el objetivo de crear una comunidad de lectores que comparten su pasión.

**Funciones principales:**

1. **Explorar y buscar libros:** Los usuarios pueden explorar una amplia selección de libros disponibles para intercambiar y buscar ejemplares específicos por autor, título, ISBN o género.

2. **Intercambio de libros:** Los usuarios registrados pueden agregar libros a su librería personal y ofrecerlos para intercambiar con otros usuarios. El sistema de intercambio facilita la comunicación entre los usuarios interesados en un intercambio mutuo.

3. **Perfil de usuario:** Cada usuario tiene un perfil personalizado donde puede ver sus libros agregados, intercambios realizados, reseñas recibidas y otros detalles relevantes.

4. **Reseñas y recomendaciones:** Los usuarios pueden dejar reseñas y recomendaciones sobre los libros que han leído, ayudando a otros usuarios a tomar decisiones informadas sobre qué libros leer.

5. **Comunidad de lectores:** La plataforma fomenta la creación de una comunidad de lectores donde los usuarios pueden conectarse entre sí, compartir experiencias de lectura y participar en discusiones sobre libros y autores. Promoviendo la economía circular al habilitar el acceso a libros de segunda mano sin costo.

**Tecnologías utilizadas:**

- Frontend: HTML, CSS, JavaScript (React.js con Vite)
- Backend: Java (SpringBoot)
- Base de datos: MySQL
-Herramientas de desarrollo: IntelliJ, Visual Studio Code
- Otras herramientas: Postman, Git, GitHub, Firebase (para almacenamiento de imágenes estáticas del sitio)

-Spring Security
Seguridad basada en manejo de roles y permisos.
- Autenticación: JSON Web Tokens (JWT)

**Recursos útiles*

Canva: para crear Gráficos y elementos de diseño
ColorMind : para revisar la aplicación de paleta de colores


**Instalación:**

1. Clona este repositorio en tu máquina local utilizando el siguiente comando:

  ```
   git clone https://github.com/No-Country/c16-49-n-java.git

   ```

2. Accede al directorio del proyecto:
   ```
cd c16-49-n-java/frontend
cd c16-49-n-java/backend
   ```

3. Instala las dependencias del frontend y backend:
   ```
   npm install

   ```

Para backend, será necesario contar con con Java 17 y Maven como herramienta de gestión de construcción. Pueden obtener las dependencias usando `mvn`:

```
mvn dependency:resolve
```

4. Inicia el servidor de desarrollo:
   ```
   npm run dev (frontend)
   ```

Inicializar backend:
```
mvn compile
cd target
java app-intercambio-libros-<version>.jar
```


5. Abre tu navegador web y visita la dirección: `http://localhost:5173` para ver la aplicación en funcionamiento.

**Autores:**

- Jesús Pablo Avila - BackEnd
- Matías Perlo - BackEnd
- Yormaris Maita - FrontEnd

**Licencia:**

Este proyecto está bajo la Licencia MIT. Consulta el archivo LICENSE para más detalles.

¡Gracias por tu interés en el proyecto de intercambio de libros! Si tienes alguna pregunta o sugerencia, no dudes en ponerte en contacto con nosotros. ¡Esperamos que disfrutes usando la plataforma!
