/*var i;
for (i=0; i <= 10; i++) {
	console.log("i vale: " + i);
	if (i==3) {
		break
	};
};
console.log("El ciclo for terminó.");
*/
/*
var i=0;

do{
	console.log("i vale: " + i);
	i++
} while(i<=10);	
console.log("El ciclo do-while terminó.");
sandbox,
memory leak
OCR
reconocimiento optico de caracteres
*/
/*
var i=1;
while(i<=10){
	i++;	
	if (i==3) {
		continue;
	}
	console.log("i vale: " + i);
}
console.log("El ciclo do-while terminó.");
*/





/*
var total=0;

for(var i=0; i<=100;i++)
{
	if(i%2==0){
		 total = total + i;
		//total += even;
		//console.log(even)
	}	
}
console.log("El resultado de la sumatoria es: " + total)

*/
/**/
// FACTORIAL. Dado un número entero entre 0 y 10, calcular:
var factorial=1; 
var n=10; // 5! = 120
var i=1;
/*
for(n; n<=4; n++)
{
		factorial *= n;
}
console.log(factorial)
*/
//Con Do While
do{
	//factorial= factorial * i;
	if (n==0) {
		break
	};
	factorial *= i;
	i++;
}while(i <= n);
console.log("El factorial de " + n + " es " + factorial)
/*
var array=[0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var index = array.length;
var x=index-1;
for(x; x>=0 ;x--){
			console.log(array[x])
}
var array2 = array.reverse()
console.log(array2)

*/