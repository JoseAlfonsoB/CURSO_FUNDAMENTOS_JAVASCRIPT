# CURSO DE FUNDAMENTOS DE JAVASCRIPT 

## CLASE 1 **INSTALACIÓN DE VSC Y NODE.JS**

## CLASE 4 **VARIABLES Y BUENAS PRÁCTICAS EN JS**
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

## CLASE 5 **TIPOS DE DATOS EN JS (PRIMITIVOS Y COMPLEJOS)**

|DATOS PRIMITIVOS|DATOS COMPLEJOS|
|:---:|:---:|
|string|Object|
|Number|Array|
|Boolean|Function|
|Undefined||
|Symbol||
|Bigint||

### DATOS PRIMITIVOS

Son llamados así porque son valores **inmutables** y no se pueden cambiar. Si tienes el número `5`, no lo puedes **"editar"** ese cinco para que sea un seis, simplemente remplazas el valor completo.

#### 1. **String**
Es una cadena de caracteres y debe ser colocado entre comillas
> [!NOTE] 
> ```JS
> let cadena = 'Hola Mundo'
> ```

###### En JS existen 3 tipos de comillas
1. **Comillas dobles** `"Hola"`
2. **Comillas simples** `'Hola'`
3. **Backticks (comillas inversas)** `Hola`

Las comillas dobles y las comillas simples son **comillas sencillas** (es decir, que funcionan igual).

Pero las comillas de **Backticks** son comillas de **"función extendida"**. Ya que nos permiten **incrustar variables** y **expresiones** en una cadena de caracteres encerrandolas dentro de este bloque `${...}`.

#### 2. **Number**

Son números de tipo **entero y decimal**, así que son valores que representan todos los **números enteros** y los **números de punto decimal**.

> [!NOTE] 
> ```JS
> let numero = 1243
> let numero2 = 12.34
> ```

#### 3. **Boolean** (TIPO LÓGICO)

El tipo de dato Boolean **solo tienes dos posibles valores** `true` o `false`. 

Este tipo de dato se usa comúnmente se usa para almacenar valores de **si** o **no**.

#### 4. Undefined (desconocido)

El valor que tiene una variable que no ha sido declarada, pero no tiene valor asignado.

> [!NOTE] 
> ```JS
> let edad;
> alert(edad)
> ```

#### 5. **Null** (vacio)

Es una **aucencia intencional** de algun valor. (Es como decir: "Esta caja esta vacia apropósito").

#### 6. **Symbol**
Son **valores únicos** que sirven como **identificadores de propiedades**

> [!NOTE] 
> ```JS
> let persona = {
>     nombre:'Ana',
>     edad:23
> }
> ```

#### 7. **Bigint**

Valor utilizado para cuándo existen valores tan grandes que e tipo de dato **number** no lo pueda manejar.

### DATOS COMPLEJOS: Tipos de Referencia u Objetos

A diferencia de los primitivos, estos pueden almacenar **colecciones de datos** y son **mutables** (puedes cambiar su contenido sin remplazar la variable).

#### 1. **Object**

Los **objetos** se utilizan para **almacenar colecciones de datos** y entidades más complejas, como un **array** (arreglo).


> [!NOTE] 
> ```JS
> let numeros = [1, 2, 3, 4]
> ```

#### 2. **Funtions**

Son bloques de código que ejecutan una acción en especifico.

> [!NOTE] 
> ```JS
> function saludar (primerNombre) {
>    console.log('Hola ', primerNombre);
> 
> }
> ```

### DIFERENCIAS CLAVE: VALORES vs REFERENCIAS

|**Características**|**Primitivos**|**Complejos** |
|:----|:----|:----|
|**Almacenamiento**|Se guarda por **valor**|Se guarda por **referencia** (*dirección de memoria*)
|**Copia**|Si copias `a = b`, creas una copia física independiente|Si copias `obj1 = obj2`, ambos aputan al mismo lugar.|
|**Comparación**|Se compara por su contenido|Se compara por su dirección (dos objetos identicos no son iguales si son instancias distintas).|

> [!TIP]
> **¿Cómo saber qué tipo de datos es?**
>
>
> Para retroalimentación, podemos usar el operador `typeof`, a continación su muestra un ejemplo:
>
> ```JS 
> console.log(typeof "Hola"); // "string" 
> ```
