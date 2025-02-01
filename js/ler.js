/**
 * Obter o valor do parâmetro "artigo" (ID do artigo) da URL.
 **/
const urlParams = new URLSearchParams(window.location.search);
const artigosId = urlParams.get('artigo');

db.collection("artigos")
.doc(artigosId)
.onSnapshot(async (doc) => {
    if(doc.exists){
       let art = doc.data()
       document.title = `${site.titulo} - ${art.titulo}`

       let out = `       
       <h2>${artigosId.titulo}</h2>
       _("#conteudo").innerHTML = out
       <small>${artigosId.data}</small>
       `
    }
    else{
        location.href = "404.html"
    }
});
