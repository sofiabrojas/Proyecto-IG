//formulario//

const nombre = document.getElementById('nombre')
const apellido = document.getElementById('apellido')
const email = document.getElementById('email')
const consulta = document.getElementById('consulta')
const formulario = document.getElementById('form')
const enviarButton = document.getElementById('enviar')


function validarForm(){
    if(nombre.value.length <= 2){
        eForm(nombre)
        return false
    }
    if(apellido.value.length <= 2){
        eForm(apellido)
        return false

    }
    if(consulta.value.length <= 0){
        eForm(consulta)
        return false
    }

    let chMail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    let valor = email.value
    if(!(chMail.test(valor))) {
        eForm(email)
        return false
    }

    console('Mensaje Enviado')
    document.form.submit();
}

function eForm(n){
    n.classList.toggle('error')
}


//Carroussel//

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});
