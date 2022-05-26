//1.- Solicitar 3 números entre 1 y el 100. Y elegir el mayor.
 alert("Ingrea 3 números del uno al 100");
const n1 = parseFloat(prompt("Ingresa el primer número:"));
const n2 = parseFloat(prompt("Ingresa el segundo número:"));
const n3 = parseFloat(prompt("Ingresa el segundonúmero:"));
console.log("Los numeros seleccionados fueron:" , n1, n2, n3); 
 
let mayor;
if(n1>=n2 && n1 >=num3){
    mayor = n1;
} 
else if (n2>=n1 && num>= num3){
    mayor =n2;
}
else{
    mayor = n3;
}
console.log("El numero mayor es: "+mayor); 

//2.- Solicitar 3 numeros entre el 1 y el 100. Y elegir el menor.
let menor;
if(n1<=n2 && num1 <=n3){
    menor = n1;
}
else if (n2<=n1 && n2<=n3){
    menor = n2;
}
else{
    menor = n3;
}
console.log("El numero menor es:" +menor); 

//4.- Solicitar un entero (entre el 100 y el 200) y determinar si es múltiplo de 3
num = parent(
    prompt(
       alert("Ingresa el numero entero para comprobar si ess multiplo de 3(entre 100 y 200)")
    )
);
while (num > 200  || num <100 ) {
    alert("El numero ingresado no esta entre 100 y el 200 intenta nuevamente");
num = prompt(
    "Ingrea eñ número para comprobar si es multiplo de 3"
);
}
if (num % 3 == 0){
alert("Es multiplo de 3!");
} else {
    alert("No es multiplo de 3!");
}

//5.- Elaborar un algoritmo para leer 3 números y determinar sí uno es la suma de los otros dos
n1=parseFloat(prompt("Ingresa el primer numero:", ""));
n2=parseFloat(prompt("Ingresa el segundo numero:", ""));
n3=parseFloat(prompt("Ingresa el tercer numero:", ""));

if(n1==n2+n3){console.log(n1+"Es la suma de"+n2+"y"+n3)}
else if (n2==n1+n3){console.log(n2+"Es la suma de"+n1+"y"+n3)}
else if (n3==n1+n2){console.log(n3+"Es la suma de"+n1+"y"+n2)}
else {console.log("Ningun numero en la suma de los otros")}    

//6.- Elabora un algoritmo para leer un número y determinar si es par o impar
n1=parseFloat(prompt("Introduce un numero:",""));
res=n1%2;
if(res==0){console.log("El numero es par")}
else{console.log("El numero es impar")}
