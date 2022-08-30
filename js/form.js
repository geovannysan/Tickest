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
  const container = document.querySelectorAll('p');
  container.forEach(c=>{c.addEventListener('click', (e) => {
    const dato = e.path[1].classList.contains("container")

    
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
    //console.log(e.target)
    //console.log(e.target.getAttribute('class').split(" ")[0])
    //$("."+e.target.getAttribute('class').split(" ")[0]).toggle("d-none")
    if(e.target.getAttribute('class').split(" ")[0]=="efectivo"){
    e.path[2].children[1].classList.toggle("d-none");

    e.path[2].children[2].classList.toggle("d-none");
}
if(e.target.getAttribute('class').split(" ")[0]=="payphone"){
    e.path[2].children[1].classList.toggle("d-none");

    e.path[2].children[4].classList.toggle("d-none");

}
if(e.target.getAttribute('class').split(" ")[0]=="tarjeta"){
    e.path[2].children[1].classList.toggle("d-none");

    e.path[2].children[5].classList.toggle("d-none");

}
 })))
 const div = document.querySelectorAll('.back')

 div.forEach(e=>(e.addEventListener('click',(e)=>{
    e.path[2].children[0].classList.toggle("d-none");
    e.path[2].children[1].classList.add("d-none");
    e.path[2].children[2].classList.add("d-none");
    e.path[2].children[3].classList.add("d-none");
    e.path[2].children[4].classList.add("d-none");
    e.path[2].children[5].classList.add("d-none");
    e.path[2].children[6].classList.add("d-none");


 })))