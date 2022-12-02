let listaAlumnos =[];
const objAlumno = {
    id: '',
    Nombre_de_la_empresa: '',
    Telefono: '',
    Email: '',
    Responsable: '',
    Observaciones_o_incidencias: '',
}
let editando = false;
const formulario = document.querySelector('#formulario');
const Nombre_de_la_empresaImput = document.querySelector('#Nombre_de_la_empresa');
const TelefonoImput = document.querySelector('#Telefono');
const EmailImput = document.querySelector('#Email');
const ResponsableImput = document.querySelector('#Responsable');
const Observaciones_o_incidenciasImput = document.querySelector('#Observaciones_o_incidencias');
const btnguardar = document.querySelector('#btnguardar');
formulario.addEventListener('submit',validarFormulario);
window.onload = function rellenoCrud(){
    objAlumno.id = "1";
     objAlumno.Nombre_de_la_empresa = "Cesur";
     objAlumno.Telefono = "900789087";
     objAlumno.Email = "pedro@gmail.com";
     objAlumno.Responsable = "Pepe Guzman";
     objAlumno.Observaciones_o_incidencias = "Nada";
     objAlumno.Asignar = "Manolo Gonzalez";
agregarEmpleado();
 objAlumno.id = "2";
 objAlumno.Nombre_de_la_empresa = "Roberto Web";
 objAlumno.Telefono = "300456789";
 objAlumno.Email = "Roberto@gmail.com";
 objAlumno.Responsable = "Roberto Alonso";
 objAlumno.Observaciones_o_incidencias = "Nada";
 objAlumno.Asignar = "Pablo Pérez";
 agregarEmpleado();
    objAlumno.id = "3";
    objAlumno.Nombre_de_la_empresa = "Telefónica";
    objAlumno.Telefono = "300456789";
    objAlumno.Email = "Telefónica@gmail.com";
    objAlumno.Responsable = "Francisco Elela";
    objAlumno.Observaciones_o_incidencias = "Un poco lenta";
    objAlumno.Asignar = "Benito Camela";
 agregarEmpleado();
 objAlumno.id = "4";
 objAlumno.Nombre_de_la_empresa = "Rodolfo Burguer";
 objAlumno.Telefono = "390456789";
 objAlumno.Email = "Robertito@gmail.com";
 objAlumno.Responsable = "Paco Luis";
 objAlumno.Observaciones_o_incidencias = "Rara";
 objAlumno.Asignar = "Pepe Canalejas";
 agregarEmpleado();
};
function validarFormulario(e) {
    e.preventDefault();
    if(Nombre_de_la_empresaImput.value === '' || TelefonoImput.value === ''){
        alert('Todos los campos deben ser rellenados');
        return;
    }
    if(editando){
        editarEmpleado();
        editando = false;
    } else {
     objAlumno.id = Date.now();
     objAlumno.Nombre_de_la_empresa = Nombre_de_la_empresaImput.value;
     objAlumno.Telefono = TelefonoImput.value;
     objAlumno.Email = EmailImput.value;
     objAlumno.Responsable = ResponsableImput.value;
     objAlumno.Observaciones_o_incidencias = Observaciones_o_incidenciasImput.value;
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
 objAlumno.Nombre_de_la_empresa = '';
 objAlumno.Telefono = '';
 objAlumno.Email = '';
 objAlumno.Responsable = '';
 objAlumno.Observaciones_o_incidencias = '';
}
function mostrarEmpleado(){
    var counter="0";
    limpiarHTML();
    const divEmpleados = document.querySelector('.div-empleados');
    listaAlumnos.forEach( empleado => {
        counter++;
        const {id, Nombre_de_la_empresa, Telefono, Email, Responsable, Observaciones_o_incidencias} = empleado;
        const parrafo = document.createElement('p');
        parrafo.textContent = `${counter}  |  ${Nombre_de_la_empresa}  |  ${Telefono}  |  ${Email}  |  ${Responsable}  |  ${Observaciones_o_incidencias}`;
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
}
function cargarEmpleado(empleado){
    const {id, Nombre_de_la_empresa, Telefono, Email, Responsable, Observaciones_o_incidencias} = empleado;
    Nombre_de_la_empresaImput.value = Nombre_de_la_empresa;
    TelefonoImput.value = Telefono;
    EmailImput.value = Email;
    ResponsableImput.value = Responsable;
    Observaciones_o_incidenciasImput.value = Observaciones_o_incidencias;
 objAlumno.id = id;
    formulario.querySelector('button[type="submit"]').textContent = 'Actualizar';
    editando = true;
}
function editarEmpleado(){
 objAlumno.Nombre_de_la_empresa = Nombre_de_la_empresaImput.value;
 objAlumno.Telefono = TelefonoImput.value;
 objAlumno.Email = EmailImput.value;
 objAlumno.Responsable = ResponsableImput.value;
 objAlumno.Observaciones_o_incidencias = Observaciones_o_incidenciasImput.value;
    listaAlumnos.map( empleado => {
        if(empleado.id === objAlumno.id){
            empleado.id = objAlumno.id;
            empleado.Nombre_de_la_empresa = objAlumno.Nombre_de_la_empresa;
            empleado.Telefono = objAlumno.Telefono;
            empleado.Email = objAlumno.Email;
            empleado.Responsable = objAlumno.Responsable;
            empleado.Observaciones_o_incidencias = objAlumno.Observaciones_o_incidencias;
        }
    });
    limpiarHTML();
    mostrarEmpleado();
    formulario.reset();
    formulario.querySelector('button[type="submit"]').textContent = 'Agregar';
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