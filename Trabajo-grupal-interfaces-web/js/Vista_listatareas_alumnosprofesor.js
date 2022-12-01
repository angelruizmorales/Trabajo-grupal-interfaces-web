let listaAlumnos =[];
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
    objAlumno.id = "1";
    objAlumno.Nombre = "Pepe";
    objAlumno.Apellidos = "Pérez";
    objAlumno.Contraseña_de_acceso = "Alumno1";
    objAlumno.DNI = "89846745N";
    objAlumno.Fecha_nacimiento = "2022-06-01";
    objAlumno.Email = "pepe@gmail.com";
    objAlumno.Telefono_de_contacto = "809987890";
    objAlumno.Empresa = "Cesur";
    objAlumno.Profesor = "Manolo Rodriguez";
    objAlumno.horas = "200";
    objAlumno.Observaciones = "Trabajador";
 agregarEmpleado();
 objAlumno.id = "2";
 objAlumno.Nombre = "Pepe";
    objAlumno.Apellidos = "Pérez";
    objAlumno.Contraseña_de_acceso = "Alumno1";
    objAlumno.DNI = "89846745N";
    objAlumno.Fecha_nacimiento = "2022-06-01";
    objAlumno.Email = "pepe@gmail.com";
    objAlumno.Telefono_de_contacto = "809987890";
    objAlumno.Empresa = "Cesur";
    objAlumno.Profesor = "Manolo Rodriguez";
    objAlumno.horas = "200";
    objAlumno.Observaciones = "Trabajador";
 agregarEmpleado();
    objAlumno.id = "3";
    objAlumno.Nombre = "Pepe";
    objAlumno.Apellidos = "Pérez";
    objAlumno.Contraseña_de_acceso = "Alumno1";
    objAlumno.DNI = "89846745N";
    objAlumno.Fecha_nacimiento = "2022-06-01";
    objAlumno.Email = "pepe@gmail.com";
    objAlumno.Telefono_de_contacto = "809987890";
    objAlumno.Empresa = "Cesur";
    objAlumno.Profesor = "Manolo Rodriguez";
    objAlumno.horas = "200";
    objAlumno.Observaciones = "Trabajador";
 agregarEmpleado();
 objAlumno.id = "4";
 objAlumno.Nombre = "Manolo";
    objAlumno.Apellidos = "Pérez";
    objAlumno.Contraseña_de_acceso = "Alumno1";
    objAlumno.DNI = "89846745N";
    objAlumno.Fecha_nacimiento = "2022-06-01";
    objAlumno.Email = "pepe@gmail.com";
    objAlumno.Telefono_de_contacto = "987987890";
    objAlumno.Empresa = "Baguetes";
    objAlumno.Profesor = "Manolo Rodriguez";
    objAlumno.horas = "400";
    objAlumno.Observaciones = "Muy buenas baguetes";
 agregarEmpleado();
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
    listaAlumnos.push({... objAlumno});
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
    listaAlumnos.forEach( empleado => {
        counter++;
 objAlumno.horas
 const {id, Nombre, Apellidos, Contraseña_de_acceso, DNI, Fecha_nacimiento, Email, Telefono_de_contacto, Empresa, Profesor, horas, Observaciones} = empleado;
        const parrafo = document.createElement('p');
        parrafo.textContent = `${Nombre}  |  ${Apellidos}  |  ${Contraseña_de_acceso}  |  ${DNI}  |  ${Fecha_nacimiento}  |  ${Email}   | ${Telefono_de_contacto}  | ${Empresa}  | ${Profesor}   |   ${horas}   | ${Observaciones} `;
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
}
function cargarEmpleado(empleado){
    const {id, Nombre, Apellidos, Contraseña_de_acceso, DNI, Fecha_nacimiento, Email, Telefono_de_contacto, Empresa, Profesor, horas, Observaciones} = empleado;
    NombreImput.value = Nombre;
    ApellidosImput.value = Apellidos;
    Contraseña_de_accesoImput.value = Contraseña_de_acceso;
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
 objAlumno.Contraseña_de_acceso = Contraseña_de_accesoImput.value;
 objAlumno.DNI = DNIImput.value;
 objAlumno.Fecha_nacimiento = Fecha_nacimientoImput.value;
 objAlumno.Email = EmailImput.value;
 objAlumno.Telefono_de_contacto = Telefono_de_contacto.value;
 objAlumno.Empresa = Empresa.value;
 objAlumno.Profesor = Profesor.value;
 objAlumno.horas = horas.value;
 objAlumno.Observaciones = Observaciones.value;
    listaAlumnos.map( empleado => {
        if(empleado.id === objAlumno.id){
            empleado.id = objAlumno.id;
            empleado.Nombre = objAlumno.Nombre;
            empleado.Apellidos = objAlumno.Apellidos;
            empleado.Contraseña_de_acceso = objAlumno.Contraseña_de_acceso;
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