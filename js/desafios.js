//var arreglo=[0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
/*var index = arreglo.length-1;

for(var x = 0; x < index/2 ;x++){
	back = arreglo[index];
	arreglo[index] = arreglo[x];
	arreglo[x]=back;
	index--
}
console.log(arreglo)

*/
function invertirArreglo(arreglo){

var aux;
for (var i = 0; i < arreglo.length/2; i++) {
	aux = arreglo[i];
	arreglo[i] = arreglo[arreglo.length - 1 - i]
	arreglo[arreglo.length - 1 -i] = aux;
}
console.log(arreglo)
//return arreglo
}
//var arreglo=[0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//invertirArreglo([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
var arr=["Hola","alumnos","desafio","latam"]
invertirArreglo(arr)
console.log(arr)

/*
function sumatoria(inicio, fin) {
	var suma=0;
	if (inicio<=fin) {
		for (var i = inicio; i <= fin; i++) {
		//if (i%2==0) {
			suma += i;
		//}
		}
	};

	return suma;
}

var resultado = sumatoria(90,100);
console.log("El resultado de la sumatoria es " + resultado);

*/
/*
function operacion(inicio, fin, tipo) {
	var resultado;
	if (tipo == "sumatoria") {
		resultado = 0;
	}else{
		resultado = 1;
	}

	if (inicio <= fin) {
		for (var i = inicio; i<= fin; i++) {
			if (fin == 0) {
				break;
			}
			if(tipo == "sumatoria"){
				resultado += i;
			}else{
				resultado *=i;
			}
		}
	}
	return resultado;
}

var resultado = operacion(1,5,"factorial");
console.log("El resultado de la operación es " + resultado);

si numero de
*/



