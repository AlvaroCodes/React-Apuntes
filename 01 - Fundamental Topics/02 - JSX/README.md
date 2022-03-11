# 02 - JSX

Vídeo explicativo: [https://www.youtube.com/watch?v=EMBfiV9RJfg&t=281s](https://www.youtube.com/watch?v=EMBfiV9RJfg&t=281s)

# 2.1. ¿Qué es JSX?

[Presentando JSX - React](https://es.reactjs.org/docs/introducing-jsx.html)

[JSX](https://medium.com/@simonhoyos/qu%C3%A9-es-jsx-95006a2f94f9)  es una extensión de sintaxis de JS que nos permite mezclar JS y HTML (XML). El código JSX es compilado por un [“Transpiler (**transpilador**)”](https://es.wikipedia.org/wiki/Transpilador), esto se realiza con BabelJS.

⚡ JSX previene ataques de inyección, comprueba el código antes de ponerlo.

⚡ JSX utiliza la nomenclatura camelCase. 

```jsx
// Sintaxis JSX

// React crea los elementos como objetos, se crean con React.createElement(), 
// los elementos forman los componentes. React lee estos objetos y 
// los usa para construir el DOM y mantenerlo actualizado.

// ## Ejemplo de elemento creado con React.createElement():
// Nota: Esta estructura está simplificada
const element = {
  type: 'h1',
  props: {
    className: 'greeting',
    children: 'Hello, world!'
  }
};

// Esto es un elemento, describe lo que quieres ver en la pantalla.
const element = <h1>Hello, world!</h1>;
```

👁️ Los elementos de React son [inmutables](https://es.wikipedia.org/wiki/Objeto_inmutable). Una vez creas un elemento, no puedes cambiar sus hijos o atributos.

[BabelJS](https://en.wikipedia.org/wiki/Babel_(transcompiler)) es un compilador y transpilador de código, lo que hace es transformar en versiones de JS más antiguas. Algunas de las tecnologías que lo usan son [WebPack](https://es.wikipedia.org/wiki/Webpack), React, … 

[Babel · The compiler for next generation JavaScript](https://babeljs.io/)

```jsx
// JSX ➡️ <h1>Hello world!</h1> 

/// ¿Cómo se crearía en react?

// React (objeto) ➡️ React.createElement("h1", null, "Hello world!");
```

### **¿Qué debemos de tener en cuenta a la hora de usar JSX?**

- Hay ciertos atributos en HTML que son las mismas palabras reservadas de JS, en JSX algunos atributos cambian de nombre. Ejemplo: class por className.

👁️ Existe una excepción con los atributos aria y data (aria-modal, ...), utiliza un guion para separar las palabras. 

Para añadir estilos en línea JSX es necesario pasarle un objeto. Las propiedades de css también van en camelCase. 

```jsx
<h3
	style={{
			backgroundColor: 'green',
		}}
>Hola Mundo</h3>
```

- JSX sólo permite retornar un único elemento, por lo que todos los elementos deben estar envueltos dentro de un mismo elemento.

### Insertando expresiones en JSX

Se puede poner expresión JS dentro de { } Pero algunos valores no lo imprimen como puede ser el caso de boolean, null o undefined. Tampoco imprime objetos, es necesario pasarlo a String utilizando JSON.stringify. Los arrays los muestra concadenado sus elementos.

```jsx
const name = 'AlvaroCodes';

// const name = {
//     nombre: 'Alvaro', 
//     edad: 24
// }

// {JSON.stringify(name, null, 3)}

const element = <h1>Hello, {name}</h1>;

ReactDOM.render(element, document.getElementById('root'));

/* Se puede combinar JSX con bucles, expresiones condicionales, ... */

function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}

// Puedes utilizar comillas para especificar strings literales como atributos:
const element = <div tabIndex="0"></div>;

// También puedes usar llaves para insertar una expresión JS en un atributo:
const element = <img src={user.avatarUrl}></img>;
```