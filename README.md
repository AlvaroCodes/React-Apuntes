# 0. Introducción

### [RoadMap](https://roadmap.sh/react)

![https://roadmap.sh/roadmaps/react.png](https://roadmap.sh/roadmaps/react.png)

# 1.1. Conceptos Importantes

## 1.1.1. Bases de JS para comenzar con react

- Constantes y variables Let
- Template String
- Objetos literales
- Arreglos
- Desestructruación
- Promesas
- Fetch API
- Ternarios
- Async - Await

## 1.1.2. ¿Qué se necesita descargar, I**nstalaciones recomendadas**?

[Instalaciones recomendadas para mi curso de React de cero a experto](https://gist.github.com/Klerith/4a4abfd88a88b2d1f16efd95fea41362)

## 1.1.3. ¿Qué es react?

Video explicativo: [https://www.youtube.com/watch?v=tjVKd1jL2Rc](https://www.youtube.com/watch?v=tjVKd1jL2Rc)

React es una **biblioteca** de JS para crear interfaces de usuario. Se pueden utilizar para crear SPA (aplicaciones de una sola página), aplicaciones móviles (React Native), ... incluso se puede utilizar en el servidor (Server-side con node). 

Se caracteriza por ser muy eficiente y por tener componentes (componentes de interfaz de usuario reutilizables).

## 1.1.4 ¿Cómo funciona react?

🧩  React solo cambia lo que necesita ser cambiado. 

En lugar de manipular el DOM del navegador directamente, React crea un DOM virtual en la memoria, donde realiza toda la manipulación necesaria antes de realizar los cambios en el DOM del navegador.

# ESLINT y PRETTIER

Video explicativo: [https://www.youtube.com/watch?v=3BHXuZvI4FI&t=349s](https://www.youtube.com/watch?v=3BHXuZvI4FI&t=349s)

Artículo explicativo: Video explicativo: [https://www.youtube.com/watch?v=3BHXuZvI4FI&t=349s](https://www.youtube.com/watch?v=3BHXuZvI4FI&t=349s)

Son un formateador de código, para proyectos compartidos que todo el mundo tenga el mismo formato.  

**ESLint** es un *linter de código JavaScript*. Su función es analizar el código de nuestra aplicación, **detectar problemas en por medio de patrones** y si esta a su alcance resolverlos él mismo. Por otro lado, **Prettier** es un *formateador* de código. Tambien analiza nuestro código JavaScript.

# Introducción a React

### ¿Cómo es un código de react?

```jsx
const divRoot = document.querySelector('#root');
ReactDOM.render(<h1>Hola Mundo</h1>,divRoot);
```

### Librerías de react y babel (CDN)

```jsx
<!-- Cargat React -->
<script crossorigin src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
```

### Primer código React

```jsx
// # Código de prueba, sin hacer la instalación
// # Solo importar los script de Cargat React
<body>
<div id="root"></div>

<script type="text/babel"> // Para que sea procesado por babel
   const divRoot = document.querySelector('#root');
        
    const nombre = 'Alvaro';
    // React lee los {} como codigo js y por eso muestra 
    // la variable
    const h1Tag = <h1>Hola, soy { nombre }</h1>; // Elemento

		// Primer parametro elementro, segundo donde se ubica.
    ReactDOM.render(h1Tag, divRoot);

</script>
</body>
```

# 2. Cursos

### 2.1. Udemy

[https://www.udemy.com/course/curso-react-js](https://www.udemy.com/course/curso-react-js/)

[https://www.udemy.com/course/react-cero-experto/](https://www.udemy.com/course/react-cero-experto/)

## 2.2 Youtube

Desarrollo Útil: [https://www.youtube.com/watch?v=tjVKd1jL2Rc&list=PL3aEngjGbYhkg3AR-cytsvQIIGp1JgrY_](https://www.youtube.com/watch?v=tjVKd1jL2Rc&list=PL3aEngjGbYhkg3AR-cytsvQIIGp1JgrY_)

Midudev: [https://www.youtube.com/watch?v=T_j60n1zgu0&list=PLV8x_i1fqBw0B008sQn79YxCjkHJU84pC](https://www.youtube.com/watch?v=T_j60n1zgu0&list=PLV8x_i1fqBw0B008sQn79YxCjkHJU84pC)

# Artículos a tener en consideración:

### **Pensando en React:**

[Pensando en React - React](https://es.reactjs.org/docs/thinking-in-react.html)