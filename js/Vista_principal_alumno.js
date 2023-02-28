let listaAlumnos = [];

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

formulario.addEventListener('submit', validarFormulario);


function validarFormulario(e) {
    e.preventDefault();


    if (fechaImput.value === '' || tipoImput.value === '') {
        alert('Todos los campos deben ser rellenados');
        return;

    }

    if (editando) {
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

function agregarEmpleado() {
    listaAlumnos.push({ ...objAlumno });

    mostrarEmpleado();


    formulario.reset();

    limpiarObjeto();

}

function limpiarObjeto() {
    objAlumno.id = '';
    objAlumno.fecha = '';
    objAlumno.tipo = '';
    objAlumno.horas = '';
    objAlumno.actividad = '';
    objAlumno.observaciones = '';


}

function mostrarEmpleado() {
    var counter = "0";
    var totalHoras = 0;
    limpiarHTML();

    const divEmpleados = document.querySelector('.div-empleados');

    // Verificar si ya hay empleados cargados en el div
    if (divEmpleados.innerHTML.trim() !== '') {
        return;
    }

    listaAlumnos.forEach(empleado => {
        counter++;
        const { id, fecha, tipo, horas, actividad, observaciones } = empleado;
        totalHoras += Number(horas);
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

    // Guardar los datos en el local storage
    const listaAlumnosJSON = JSON.stringify(listaAlumnos);
    localStorage.setItem('listaAlumnos', listaAlumnosJSON);

    if (counter == listaAlumnos.length) {
        const espaciadoHoras = document.querySelector('.div-horas');
        const linea = document.createElement('p');
        linea.textContent = "El numero total de horas es " + totalHoras;
        espaciadoHoras.removeChild(document.querySelector('p'))
        espaciadoHoras.appendChild(linea);
    }
}

// Leer los datos del local storage y asignarlos a la lista de empleados
const listaAlumnosJSON = localStorage.getItem('listaAlumnos');
if (listaAlumnosJSON) {
    listaAlumnos = JSON.parse(listaAlumnosJSON);
}

mostrarEmpleado();  // Llamar a la función para mostrar los empleados al cargar la página



function cargarEmpleado(empleado) {
    const { id, fecha, tipo, horas, actividad, observaciones } = empleado;

    fechaImput.value = fecha;
    tipoImput.value = tipo;
    horasImput.value = horas;
    actividadImput.value = actividad;
    observacionesImput.value = observaciones;

    objAlumno.id = id;

    formulario.querySelector('button[type="submit"]').textContent = 'Actualizar';

    editando = true;

    // Guardar el empleado actual en el local storage
    const empleadoJSON = JSON.stringify(empleado);
    localStorage.setItem('empleadoActual', empleadoJSON);
}

// Leer el empleado actual del local storage y llamar a la función cargarEmpleado()
const empleadoJSON = localStorage.getItem('empleadoActual');
if (empleadoJSON) {
    const empleado = JSON.parse(empleadoJSON);
    cargarEmpleado(empleado);
}


function editarEmpleado() {
    objAlumno.fecha = fechaImput.value;
    objAlumno.tipo = tipoImput.value;
    objAlumno.horas = horasImput.value;
    objAlumno.actividad = actividadImput.value;
    objAlumno.observaciones = observacionesImput.value;


    listaAlumnos.map(empleado => {
        if (empleado.id === objAlumno.id) {
            empleado.id = objAlumno.id;
            empleado.fecha = objAlumno.fecha;
            empleado.horas = objAlumno.horas;
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

function eliminarEmpleado(id) {
    listaAlumnos = listaAlumnos.filter(empleado => empleado.id !== id);
    limpiarHTML();
    mostrarEmpleado();

}

function limpiarHTML() {
    const divEmpleados = document.querySelector('.div-empleados');
    while (divEmpleados.firstChild) {
        divEmpleados.removeChild(divEmpleados.firstChild);
    }

}
