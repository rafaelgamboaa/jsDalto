// let pregunta = prompt('¿Que quieres hacer?');

// const sumar = (num1,num2) => {
//     return parseInt(num1) + parseInt(num2);
// }

// const restar = (num1,num2) => {
//     return parseInt(num1) - parseInt(num2);
// }

// const multiplicar = (num1,num2) => {
//     return parseInt(num1) * parseInt(num2);
// }

// const dividir = (num1,num2) => {
//     return parseInt(num1) / parseInt(num2);
// }

// if(pregunta === 'sumar') {
//     let valor1 = prompt('ingrese el primer valor');
//     let valor2 = prompt('ingrese el segundo valor');
//     let resultado = sumar(valor1,valor2);
//     document.write(resultado);
// } else if (pregunta === 'restar') {
//     let valor1 = prompt('ingrese el primer valor');
//     let valor2 = prompt('ingrese el segundo valor');
//     let resultado = restar(valor1,valor2);
//     document.write(resultado);
// } else if (pregunta === 'multiplicar'){
//     let valor1 = prompt('ingrese el primer valor');
//     let valor2 = prompt('ingrese el segundo valor');
//     let resultado = multiplicar(valor1,valor2);
//     document.write(resultado);
// } else if(pregunta === 'dividir'){
//     let valor1 = prompt('ingrese el primer valor');
//     let valor2 = prompt('ingrese el segundo valor');
//     let resultado = dividir(valor1,valor2);
//     document.write(resultado);
// } else{
//     alert('No se ha encontrado la operacion');
// }


// CLASES

// class animal {
    // constructor(especie,edad,color){
        // this.especie = especie;
        // this.edad = edad;
        // this.color = color;
        // this.info = `Soy un ${especie}, tengo ${edad} y soy de color ${color}`
    // }
    // METODO
    // verInfo() {
        // document.write(this.info + '<br>');
    // }
// }

// class Perro extends animal {
    // constructor(especie,edad,color,raza){
        // super(especie,edad,color);
        // this.raza = raza;
    // }
    // ladrar(){
        // alert('WAW!');
    // }
// }

// const perro = new Perro('perro',3,'blanco','Golden');
// const gato = new animal('gato',1,'negro');
// const pajaro = new  animal('pajaro',4,'verde');

// document.write(perro.info);
// document.write(gato.info);
// document.write(pajaro.info);

// LLAMADA AL METODO
// perro.verInfo();
// gato.verInfo();
// pajaro.verInfo();

// EJERCICIO 1

// class Celular {
//     constructor(color,peso,resolucion,camara,ram){
//         this.color = color;
//         this.peso = peso;
//         this.resolucionDePantalla = resolucion;
//         this.resolucionDeCamara = camara;
//         this.memoriaRam = ram;
//         this.encendido = false;
//     } 
//     // METODOS
//     prender(){
//         if(this.encendido === false){
//             alert('Celular encendido');
//             this.encendido = true;
//         }else{
//             alert('El celular esta apagado');
//             this.encendido = false;
//         }
//     }
//     reiniciar(){
//         if(this.encendido === true){
//             const decision = prompt('¿Esta seguro de reiniciar el dispositivo?');
//             if (decision === 'Si' || decision === 'si'){
//                 alert ('El Celular ha sido reiniciado');
//             }else if(decision === 'No' || decision === 'no'){
//                 alert('F');
//             }else{
//                 alert('Debe escribir Si o NO');
//             }
//         }else{
//             alert('El Celular esta apagado');
//         }
//     }
//     tomarFoto(){
//         alert(`Foto tomada en una resolucion de ${this.resolucionDeCamara}`);
//     }
//     grabarVideo(){
//         alert(`Video grabado en una resolucion de ${this.resolucionDeCamara}`);
//     }
//     mostrarInfo(){
//         return `El color es ${this.color}, pesa ${this.peso}, la pantalla tiene una resolucion de ${this.resolucionDePantalla}, 
//         tiene ${this.memoriaRam} de RAM y la camara tiene un sensor de ${this.resolucionDeCamara}
//         `
//     }
// }

// const chino = new Celular('negro','2KG','1280x768','12MP','2GB');
// const poco = new Celular('negro','1.9KG','1920x1080','16MP','4GB');
// const s20 = new Celular('negro','1.5KG','1920x768','32MP','8GB');

// class celularAltaGama extends Celular{
//     constructor(color,peso,resolucion,camara,ram,camaraSuperLenta,faceId,extraCamara){
//         super(color,peso,resolucion,camara,ram,camaraSuperLenta,faceId,extraCamara)
//         this.camaraSuperLenta = camaraSuperLenta;
//         this.faceId = faceId;
//         this.extraCamara = extraCamara;
//     }
//     altaGamaInfo(){
//         return this.mostrarInfo() + `Ademas posee camara super lenta, faceiD y un grand-angular`; 
//     }
// }

// const iPhone14Pro = new celularAltaGama('negro','100gr','2340x1520','48mp','32GB','Si','Si','Si');

// class App {
//     constructor(descargas, puntuacion, peso){
//         this.descargas = descargas;
//         this.puntuacion = puntuacion;
//         this.peso = peso;
//         this.iniciada = false;
//         this.instalada = false;
//     }
//     abrirApp(){
//         if(this.iniciada === false && this.instalada === true){
//             alert('Abriendo app');
//             this.iniciada = true;
//         } else {
//             alert('Debe instalar la app');
//         }
//     }
//     cerrarApp(){
//         if(this.iniciada === true && this.instalada === true){
//             alert('Cerrando app');
//             this.iniciada = false;
//         } else {
//             alert('Debe instalar la app');
//         }
//     }
//     instalarApp(){
//         if(this.instalada === false){
//             this.instalada = true;
//             alert('App instalada');
//         } else{
//             alert('La app ya esta instalada');
//         }
//     }
//     desinstalarApp(){
//         if(this.instalada === true){
//             let decision = prompt('¿Esta seguro de desinstalar la app?');
//             if(decision === 'Si' || decision === 'si'){
//                 this.instalada = false
//                 alert('App desinstalada');
//             }
//         } else{
//             alert('La app no esta instalada')
//         }
//     }
//     appInfo(){
//         return `Esta app tiene ${this.descargas} descargas, ${this.puntuacion} y pesa ${this.peso}`
//     }
// }

// const app = new App(100,'4.5 estrellas','40MB');

// document.write(`${app.appInfo()}`);

// class Calculadora {
//     constructor(){
//     }
//     calcularPotencia(num,exp){
//         return num**exp;
//     }
//     raizCuadrada(num){
//         return Math.sqrt(num);
//     }
//     raizCubica(num){
//         return Math.cbrt(num);
//     }
// }

// let decision = prompt('1. Calcular Potencia, 2. Raiz Cuadrada, 3. Raiz Cubica')
// const calculadora = new Calculadora();

// if(decision === '1'){
//     let num1 = prompt('Ingrese el numero a potenciar');
//     let num2 = prompt('Ingrese el exponente');
//     resultado = calculadora.calcularPotencia(num1,num2);
//     alert(`El resultado es ${resultado}`);
// }else if (decision === '2'){
//     let num = prompt('Ingrese un numero');
//     resultado = calculadora.raizCuadrada(num);
//     alert(`La raiz cuadrada de ${num} es ${resultado}`);
// } else if (decision === '3'){
//     let num = prompt('Ingrese un numero');
//     resultado = calculadora.raizCubica(num);
//     alert(`La raiz cubica de ${num} es ${resultado}`);
// } else {
//     alert('Tiene que seleccionar una de las 3 opciones');
// }

// const materias = [{
//     nombre: 'matematicas',
//     profesor: 'Juan Lopez',
//     alumnos: ['Jose Antonio', 'Juan']
// },{
//     nombre: 'programacion',
//     profesor: 'Rick Sanchez',
//     alumnos: ['Samuel', 'Juan']
// },{
//     nombre: 'fisica',
//     profesor: 'Rick Sanchez',
//     alumnos: ['Jose Antonio', 'Samuel','Pepe']
// }]

// const verMateria = (materia) => {
//     const resultado = materias.find(x =>x.nombre === materia);
//     if(resultado){
//         return `Para ${materia}, el profesor es ${resultado.profesor} 
//         y los alumnos son ${resultado.alumnos}`;
//     }else{
//         return `La materia no esta registrada`;
//     }
// }

// const infoAlumno = (alumno) => {
//     let clasesPresentes = [];
//     let cantidadClases = 0;
//     for(info of materias){
//         if(info.alumnos.includes(alumno)){
//             cantidadClases++;
//             clasesPresentes.push(' ' + info.nombre)
//         }
//     }
//     if(cantidadClases === 0){
//         return `${alumno} no esta inscrito`
//     }
//     return `${alumno} esta cursando ${cantidadClases} clases: ${clasesPresentes}`
// }

// console.log(infoAlumno('Jose Antonio'));

// const materias = [{
    // nombre: 'matematicas',
    // profesor: 'Juan Lopez',
    // alumnos: ['Jose Antonio', 'Juan']
// },{
    // nombre: 'programacion',
    // profesor: 'Rick Sanchez',
    // alumnos: ['Samuel', 'Juan']
// },{
    // nombre: 'fisica',
    // profesor: 'Rick Sanchez',
    // alumnos: ['Jose Antonio', 'Samuel','Pepe']
// }]

// const cantidadDeAlumnos = (materia) => {
    // let resultado = materias.find(x => x.nombre === materia);
    // if(resultado.alumnos.length >= 3){
        // return `No se puede inscribir porque ya hay mas 
        // de ${resultado.alumnos.length} alumnos`
    // } else {
        // return `Esta Inscrito`
    // }
// }
// console.log(cantidadDeAlumnos('fisica'));

// const materias = [{
    // nombre: 'matematica',
    // nota: 70
// },{
    // nombre: 'geografia',
    // nota: 75
// },{
    // nombre: 'quimica',
    // nota: 85
// },{
    // nombre: 'programacion',
    // nota: 55
// },{
    // nombre: 'historia',
    // nota: 95
// },]

// const materiasAprobadas = () =>{
    // let aprobadas = [];
    // let reprobadas = [];
    // for(prop of materias){
        // if(prop.nota >= 75) {
            // aprobadas.push({materia: prop.nombre, nota: prop.nota});
        // }else {
            // reprobadas.push({materia: prop.nombre, nota: prop.nota});
        // }
    // }
    // console.log(reprobadas);
// }

// materiasAprobadas();

// DOM

// let usuarios = [
    // {nombre:'Jose Salinas',correo:'jose@gmail.com',contraseña:'jose',cedula:14689576,nivel:'profesor'},
    // {nombre: 'Jose Parra', correo:'parra@gmail.com',contraseña:'parra',cedula:24689957,nivel:'estudiante'}];

// const login = (cedula, contraseña) => {
    // const result = usuarios.find(i => i.cedula === cedula && i.contraseña === contraseña);
    // if(result === undefined) {
        // return console.log(`No esta registrado, si desea registrarse haga click aca`)
    // } else {
        // return console.log(`Bienvenido ${result.nombre}! ha iniciado sesion como ${result.nivel}`);
    // }
// }
    
// const registro = (cedula,contraseña) => {
    // const validation = usuarios.find(i => i.cedula === cedula && i.contraseña === contraseña);
    // if(validation === undefined){
        // usuarios.push({cedula:cedula, contraseña:contraseña});
        // console.log(usuarios);
    // } else {
        // return console.log(`Usted es ${validation.nombre}, ya esta registrado`);
    // }
// }

// registro(25582444,'rafa');

// const obj = [1,2,3,4,5,6,7,8,9,10];

// const result = obj.slice(2,5)
// console.log(result);

// DOM
// SELECCIONAR POR ID
// let parrafo = document.getElementById('parrafo');
// console.log(parrafo);

// SELECCIONAR POR ETIQUETA
// let x = document.getElementsByTagName('p');
// console.log(x);

// Query Selector
// let selector = document.querySelector('#parrafo');
// console.log(selector);

// Query Selector All
// let all = document.querySelectorAll('#parrafo');
// console.log(all);

// DEFINIR, OBTENER Y ELIMINAR VALORES DE ATRIBUTOS
// const rangoEtario = document.querySelector('.rango');
// rangoEtario.setAttribute("type","range");

// OBTENER ATRIBUTO
// console.log(rangoEtario.getAttribute("type"));

// ELIMINAR ATRIBUTO
// rangoEtario.setAttribute("type","text");
// console.log(rangoEtario.getAttribute("type"));
// rangoEtario.removeAttribute("type");
// console.log(rangoEtario.hasAttribute("type"));

// ATRIBUTOS GLOBALES
// const titulo = document.querySelector('.titulo');
// titulo.setAttribute("contenteditable","true"); 

// CLASES, CLASSLIST Y METODOS DE CLASSLIST
// const titulo = document.querySelector(".titulo");
// titulo.classList.add("grande");
// titulo.classList.remove("grande");
// let info = titulo.classList.item(0);
// console.log(info);
// console.log(titulo.classList.contains("titulo"));
// titulo.classList.toggle("grande");  

// CREACION DE ELEMENTOS
// const titulo = document.querySelector(".titulo");
// let resultado = titulo.textContent;
// console.log(resultado);

// const container = document.querySelector(".container");
// console.log(container);

// const item = document.createElement("LI");
// console.log(item);

// const textItem = document.createTextNode("Holaaa");
// console.log(textItem);

// item.appendChild(textItem);
// console.log(item)

const ciudadanos = [{nombre: "Rafael", apellido: "Gamboa", cedula: 25582444}];


