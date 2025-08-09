let segundos = 5;

const contadorElement = document.getElementById("contagem");
const interval = setInterval(() => {
    segundos = segundos - 1;

    contadorElement.textContent = segundos;
    if(segundos <=0){
        clearInterval(interval);
        redirectNow();
    }
}, 1000);

function redirectNow(){
    window.location.href = "../../login.html"
}