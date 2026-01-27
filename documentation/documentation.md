# CURSO DE FUNDAMENTOS DE JAVASCRIPT 

## CLASE 1 **INSTALACIÓN DE VSC Y NODE.JS**

## CLASE 2 **VARIABLES Y BUENAS PRÁCTICAS EN JS**
### Anatomía de una variable

Las **variables** en programación, las podemos relacionar como un **caja** (una analogía del mundo real), ya que las cajas son objetos en los cuales podemos **almacenar objetos**, también otra característica de las cajas es que pueden tener **nombres y etíquetas**.

De esta misma manera es cómo funciona una variable en JavaScript, primero vamos a escribir la **palabra clave** `let`, y seguido de esto debemos escribir el nombre de la variable.

> Ej: `let cajaDeJose`

Algunos puntos importantes al momento de crear nombres para nuestras variables son los siguientes:
1. Colocar nombres descriptivos
2. Evitar las ambiguedades

###### Ejemplo de una declaración INCORRECTA

`let CDA;`

###### Ejemplo de una declaración CORRECTA

`let cajaDeJose;`

Bien, ahora lo idea al momento de crear una nueva varaible, es que esta pueda almacenar un valor especifico dentro de ella. Esto lo podemos hacer con ayuda del **signo igual** `=`, a continuación se muestra un ejemplo:

`let cajaDeAlfonso = 'Cinta';`

### LET y CONST

#### LET
Lo usamos normalmente **cuando vamos a declarar variables** y como su nombre lo dice **"son valores que su valor va a cambiar con el tiempo"**.
Un ejemplo perfecto para esto sería un contador:

```JS
let contador = 0
contador = contador + 1
```

#### CONST
Ahora, cuándo vamos autilizar a **CONST**. CONST se va a utilizar cuándo tengamos que declarar variables que sus valores necesitemos que sean **constantes** o **fijas**, es decir que su valor nunca se va a modificar o que siempre va a ser el mismo a lo largo de todo el programa.

```JS
const PI = 3.1416
```

