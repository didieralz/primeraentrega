function promedio1 (nota_uno,nota_dos,nota_tres){
	let resultado=(nota_uno+nota_dos+nota_tres)/3;
	console.log(resultado);
}
let promedio2 =(nota_uno,nota_dos,nota_tres,callback)=>{
	setTimeout(function(){
	let resultado=(nota_uno+nota_dos+nota_tres)/3;
	callback (resultado);
	},2000);
}

function promedio3 (nota_uno,nota_dos,nota_tres){
	let resultado=(nota_uno+nota_dos+nota_tres)/3;
	console.log(resultado);
}

promedio2(5,5,5, function(resultado){
	console.log(resultado);
})
