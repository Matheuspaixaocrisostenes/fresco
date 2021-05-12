function enviar(){
    let name = document.getElementById('Cname')
    let email = document.getElementById('cEmail')
    let cel = document.getElementById('cTel')
    let msg = document.getElementById('cMen')
    if(name.value == '' || email.value == ''|| cel.value==0 || msg.value == ""){
        alert('[ERRO] Falta Dados')
    }else{
        alert('Mensagem enviada')
        name.value= "",email.value = "",cel.value="",msg.value = ""
    }
}

