let listaAlumnos =[];

const objAlumno = {

    id: '',
    fecha: '',
    tipo: '',
    horas: '',
    actividad: '',
    observaciones: '',
}

let editando = false;


const formulario = document.querySelector('#formulario');
const fechaImput = document.querySelector('#fecha');
const tipoImput = document.querySelector('#tipo');
const horasImput = document.querySelector('#horas');
const actividadImput = document.querySelector('#actividad');
const observacionesImput = document.querySelector('#observaciones');

const btnguardar = document.querySelector('#btnguardar');

formulario.addEventListener('submit',validarFormulario);


window.onload = function rellenoCrud(){
    objAlumno.id = "1";
     objAlumno.fecha = "2022-01-22";
     objAlumno.tipo = "Dual";
     objAlumno.horas = "9";
     objAlumno.actividad = "Java";
     objAlumno.observaciones = "Bien";
 agregarEmpleado();
 objAlumno.id = "2";
     objAlumno.fecha = "2021-01-22";
     objAlumno.tipo = "FCT";
     objAlumno.horas = "12";
     objAlumno.actividad = "HTML";
     objAlumno.observaciones = "Todo perfecto";
 agregarEmpleado();
    objAlumno.id = "3";
     objAlumno.fecha = "2022-05-12";
     objAlumno.tipo = "FCT";
     objAlumno.horas = "21";
     objAlumno.actividad = "Javascript";
     objAlumno.observaciones = "Bien";
 agregarEmpleado();
 objAlumno.id = "4";
     objAlumno.fecha = "2021-11-22";
     objAlumno.tipo = "Dual";
     objAlumno.horas = "32";
     objAlumno.actividad = "Base de Datos";
     objAlumno.observaciones = "Nada";
 agregarEmpleado();

};



function validarFormulario(e) {
    e.preventDefault();
    

    if(fechaImput.value === '' || tipoImput.value === ''){
        alert('Todos los campos deben ser rellenados');
        return;

    }

    if(editando){
        editarEmpleado();
        editando = false;
    } else {


     objAlumno.id = Date.now();
     objAlumno.fecha = fechaImput.value;
     objAlumno.tipo = tipoImput.value;
     objAlumno.horas = horasImput.value;
     objAlumno.actividad = actividadImput.value;
     objAlumno.observaciones = observacionesImput.value;
     


        agregarEmpleado();
    }

}

function agregarEmpleado(){
    listaAlumnos.push({... objAlumno});

    mostrarEmpleado();

    formulario.reset();

    limpiarObjeto();

}

function limpiarObjeto(){
 objAlumno.id = '';
 objAlumno.fecha = '';
 objAlumno.tipo = '';
 objAlumno.horas = '';
 objAlumno.actividad = '';
 objAlumno.observaciones = '';


}

function mostrarEmpleado(){
var counter="0";
var totalHoras=0;
    limpiarHTML();

    const divEmpleados = document.querySelector('.div-empleados');

    listaAlumnos.forEach( empleado => {
        counter++;
        const {id, fecha, tipo, horas, actividad, observaciones} = empleado;
        totalHoras+=Number(horas);
        const parrafo = document.createElement('p');
        parrafo.textContent = `${counter}  |  ${fecha}  |  ${tipo}  |  ${horas}  |  ${actividad}  |  ${observaciones}`;
        parrafo.dataset.id = id;

        const editarBoton = document.createElement('button');
        editarBoton.onclick = () => cargarEmpleado(empleado);
        editarBoton.textContent = 'Editar';
        editarBoton.classList.add('btn', 'btn-editar');
        parrafo.append(editarBoton);

        const eliminarBoton = document.createElement('button');
        eliminarBoton.onclick = () => eliminarEmpleado(id);
        eliminarBoton.textContent = 'Eliminar';
        eliminarBoton.classList.add('btn', 'btn-eliminar');
        parrafo.append(eliminarBoton);

        
        

        const hr = document.createElement('hr');
        

        divEmpleados.appendChild(parrafo);
        divEmpleados.appendChild(hr);
    });
    if(counter==listaAlumnos.length){
    const espaciadoHoras = document.querySelector('.div-horas');
    const linea = document.createElement('p');
    linea.textContent ="El numero total de horas es"+totalHoras;
    
    espaciadoHoras.appendChild(linea);
}

}

function cargarEmpleado(empleado){
    const {id, fecha, tipo, horas, actividad, observaciones} = empleado;

    fechaImput.value = fecha;
    tipoImput.value = tipo;
    horasImput.value = horas;
    actividadImput.value = actividad;
    observacionesImput.value = observaciones;
   

 objAlumno.id = id;

    formulario.querySelector('button[type="submit"]').textContent = 'Actualizar';

    editando = true;

}

function editarEmpleado(){
 objAlumno.fecha = fechaImput.value;
 objAlumno.tipo = tipoImput.value;
 objAlumno.horas = horasImput.value;
 objAlumno.actividad = actividadImput.value;
 objAlumno.observaciones = observacionesImput.value;


    listaAlumnos.map( empleado => {
        if(empleado.id === objAlumno.id){
            empleado.id = objAlumno.id;
            empleado.fecha = objAlumno.fecha;
            empleado.tipo = objAlumno.tipo;
            empleado.actividad = objAlumno.actividad;
            empleado.observaciones = objAlumno.observaciones;
           
        }

    });
    
    limpiarHTML();
    mostrarEmpleado();

    formulario.reset();

    formulario.querySelector('button[type="submit"]').textContent = 'agregar';

    editando = false;

    
}

function eliminarEmpleado(id){
    listaAlumnos = listaAlumnos.filter(empleado => empleado.id !== id);
    limpiarHTML();
    mostrarEmpleado();
    
}

function limpiarHTML(){
    const divEmpleados = document.querySelector('.div-empleados');
    while(divEmpleados.firstChild){
        divEmpleados.removeChild(divEmpleados.firstChild);
    }

}
