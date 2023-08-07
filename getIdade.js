function getIdade(){
    var idade = document.getElementById("dtNascimento").value;
    var dia = new Date();
    alert(idade - dia);
    return idade - dia
}