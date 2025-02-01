/**
 * Inicializa o Firebase e as ferramentas Firestore e Auth
 */

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

window.onload = () => {

    document.title = site.titulo

    //carrega o template HTMl em div#wrap
    _('#wrap').innerHTML = template();

    // Observa as mudanças de status do usuário
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            _('#userAcao img').src = user.photoURL;//Mostra a foto do user no google

            if (site.verPerfil) {
                _('#userAcao img').alt = 'Ver seu perfil';// Troca o alt da imagem
                _('#userAcao').title = "Ver seu perfil"//troca title
                _('#userAcao').href = 'perfil.html'//troca link ao clicar
                _('#userAcao').setAttribute('data-acao', 'perfil')//troca o valor de data-acao
            }
            else {
                _('#userAcao img').alt = 'Faça logout';// Troca o alt da imagem
                _('#userAcao').title = "Faça logout"
                _('#userAcao').href = 'logout.html'
                _('#userAcao').setAttribute('data-acao', 'logout')
            }
        }
        else {
            _('#userAcao img').src = 'img/user.png';//Mostra a foto do user no google
            _('#userAcao').title = "Faça login"
            _('#userAcao').href = 'login.html'; // Troca o link ao clicar (inútil)
            _('#userAcao').setAttribute('data-acao', 'login'); // Troca o valor de `data-acao`
        }
    });


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

    if (larguraJanela < 425) {
        _('#campoDois').innerHTML = `${site.pesquisa}`
    }
    else {
        _('#campoUm').innerHTML = `${site.pesquisa}`
    }

    _('#userAcao').addEventListener('click', (evento) => {
        // Bloqueia a execução normal do evento
        evento.preventDefault();

        let acao = _('#userAcao').getAttribute('data-acao');
        console.log(acao);
        switch (acao) {
            case 'login':
                fbSigIn();
                break;
            case 'logout':
                fbSignOut()
                break;
            case 'perfil':
                location.href = 'perfil.html';
        }

    });
}
