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
        document.getElementById("password").remove();

        document.getElementById("btn_registrati").remove();
        
    }
    else
        document.getElementById('risultato').innerText="riprova";
}
async function controllaCredenziali_2() {

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (!username || !password)
        return alert("Scrivi lo username e password");

    const res = await fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: `username=${username}&password=${password}`
    });

    const json = await res.json();

    if (json.messaggio == 1){
        document.getElementById("risultato").innerText = "Accesso effettuato";
    }
    else {
        document.getElementById("risultato").innerText = "Accesso negato";
    }
}


document.getElementById('btn_registrati').addEventListener('click', controllaCredenziali);
document.getElementById('btn_registrati_2').addEventListener('click', controllaCredenziali_2);
