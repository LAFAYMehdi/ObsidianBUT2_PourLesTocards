
const express = require('express');
const notes = require('./notes');
const app = express();
const PORT = 3000;
app.get("/", (req,res)=>{
    res.send(`<h1>Bonjour</h1>
    <p>Méthode HTTP : GET</p>
    <p>Agent : ${req.get('User-Agent')}</p>
    `);
});
app.get("promise", (req,res)=>{
    notes.lireNotesPromise()
    .then(data => res.json(data))
    .catch(err => res.status(500).send("Erreur Interne"));
});
app.get("/callback", (req,res)=>{
    notes.lireNotesCallback((error, data) => {
        if(error){
            res.status(500).send("Erreur Interne");
        }
        else{res.json(data);}
    });
});
app.get ("/async", async (req,res)=>{
    try{
        const data = notes.lireNotesAsyncAwait();
        res.json(data);
    }catch(err){
        res.status(500).send("Erreur Interne");
    }
});

app.listen(PORT, ()=>{
    console.log(`Serveur écoute sur le port ${PORT}`);
});