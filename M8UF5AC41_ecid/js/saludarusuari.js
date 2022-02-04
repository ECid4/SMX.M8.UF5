function enviarSalutacio() {
    var nom = document.querySelector("#nom").value;
    var cognom = document.querySelector("#cognom").value;
    document.getElementById("salutacio").innerHTML = "HOLA " + nom + " " + cognom + ", GRACIES PER OMPLIR EL FORMULARI";
}