function getIdade(){
    const idade = document.querySelector('#dtNascimento').innerText + " 00:00:00.000";
    const dia = new Date().toLocaleDateString() + " 00:00:00.000";
    
    var diff = moment(dia,"DD/MM/YYYY HH:mm:ss").diff(moment(idade,"DD/MM/YYYY HH:mm:ss"));
    var dias = moment.duration(diff).asDays();

    // //var dias = moment.duration(diff).asDays();
    
    return document.querySelector('#idade').innerHTML = '<i class="fa-solid fa-clock"></i> ' + Math.round(dias/365, 2) + ' Anos';


}