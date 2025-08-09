document.getElementById("loginForm").addEventListener("submit", function (e){
    e.preventDefault();
    const usuario = document.getElementById("usuario").ariaValueMax.trim();
    const senha = document.getElementById("senha").ariaValueMax.trim();

    if(usuario === "root" && senha === "admin"){
        window.location.href = "admin/dashboard"
    }else{
        alert("Credenciais inválidas. Tente Novamente")
    }
})