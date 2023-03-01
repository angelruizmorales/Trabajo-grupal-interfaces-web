let listaProfesorEmpresa =[];
const objAlumno = {
    id: '',
    Nombre_de_la_empresa: '',
    Telefono: '',
    Email: '',
    Responsable: '',
    Observaciones_o_incidencias: '',
    Asignar: ''
}
let editando = false;
const formulario = document.querySelector('#formulario');
const Nombre_de_la_empresaImput = document.querySelector('#Nombre_de_la_empresa');
const TelefonoImput = document.querySelector('#Telefono');
const EmailImput = document.querySelector('#Email');
const ResponsableImput = document.querySelector('#Responsable');
const Observaciones_o_incidenciasImput = document.querySelector('#Observaciones_o_incidencias');
const AsignarAlumnoImput = document.querySelector('#Asignar');
const btnguardar = document.querySelector('#btnguardar');
formulario.addEventListener('submit',validarFormulario);
window.onload = function rellenoCrud(){
   // Leer los datos del local storage y asignarlos a la lista de alumnos
  const listaProfesorAlumnosJSON = localStorage.getItem("listaProfesorEmpresa");
  if (listaProfesorAlumnosJSON) {
    listaAlistaProfesorEmpresalumnos = JSON.parse(listaProfesorAlumnosJSON);
  }

  // Comprueba si los datos ya se han cargado
  if (listaProfesorEmpresa.length === 0) {
    fetch("https://63e980c4811db3d7effcba60.mockapi.io/Pablotest/Profesor-Empresa")
      .then((res) => res.json())
      .then((datos) => {
        listaProfesorEmpresa = datos;
        mostrarEmpleado();
      });
  } else {
    mostrarEmpleado();
  }
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
     objAlumno.Asignar = AsignarAlumnoImput.value;
        agregarEmpleado();
    }
}
function agregarEmpleado(){
    listaProfesorEmpresa.push({... objAlumno});
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
 objAlumno.Asignar = '';
}
function mostrarEmpleado(){
    var counter="0";
    limpiarHTML();
    const divEmpleados = document.querySelector('.div-empleados');
    listaProfesorEmpresa.forEach( empleado => {
        counter++;
        const {id, Nombre_de_la_empresa, Telefono, Email, Responsable, Observaciones_o_incidencias, Asignar} = empleado;
        const parrafo = document.createElement('p');
        parrafo.textContent = `${counter}  |  ${Nombre_de_la_empresa}  |  ${Telefono}  |  ${Email}  |  ${Responsable}  |  ${Observaciones_o_incidencias}  |  ${Asignar}`;
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
  const listaProfesorAlumnosJSON = JSON.stringify(listaAlumnos);
  localStorage.setItem("listaProfesorEmpresa", listaProfesorAlumnosJSON);
}
function cargarEmpleado(empleado){
    const {id, Nombre_de_la_empresa, Telefono, Email, Responsable, Observaciones_o_incidencias, Asignar} = empleado;
    Nombre_de_la_empresaImput.value = Nombre_de_la_empresa;
    TelefonoImput.value = Telefono;
    EmailImput.value = Email;
    ResponsableImput.value = Responsable;
    Observaciones_o_incidenciasImput.value = Observaciones_o_incidencias;
    AsignarAlumnoImput.value = Asignar;
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
 objAlumno.Asignar = AsignarAlumnoImput.value;
 listaProfesorEmpresa.map( empleado => {
        if(empleado.id === objAlumno.id){
            empleado.id = objAlumno.id;
            empleado.Nombre_de_la_empresa = objAlumno.Nombre_de_la_empresa;
            empleado.Telefono = objAlumno.Telefono;
            empleado.Email = objAlumno.Email;
            empleado.Responsable = objAlumno.Responsable;
            empleado.Observaciones_o_incidencias = objAlumno.Observaciones_o_incidencias;
            empleado.Asignar = objAlumno.Asignar;
        }
    });
    limpiarHTML();
    mostrarEmpleado();
    formulario.reset();
    formulario.querySelector('button[type="submit"]').textContent = 'Agregar';
    editando = false;
}
function eliminarEmpleado(id){
    listaProfesorEmpresa = listaProfesorEmpresa.filter(empleado => empleado.id !== id);
    limpiarHTML();
    mostrarEmpleado();
}
function limpiarHTML(){
    const divEmpleados = document.querySelector('.div-empleados');
    while(divEmpleados.firstChild){
        divEmpleados.removeChild(divEmpleados.firstChild);
    }
}