(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()
  
  const container = document.querySelectorAll('p.evento');
  container.forEach(c=>{c.addEventListener('click', (e) => {
    //const dato = e.path[1].classList.contains("container")

    
    if(!e.target.localName =="p") {
        e.path[2].children[3].classList
        
        return

    };
    if(e.path[2].children[1].classList.contains("container")){
       
       e.path[2].children[0].classList.toggle("d-none");
       e.path[2].children[1].classList.toggle("d-none")
       e.path[2].children[6].classList.toggle("d-none");

    }else{
        e.path[2].classList.toggle("d-none");
       e.path[2].children[1].classList.toggle("d-none")
       e.path[2].children[6].classList.toggle("d-none");
    }
 })});


 const link = document.querySelectorAll('a')
 link.forEach(c=>(c.addEventListener('click',(e)=>{
  
    if(e.target.getAttribute('class').split(" ")[0]=="efectivo"){
    e.path[2].children[1].classList.toggle("d-none");

    e.path[2].children[2].classList.toggle("d-none");
    e.path[2].children[7].classList.add("d-none");
 // e.path[2].children[7].classList.toggle("d-none");
}
if(e.target.getAttribute('class').split(" ")[0]=="payphone"){
   // e.path[2].children[1].classList.toggle("d-none");

   // e.path[2].children[4].classList.toggle("d-none");
   // e.path[2].children[6].classList.add("d-none");
  //e.path[2].children[7].classList.toggle("d-none");

}
if(e.target.getAttribute('class').split(" ")[0]=="tarjeta"){
  e.path[2].children[1].classList.toggle("d-none");

   e.path[2].children[5].classList.toggle("d-none");
   e.path[2].children[6].classList.add("d-none");
 e.path[2].children[7].classList.toggle("d-none");

}
 })))
 const div = document.querySelectorAll('.back')
 const cancelar =document.querySelectorAll('.cancelar')

 div.forEach(e=>(e.addEventListener('click',(e)=>{
    e.path[2].children[0].classList.toggle("d-none");

    e.path[2].children[1].classList.add("d-none");
    e.path[2].children[2].classList.add("d-none");
    e.path[2].children[3].classList.add("d-none");
    e.path[2].children[4].classList.add("d-none");
    e.path[2].children[5].classList.add("d-none");
    e.path[2].children[6].classList.add("d-none");
    e.path[2].children[7].classList.add("d-none");
 })))
 cancelar.forEach(e=>(e.addEventListener('click',(e)=>{
  e.path[2].children[1].classList.toggle("d-none");
  e.path[2].children[0].classList.add("d-none");
  e.path[2].children[2].classList.add("d-none");
  e.path[2].children[3].classList.add("d-none");
  e.path[2].children[4].classList.add("d-none");
  e.path[2].children[5].classList.add("d-none");
  e.path[2].children[6].classList.remove("d-none");
  e.path[2].children[7].classList.add("d-none");


})))
const  validacedula = async (e)  =>{
  const numero = document.getElementById(e).value;
  if (!numero) return
  try{
    const cedula = await  fetch("https://turnos.manta.gob.ec/consultacedula/"+numero+"",
  {'headers': {'Access-Control-Allow-Origin': '*',}}).then(response => response.json());   
    
      const email = cedula.message['email']? cedula.message['email'] : '';
      const edad = cedula.message['fecha_nacimiento'] ? cedula.message['fecha_nacimiento']: '';
      const telefono =cedula.message['telefono'] ? cedula.message['telefono']: '';
      const nombres = cedula.message['name']? cedula.message['name']:'';   
     document.getElementById('email').value= email
      document.getElementById('fecha').value=edad
      document.getElementById('telefono').value=telefono
      document.getElementById('nombre').value=nombres         
   }catch (Error){
     alert('Hubo un error en su Cédula')
     return Error;
   
   }
}
//validacedula()
/*const  validacedula = async (e)  =>{
  const cedula = await  fetch('https://turnos.manta.gob.ec/consultacedula/1314780774',
  {'headers': {'Access-Control-Allow-Origin': '*',}}).then(response => response.json());
  
}*/