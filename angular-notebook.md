# Angular Notebook

## Notes

### Create a component without test

``` ng generate component component-name --skipTests=true ```
``` ng g c component-name --skipTests=true ```

## Data Biding

Union o enlace de datos, sirve para unir datos entre la plantilla html y la clase del componente:
Interpolación, Property Binding, Event Binding y Two Way Binding.

## Directivas

Existen directivas estructurales y de estado, las estructurales su sintaxis es *ngFor y se
emplean para modificar el layout (DOM) mientras que las directivas de estado como [ngClass] utlizan
una sintaxis de corchetes y modifican visualmente el elemnto mas no su composicion dentro del DOM.

Host Biding: clase del core de angular que sirve para enlazar nuestras clases de la plantilla
con propiedades de la clase del componente desde una directiva personalizada.

HostListener: clase del core de angular que va a estar escuchando algun evento que se produzca en
nuestra plantilla, para luego asociarlo a un metodo de nuestra clase del componente.

## Pipes

### Pipe Date

TypeScript

``` TypeScript
  hoy = new Date();
```

HTML

``` HTML
  <p>Colombia, {{ hoy | date: 'd-M-y'}} a las {{ hoy | date: 'H:m Z' }} </p>
```

### Pipe Uppercase and Lowercase

``` HTML
  <p> {{ ciudad | uppercase}} </p>
  <p> {{ ciudad | lowercase}} </p>
```

### Pipe Decimal

El pipe number recibe como parametros 3 valores organizados de la siguiente manera: number:'3.2-2'
donde el primer digito corresponde a cantidad de numeros enteros, el segundo corresponde al numero
minimo de digitos y el tercero al numero maximo qeu va a mostrar el pipe.

``` HTML
  <p>Resultado= {{ resultado | number:'3.2-2' }} </p>
```

### Pipe Currency

Utlizado para el cambio de divisas

``` HTML
  <p>Mil pesos colombianos equivalen a {{ pesodolar | currency: 'USD':true }} </p> 
  <p>Mil pesos colombianos equivalen a {{ pesoeuro | currency: 'EUR':true }} </p>
```

### Pipe i18nSelect

Sirve para acceder a un valor mediante la llave en el mismo HTML

TypeScript

``` TypeScript
  nombre: string = 'Laura';
  sexo: string = 'mujer';
  encabezamiento: any = {
  'hombre': 'Estimado',
  'mujer': 'Estimada'
  };
```

HTML

``` HTML
  <p> {{ sexo | i18nSelect: encabezamiento }} {{ nombre }} </p>
```
