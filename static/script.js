async function controllaCredenziali() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (!username || !password) 
        return alert("Scrivi uno username e password!");
    const res = await fetch(`/login?username=${username}&password=${password}`);
    const dati = await res.json();
    //document.getElementById('risultato').innerText = dati.messaggio;
    if (dati.messaggio==1){
        document.getElementById('risultato').innerText="benevenuto nel nostro sito";
        document.getElementById("risultato").style.fontSize = "50px";
        document.getElementById("risultato").style.marginTop = "0px";
        document.getElementById("username").remove();
        document.getElementById("password").remove();sjsjns'
        
        document.getElementById("btn_registrati").remove();
        
    }
    else
        document.getElementById('risultato').innerText="riprova";
}

document.getElementById('btn_registrati').addEventListener('click', controllaCredenziali);
