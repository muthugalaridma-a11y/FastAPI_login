from fastapi import FastAPI,  Form
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles
import pandas as pd

app = FastAPI()

df=pd.read_excel("/workspaces/FastAPI_login/dati.xlsx")
app.mount("/static", StaticFiles(directory="static"),name="static")#per montare i dati dentro l'app
@app.get("/") #  Endpoint,punto in cui andiamo a chiamare il server web
def home():
    # Restituisce direttamente il file HTML
    return FileResponse('static/index.html')

@app.get("/login")
def controlla(username: str,password:str):
    print ("username",username,"password", password)
    if username == "admin" and password == "x":
        risposta={"messaggio":1}
    else:
        risposta ={"messaggio": 0}
    return (risposta)
    
@app.post("/login")
def ControllaCredenziali_2(username: str = Form(...), password: str = Form(...)):
    if username.lower() == "admin" and password == "xxx123##":
        return {"messaggio": 1}
    else:
        return {"messaggio": 0}

@app.post("/loginPandas")
def Controlla(username: str = Form(...), password: str = Form(...)):
    risultato = df[(df["username"] == username) & (df["password"] == password)]
    if not risultato.empty:
        return {"messaggio": 1}
    else:
        return {"messaggio": 0}