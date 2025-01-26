/**
 * Inicializa o Firebase e as ferramentas Firestore e Auth
 */

 const firebaseApp = firebase.initializeApp(firebaseConfig);
 const db = firebaseApp.firestore();
 const auth = firebaseApp.auth();

window.onload = () => {

    document.title = site.titulo

    //carrega o template HTMl em div#wrap
    _('#wrap').innerHTML = template();

    
    var today = new Date();
    var year = today.getFullYear();
    if (year > site.ano) {
        _('#footerYear').innerHTML = `${site.ano} ${year}`
    }
    else {
        _('#footerYear').innerHTML = site.ano;
    }

    //verifica o tamanho da tela do usuario 
    var larguraJanela = window.innerWidth

    if(larguraJanela < 425){
        _('#campoDois').innerHTML = `${site.pesquisa}`
    }
    else{
        _('#campoUm').innerHTML = `${site.pesquisa}`
    }
}
