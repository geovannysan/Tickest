
const valida = async (e) => {
  const num = document.getElementById(e).value


  if (!num) return

  try {

    const { data } = await axios.get("https://rec.netbot.ec/pdfqr/api/v1/cedula/" + num)
    const { message } = await data;
    const email = message['email'] ? message['email'] : '';
    const edad = message['fecha_nacimiento'] ? message['fecha_nacimiento'] : '';
    const telefono = message['telefono'] ? message['telefono'] : '';
    const nombres = message['name'] ? message['name'] : '';

    document.getElementById('correos').value = email
    document.getElementById('fechas').value = edad
    document.getElementById('telefonos').value = telefono
    document.getElementById('nombres_apelli').value = nombres
    

  } catch (Error) {
    Swal.fire(
      'Error',
      'Espere a que un colaborador se contacte con usted',
      'warning'
    )
    console.log(Error)

    return Error;

  }
}

function reportatarjeta(e) {
  //document.getElementById("report").reset();
  document.getElementById('nombres_apelli').value = ''
  document.getElementById('cedulas').value = ''
  document.getElementById('correos').value = ''
  document.getElementById('fechas').value = ''
  document.getElementById('bancos').value = ''
  document.getElementById('comprobantes').value = ''
  document.getElementById('formulario').value = ''
  document.getElementById('telefonos').value = ''

  $('#Modaltarjeta').modal('show', { backdrop: 'static', keyboard: false });

  document.getElementById('formulario').value = e;
  $('#titel').text(e);

}




const registro = async (info) => {





}

(function () {
  'use strict'

  var forms = document.querySelectorAll('.needs-validation')
  const buttonElement = document.getElementById('tc')
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      buttonElement.addEventListener('click', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()
const report = document.getElementById('tc')
var form = document.querySelectorAll('.needs-validation')
report.addEventListener('click', async function (event) {
  const datos = [document.getElementById('nombres_apelli').value,
  document.getElementById('cedulas').value,
  document.getElementById('correos').value,
  document.getElementById('fechas').value,
  document.getElementById('telefonos').value]
  event.preventDefault()

  if (!document.getElementById('nombres_apelli').value || !document.getElementById('cedulas').value || !document.getElementById('correos').value) return
  if (!document.getElementById('fechas') || !document.getElementById('formulario') || !document.getElementById('telefonos').value) return
  //variables de los datos
  let _datos = {
    u_nombre: document.getElementById('nombres_apelli').value,
    u_cedula: document.getElementById('cedulas').value,
    u_correo: document.getElementById('correos').value,
    u_fecha: document.getElementById('fechas').value,
    u_banco: document.getElementById('bancos').value,
    u_transaci: document.getElementById('comprobantes').value,
    u_form: document.getElementById('formulario').value,
    u_telefono: document.getElementById('telefonos').value
  }
  try {
    const { data, status }  = await axios.post('https://rec.netbot.ec/pdfqr/api/v1/registro',_datos)
    console.log(data,status)
    if (data.success){
      Swal.fire(
        'Su informacion a sido guardada',
        'Espere a que un colaborador se contacte con usted',
        'success'
      )
      $('#Modaltarjeta').modal('hide')
    }else{
          Swal.fire(
            'Erro',
            'hubo un error intente de nuevo',
            'warning'
      )
    }
    
  } catch (error) {
    Swal.fire(
      'Erro',
      'hubo un error intente de nuevo',
      'warning'
    )
    return error


  }



})
$('.cerrar').click(function () {
  $('#Modaltarjeta').modal('hide')
})

function soloLetras(e) {
  key = e.keyCode || e.which;
  tecla = String.fromCharCode(key).toLowerCase();
  letras = " áéíóúabcdefghijklmnñopqrstuvwxyz";
  especiales = [8, 37, 39, 46];

  tecla_especial = false
  for (var i in especiales) {
    if (key == especiales[i]) {
      tecla_especial = true;
      break;
    }
  }

  if (letras.indexOf(tecla) == -1 && !tecla_especial)

    return false;
}
function solonumeros(e) {
  key = e.keyCode || e.which;
  tecla = String.fromCharCode(key).toLowerCase();
  letras = " 0123456789";
  especiales = [8, 37, 39, 46];

  tecla_especial = false
  for (var i in especiales) {
    if (key == especiales[i]) {
      tecla_especial = true;
      break;
    }
  }

  if (letras.indexOf(tecla) == -1 && !tecla_especial)

    return false;
}
