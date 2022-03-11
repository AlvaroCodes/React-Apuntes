## Ejercicios de Repaso
### Preguntas para repasar lo visto de CRA y JSX.

<details><summary>1.- ¿Qué tecnologías mezcla JSX?</summary>
<p>

JSX = HTML(XML) + JS.

</p>
</details>

<details><summary>2.- ¿Qué nomenclatura utiliza JSX?</summary>
<p>

Utiliza la nomenclatura camelCase

</p>
</details>

<details><summary>3.- ¿Cómo se escribe la etiqueta class en JSX?</summary>
<p>

Hay ciertos atributos en HTML que son las mismas palabras reservadas de JS, en JSX algunos atributos cambian de nombre. Ejemplo: **class por className.**

</p>
</details>

<details><summary>4.- ¿Cómo se añade estilos en linea en JSX?</summary>
<p>

Se escribe la etiqueta style con {} sustituyendo a las comillas, en su interior contiene un 
objeto con los atributos css. Estos atributos tienen la nomenclatura camelCase. 
```JavaScript
<h3
	style={{
			backgroundColor: 'green',
		}}
>Hola Mundo</h3>

```

</p>
</details>

<details><summary>5.- ¿Cómo se insertan expresiones en JSX?</summary>
<p>

Se utiliza los {} para insertar expresiones. 

</p>
</details>

<details><summary>6.- ¿Qué valores no se pueden mostrar dentro de una expresión en JSX?</summary>
<p>

No se pueden mostrar valores booleanos, null o undefined.
Tampoco se pueden mostrar objetos, se tiene que convertir a string con JSON.stringify.

</p>
</details>

<details><summary>7.- ¿Cómo se muestra un objeto dentro de una expresion {} en JSX?</summary>
<p>

No se muestra los objetos, te devuelve un error, se tiene que convertir a string con JSON.stringify.

</p>
</details>

<details><summary>8.- ¿Cómo se muestra un array dentro de una expresion {} en JSX?</summary>
<p>

Los arrays se muestran concadenados.

</p>
</details>

<details><summary>9.- ¿Cuál es el punto inicial de la aplicación de un proyecto de react?</summary>
<p>

El punto inicial de la aplicación se encuentra dentro de src, puede tener el nombre de 
main.js o index.js dependiendo de como se haya configurado. 

</p>
</details>

<details><summary>10.- ¿Qué pasa si no se encuentra un archivo estático?</summary>
<p>

Te muestra el index de la apliación

</p>
</details>

<details><summary>11.- Una aplicacion de react que lee primero, ¿la carpeta public o la carpeta src?</summary>
<p>

Primo lee la carpeta public y luego lee la carpeta src.

</p>
</details>

<details><summary>12.- ¿Cómo se puede renderizar un elemento en react con ReactDom?</summary>
<p>

```JavaScript
ReactDOM.render(element, document.getElementById('root'));
```

</p>
</details>

<details><summary>13.- ¿Cómo se pueden importar estilos en un archivo js o jsx?</summary>
<p>

```JavaScript
import './index.css';
```

</p>
</details>

<details><summary>14.- Si estas iniciando un proyecto, ¿cuál es la forma más rapida de crearlo, con vite o CRA?</summary>
<p>

```JavaScript
import './index.css';
```

</p>
</details>

<details><summary>15.- ¿Qué pasa si se busca un archivo estatico con estension en react y no lo encuentra?</summary>
<p>

Te devuelve un error 404.

</p>
</details>

<details><summary>16.- ¿React es un framework o una librería?</summary>
<p>

React es una libreria.

</p>
</details>



