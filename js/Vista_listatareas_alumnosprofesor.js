let listaAlumnosActividades =[];
const objAlumno = {
    id: '',
    Nombre: '',
    Apellidos: '',
    Contraseña_de_acceso: '',
    DNI: '',
    Fecha_nacimiento: '',
    Email: '',
    Telefono_de_contacto: '',
    Empresa: '',
    Profesor: '',
    horas: '',
    Observaciones: '',
}
let editando = false;
const formulario = document.querySelector('#formulario');
const NombreImput = document.querySelector('#Nombre');
const ApellidosImput = document.querySelector('#Apellidos');
const Contraseña_de_accesoImput = document.querySelector('#Contraseña_de_acceso');
const DNIImput = document.querySelector('#DNI');
const Fecha_nacimientoImput = document.querySelector('#Fecha_nacimiento');
const EmailImput = document.querySelector('#Email');
const Telefono_de_contactoImput = document.querySelector("#Telefono_de_contacto");
const EmpresaImput = document.querySelector("#Empresa");
const ProfesorImput = document.querySelector("#Profesor");
const horasImput = document.querySelector("#horas");
const ObservacionesImput = document.querySelector("#Observaciones");
const btnguardar = document.querySelector('#btnguardar');
formulario.addEventListener('submit',validarFormulario);
window.onload = function rellenoCrud(){
    // Leer los datos del local storage y asignarlos a la lista de alumnos
  const listaAlumnosActividadesJSON = localStorage.getItem("listaAlumnosActividades");
  if (listaAlumnosActividadesJSON) {
    listaAlumnosActividades = JSON.parse(listaAlumnosActividadesJSON);
  }

  // Comprueba si los datos ya se han cargado
  if (listaAlumnosActividades.length === 0) {
    fetch("https://63e980c4811db3d7effcba60.mockapi.io/Pablotest/Profesor-Alumno-Actividad")
      .then((res) => res.json())
      .then((datos) => {
        listaAlumnosActividades = datos;
        mostrarEmpleado();
      });
  } else {
    mostrarEmpleado();
  }
};
function validarFormulario(e) {
    e.preventDefault();
    if(NombreImput.value === '' || ApellidosImput.value === ''){
        alert('Todos los campos deben ser rellenados');
        return;
    }
    if(editando){
        editarEmpleado();
        editando = false;
    } else {
     objAlumno.id = Date.now();
     objAlumno.Nombre = NombreImput.value;
     objAlumno.Apellidos = ApellidosImput.value;
     objAlumno.Contraseña_de_acceso = Contraseña_de_accesoImput.value;
     objAlumno.DNI = DNIImput.value;
     objAlumno.Fecha_nacimiento = Fecha_nacimientoImput.value;
     objAlumno.Email = EmailImput.value;
     objAlumno.Telefono_de_contacto = Telefono_de_contactoImput.value;
     objAlumno.Empresa = EmpresaImput.value;
     objAlumno.Profesor = Profesor.value;
     objAlumno.horas = horas.value;
     objAlumno.Observaciones = Observaciones.value;
        agregarEmpleado();
    }
}
function agregarEmpleado(){
    listaAlumnosActividades.push({... objAlumno});
    mostrarEmpleado();
    formulario.reset();
    limpiarObjeto();
}
function limpiarObjeto(){
 objAlumno.id = '';
 objAlumno.Nombre = '';
 objAlumno.Apellidos = '';
 objAlumno.Contraseña_de_acceso = '';
 objAlumno.DNI = '';
 objAlumno.Fecha_nacimiento = '';
 objAlumno.Email = '';
 objAlumno.Telefono_de_contacto = '';
 objAlumno.Empresa = '';
 objAlumno.Profesor = '';
 objAlumno.horas = '';
 objAlumno.Observaciones = '';
}
var pagina="/Vista_profesor/Vista_Alumnosyactividades2.html"
    function redireccionar() {
        location.href=pagina
    }
function mostrarEmpleado(){
    var counter="0";
    limpiarHTML();
    const divEmpleados = document.querySelector('.div-empleados');
    listaAlumnosActividades.forEach( empleado => {
        counter++;
 objAlumno.horas
 const {id, Nombre, Apellidos, Contrasena_de_acceso, DNI, Fecha_nacimiento, Email, Telefono_de_contacto, Empresa, Profesor, horas, Observaciones} = empleado;
        const parrafo = document.createElement('p');
        parrafo.textContent = `${Nombre}  |  ${Apellidos}  |  ${Contrasena_de_acceso}  |  ${DNI}  |  ${Fecha_nacimiento}  |  ${Email}   | ${Telefono_de_contacto}  | ${Empresa}  | ${Profesor}   |   ${horas}   | ${Observaciones} `;
        parrafo.dataset.id = id;
        const editarBoton = document.createElement('button');
        editarBoton.onclick = () => cargarEmpleado(empleado);
        editarBoton.onclick = () => redireccionar();
        editarBoton.textContent = 'Detalles';
        editarBoton.classList.add('btn', 'btn-Detalles');
        parrafo.append(editarBoton);
        const hr = document.createElement('hr');
        divEmpleados.appendChild(parrafo);
        divEmpleados.appendChild(hr);
    });
    // Guardar los datos en el local storage
  const listaAlumnosActividadesJSON = JSON.stringify(listaAlumnosActividades);
  localStorage.setItem("listaAlumnosActividades", listaAlumnosActividadesJSON);
}
function cargarEmpleado(empleado){
    const {id, Nombre, Apellidos, Contrasena_de_acceso, DNI, Fecha_nacimiento, Email, Telefono_de_contacto, Empresa, Profesor, horas, Observaciones} = empleado;
    NombreImput.value = Nombre;
    ApellidosImput.value = Apellidos;
    Contraseña_de_accesoImput.value = Contrasena_de_acceso;
    DNIImput.value = DNI;
    Fecha_nacimientoImput.value = Fecha_nacimiento;
    Email.value = Email;
    Telefono_de_contacto.value = Telefono_de_contacto;
    Empresa.value = Empresa;   
    Profesor.value = Profesor;
    horas.value = horas;
    Observaciones.value = Observaciones;
 objAlumno.id = id;
    formulario.querySelector('button[type="submit"]').textContent = 'Actualizar';
    editando = true;
}
function editarEmpleado(){
 objAlumno.Nombre = NombreImput.value;
 objAlumno.Apellidos = ApellidosImput.value;
 objAlumno.Contrasena_de_acceso = Contraseña_de_accesoImput.value;
 objAlumno.DNI = DNIImput.value;
 objAlumno.Fecha_nacimiento = Fecha_nacimientoImput.value;
 objAlumno.Email = EmailImput.value;
 objAlumno.Telefono_de_contacto = Telefono_de_contacto.value;
 objAlumno.Empresa = Empresa.value;
 objAlumno.Profesor = Profesor.value;
 objAlumno.horas = horas.value;
 objAlumno.Observaciones = Observaciones.value;
 listaAlumnosActividades.map( empleado => {
        if(empleado.id === objAlumno.id){
            empleado.id = objAlumno.id;
            empleado.Nombre = objAlumno.Nombre;
            empleado.Apellidos = objAlumno.Apellidos;
            empleado.Contrasena_de_acceso = objAlumno.Contrasena_de_acceso;
            empleado.DNI = objAlumno.DNI;
            empleado.Fecha_nacimiento = objAlumno.Fecha_nacimiento;
            empleado.Email = objAlumno.Email;
            empleado.Telefono_de_contacto = objAlumno.Telefono_de_contacto;
            empleado.Empresa = objAlumno.Empresa;
            empleado.Profesor = objAlumno.Profesor;
            empleado.horas = objAlumno.horas
            empleado.Observaciones = objAlumno.Observaciones
        }
    });
    limpiarHTML();
    mostrarEmpleado();
    formulario.reset();
    formulario.querySelector('button[type="submit"]').textContent = 'Agregar';
    editando = false;
}
function eliminarEmpleado(id){
    listaAlumnosActividades = listaAlumnosActividades.filter(empleado => empleado.id !== id);
    limpiarHTML();
    mostrarEmpleado();
}
function limpiarHTML(){
    const divEmpleados = document.querySelector('.div-empleados');
    while(divEmpleados.firstChild){
        divEmpleados.removeChild(divEmpleados.firstChild);
    }
}