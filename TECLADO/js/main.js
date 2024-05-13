function tocasom(Seletoraudio) {
   const elemento = document.querySelector(Seletoraudio);
   if (elemento && elemento.localName === 'audio'){
       elemento.play();
   }
   else{
    console.log('Elemento nao encontrado')
   }
}
const listadetecla = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listadetecla.length; contador++) {
    const tecla = listadetecla[contador];
    const intrumentos = tecla.classList[1];
    const IdAudio = `#som_${intrumentos}`;
    //console.log(IdAudio);
    tecla.onclick = function () {
        tocasom(IdAudio)
    }
    tecla.onkeydown = function (evento) {
        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }
    }
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }

}
