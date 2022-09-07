const valida = async (e) => {
  const num = document.getElementById(e).value
  if (!num) return
  $('#spinner').find('span').removeClass('d-none')
  $("#spinner").attr("disabled", true);
  $('#search').addClass('d-none')
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
    $('#spinner').find('span').addClass('d-none')
    $('#search').removeClass('d-none')
    $("#spinner").attr("disabled", false);
    if (!nombres) {
      Swal.fire('', 'Cédula no registrada', 'warning')
      $('#spinner').find('span').addClass('d-none')
      $('#search').removeClass('d-none')
      $("#spinner").attr("disabled", false);
    }
  } catch (Error) {
    $('#spinner').find('span').addClass('d-none')
    $('#search').removeClass('d-none')
    $("#spinner").attr("disabled", false);
    Swal.fire(
      'Hubo un error',
      'Cédula inválida',
      'warning'
    )
    return Error;
  }
}
function reportatarjeta(e) {
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
(function () {
  'use strict'
  var forms = document.querySelectorAll('#tarjet')
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
  event.preventDefault()
  if (!document.getElementById('nombres_apelli').value || !document.getElementById('cedulas').value || !document.getElementById('correos').value) return
  if (!document.getElementById('fechas') || !document.getElementById('formulario') || !document.getElementById('telefonos').value) return
  let _datos = {
    "u_nombre": document.getElementById('nombres_apelli').value,
    "u_cedula": document.getElementById('cedulas').value,
    "u_correo": document.getElementById('correos').value,
    "u_fecha": document.getElementById('fechas').value,
    "u_banco": document.getElementById('bancos').value,
    "u_transaci": document.getElementById('comprobantes').value,
    "u_form": document.getElementById('formulario').value,
    "u_telefono": document.getElementById('telefonos').value
  }
  try {
    const { data, status } = await axios.post('https://rec.netbot.ec/pdfqr/api/v1/registro', _datos)
    if (data.success) {
      Swal.fire(
        'Su informacion a sido guardada',
        'Espere a que un colaborador se contacte con usted',
        'success'
      )
      $('#Modaltarjeta').modal('hide')
    } else {
      Swal.fire(
        'Erro',
        'hubo un error intente de nuevo' + data.message,
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
var data;
var evento;
var totaldetalle = 0;
function cronometro(e, b) {
  totaldetalle = 0;
  $('.detalles-resumen>tbody').empty()
  $('#evento').text(e)
  evento = e;
  for (i = 1; i < 5; i++) {
    var filas2 = "<tr><td class='localidad'style='font-size: 0.8em;'>VIP-" + b + "</td>"
    filas2 = filas2 + "<td class='fila'style='font-size: 0.8em;'>f" + i + "</td>"
    filas2 = filas2 + "<td class='asiento'style='font-size: 0.8em;'>66</td>"
    filas2 = filas2 + "<td class='total'style='font-size: 0.8em;'>$140</td>"
    filas2 = filas2 + "<td ><button class='btn btn-primary badge text-bg-primary borrar'>ELIMINAR</button></td></tr>"
    $('.detalles-resumen>tbody').append(filas2)
  }
  document.querySelectorAll('.detalles-resumen tbody tr').forEach(function (e) {
    var valor = e.querySelector('.total').innerText.replace("$", "")
    totaldetalle += parseFloat(valor)
    console.log(totaldetalle)
  });
  $('.total-detalle').text('$' + totaldetalle)
  display = document.querySelector('#cronometro')
  var tiempo = 60 * 10
  var timer = tiempo, minutos = 0, segundos = 0;


  data = setInterval(function () {
    minutos = parseInt(timer / 60, 10);
    segundos = parseInt(timer % 60, 10);

    minutos = minutos < 10 ? "0" + minutos : minutos;
    segundos = segundos < 10 ? "0" + segundos : segundos;

    console.log(timer)
    if (timer === 0) {

      clearInterval(data);
      display.textContent = "00:00";
      Swal.fire('ggg', '', 'success')
    }
    else {
      display.textContent = minutos + ":" + segundos;

      if (--timer < 0) {
        timer = tiempo;
      }  //clearInterval(data);Swal.fire('SU TIEMPO SE TERMINO') 
    }
  }, 1000);


}
function stoptimer() {
  $('#carritocoompra').modal('hide');
  clearInterval(data);
}
