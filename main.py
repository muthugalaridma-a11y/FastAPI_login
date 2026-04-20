from fastapi import fastAPI
from fastaspi.responses import FileResponse
from fastapi.staticfiles import staticfiles
app = FastAPI()
app.mount("static", StaticFiles(directory="static"),name="static")#per montare i dati dentro l'app
@app.get("/") #  Endpoint,punto in cui andiamo a chiamare il server web
def home():
    # Restituisce direttamente il file HTML
    return FileResponse('static/home.html')
    