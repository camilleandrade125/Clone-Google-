

const pesquisa = document.getElementById("pesquisa-google");

function aoclicar(evento){
    let valorInput = pesquisa.value
    window.location.href=`https://www.google.com/search?q=${valorInput}`
    
}