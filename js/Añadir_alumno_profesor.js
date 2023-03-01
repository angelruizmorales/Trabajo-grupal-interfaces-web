let listaAlumnosProfesor =[];

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


 window.onload = function rellenoCrud() {
    // Leer los datos del local storage y asignarlos a la lista de alumnos
    const listaAlumnosProfesorJSON = localStorage.getItem("listaAlumnosProfesor");
    if (listaAlumnosProfesorJSON) {
      listaAlumnosProfesor = JSON.parse(listaAlumnosProfesorJSON);
    }
    // Comprueba si los datos ya se han cargado
    if (listaAlumnosProfesor.length === 0) {
      fetch("https://63fe79b7571200b7b7cb6cb7.mockapi.io/Alumno-Profesor")
        .then((res) => res.json())
        .then((datos) => {
          listaAlumnosProfesor = datos;
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
    listaAlumnosProfesor.push({... objAlumno});

    mostrarEmpleado();

    formulario.reset();

    limpiarObjeto();

}

function limpiarObjeto(){
 objAlumno.id = '';
 objAlumno.Nombre = '';
 objAlumno.Apellidos = '';
 objAlumno.Contrasena_de_acceso = '';
 objAlumno.DNI = '';
 objAlumno.Fecha_nacimiento = '';
 objAlumno.Email = '';
 objAlumno.Telefono_de_contacto = '';
 objAlumno.Empresa = '';
 objAlumno.Profesor = '';
 objAlumno.horas = '';
 objAlumno.Observaciones = '';


}

function mostrarEmpleado(){
    var counter="0";
    limpiarHTML();

    const divEmpleados = document.querySelector('.div-empleados');

    listaAlumnosProfesor.forEach( empleado => {
        counter++;
 objAlumno.horas
 const {id, Nombre, Apellidos, Contrasena_de_acceso, DNI, Fecha_nacimiento, Email, Telefono_de_contacto, Empresa, Profesor, horas, Observaciones} = empleado;

        const parrafo = document.createElement('p');
        parrafo.textContent = `${Nombre}  |  ${Apellidos}  |  ${Contrasena_de_acceso}  |  ${DNI}  |  ${Fecha_nacimiento}  |  ${Email}   | ${Telefono_de_contacto}  | ${Empresa}  | ${Profesor}   |   ${horas}   | ${Observaciones} `;
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
  const listaAlumnosProfesorJSON = JSON.stringify(listaAlumnosProfesor);
  localStorage.setItem("listaAlumnosProfesor", listaAlumnosProfesorJSON);
  if (counter == listaAlumnosProfesor.length) {
    const espaciadoHoras = document.querySelector(".div-horas");
    const linea = document.createElement("p");
    linea.textContent = "El numero total de horas es" + totalHoras;
    espaciadoHoras.removeChild(document.querySelector("p"));
    espaciadoHoras.appendChild(linea);
  }


}



function cargarEmpleado(empleado){
    const {id, Nombre, Apellidos, Contrasena_de_acceso, DNI, Fecha_nacimiento, Email, Telefono_de_contacto, Empresa, Profesor, horas, Observaciones} = empleado;

    NombreImput.value = Nombre;
    ApellidosImput.value = Apellidos;
    Contraseña_de_accesoImput.value = Contrasena_de_acceso;
    DNIImput.value = DNI;
    Fecha_nacimientoImput.value = Fecha_nacimiento;
    EmailImput.value = Email;
    Telefono_de_contactoImput.value = Telefono_de_contacto;
    EmpresaImput.value = Empresa;   
    ProfesorImput.value = Profesor;
    horasImput.value = horas;
    ObservacionesImput.value = Observaciones;

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
 objAlumno.Telefono_de_contacto = Telefono_de_contactoImput.value;
 objAlumno.Empresa = EmpresaImput.value;
 objAlumno.Profesor = ProfesorImput.value;
 objAlumno.horas = horasImput.value;
 objAlumno.Observaciones = ObservacionesImput.value;


    listaAlumnosProfesor.map( empleado => {
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
    listaAlumnosProfesor = listaAlumnosProfesor.filter(empleado => empleado.id !== id);
    limpiarHTML();
    mostrarEmpleado();
    
}

function limpiarHTML(){
    const divEmpleados = document.querySelector('.div-empleados');
    while(divEmpleados.firstChild){
        divEmpleados.removeChild(divEmpleados.firstChild);
    }

}