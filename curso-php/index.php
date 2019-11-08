<?php  
//echo comments

//echo is to print in screen 
echo "CURSO DE PHP<br>";
echo "hello world<br>";

//variables $namevariable
$name = "nicola";
echo "Hello $name<br>";

//para saber el tipo de dato usamo gettype
echo 'el tipo de dato del nombre es: ' . gettype($name) . "<br>";

//constantes, buena practica: definirlas en mayuscula
echo "<br>CONSTANTES<br><br>";
define(NOMBRE, 'nicola');
echo "my name is: " . NOMBRE;
?>