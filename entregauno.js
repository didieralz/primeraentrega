//funcion curso usada para crear objetos de tipo curso
function curso(nombre,cupo, horario,idcurso){
	this.nombre = nombre;
	this.cupo = cupo;
	this.horario=horario;
	this.idcurso=idcurso;
}

var curso_uno = new curso('matematicas',40,'martes 8-10','curso_uno');
var curso_dos = new curso('español', 20, 'martes10-12', 'curso_dos');
var curso_tres = new curso('dibujo',15,'sabado8-12','curso_tres');
var cursos = [curso_uno,curso_dos,curso_tres];
// guarda matricula en array
var matriculados = new Array(2);
matriculados[0]=new Array;
matriculados[1]=new Array;
matriculados[2]=new Array;
var indice = 0;
//genera una matricula para un curso, requie id curso, nombre y cedula
function matricula(idcurso,nombre,cedula){
	this.idcurso=idcurso.nombre;
	this.nombre=nombre;
	this.cedula=cedula;
	indice=indice+1;
	matriculados[indice][0]=idcurso;
	matriculados[indice][1]=nombre;
	matriculados[indice][2]=cedula;
	console.log('se ha matriculado al estudiante '+nombre+' identificado con la cedula '+cedula+' en el curso '+idcurso.nombre);
	console.log('infromacion del curso: '+idcurso.nombre+' '+idcurso.horario);
 }
//muestra los cursos disponibles, no requiere info
function opciones(){
	console.log(cursos);
}
//muestra la informacion de un curso, requiere id curso
function info(idcurso){
	console.log(idcurso)
}

opciones();
info(curso_dos);
matricula(curso_uno, 'jose', 123456);
console.log(matriculados)