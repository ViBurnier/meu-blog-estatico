/***********************************************
 * Nome do Arquivo: funcoes.js
 * Descrição: Biblioteca de funções JavaScript de uso geral.
 * Autor: Vitor Burnier
 * Data de Criação: 22/01/2025
 * Última Modificação:22/01/2025
 * Versão: 1.0
 ***********************************************/


/**
 * Formata uma data no formato especificado.
 * @param {Date} data - A data a ser formatada.
 * @param {string} formato - O formato desejado ('ISO' ou 'BR').
 * @returns {string} A data formatada conforme o formato especificado.
 */
function formatarData(data, formato) {
    const ano = data.getFullYear();
    const mes = String(data.getMonth() + 1).padStart(2, '0');
    const dia = String(data.getDate()).padStart(2, '0');
    const horas = String(data.getHours()).padStart(2, '0');
    const minutos = String(data.getMinutes()).padStart(2, '0');
    const segundos = String(data.getSeconds()).padStart(2, '0');

    if (formato === 'ISO') {
        return `${ano}-${mes}-${dia} ${horas}:${minutos}:${segundos}`;
    } else if (formato === 'BR') {
        return `${dia}/${mes}/${ano} ${horas}:${minutos}`;
    } else {
        throw new Error('Formato inválido. Use "ISO" ou "BR".');
    }
}

/**
 * Obtém a data e hora atual no formato ISO.
 * @returns {string} A data e hora atual no formato ISO.
 */
function agoraISO() {
    const agora = new Date();
    return formatarData(agora, 'ISO');
}

/**
 * Converte uma data do formato ISO para o formato BR.
 * @param {string} dataISO - A data no formato ISO (YYYY-MM-DD HH:MM:SS).
 * @returns {string} A data no formato BR (DD/MM/YYYY HH:MM).
 */
function dataISOparaBR(dataISO) {
    const data = new Date(dataISO);
    return formatarData(data, 'BR');
}

/**
 * Converte uma data do formato JavaScript para o formato ISO.
 * @param {Date} dataJS - A data no formato JavaScript.
 * @returns {string} A data no formato ISO (YYYY-MM-DD HH:MM:SS).
 */
function dataJStoISO(dataJS) {
    const data = new Date(dataJS);
    return formatarData(data, 'ISO');
}

/**
 * Retorna o "Node" de um elemento ou a "NodeList" de uma coleção de elementos usando o seletor especificado.
 * 
 * @param {string} seletor O seletor CSS do(s) elemento(s) a ser(em) selecionado(s).
 * @returns {Node|NodeList} O "Node" do elemento se houver apenas um, ou a "NodeList" dos elementos correspondentes.
 * 
 * Exemplos de uso:
 *     Selecionar por ID: let el = _('#meuID'); // Retorna o elemento com o id especificado
 *     Selecionar por classe: let el = _('.minhaClasse'); // Retorna todos os elementos com a classe "minhaClasse"
 *     Selecionar por tag (ou seletores mais complexos): let el = _('div > p'); // Retorna todos os <p> dentro de <div>
 *     Selecionar elemento por tag: let el = _('i'); // Retorna todos os elementos <i>
 */
function _(seletor) {
    if (seletor.startsWith('#') || seletor.startsWith('.') || seletor.includes(' ')) {
        const resultado = document.querySelectorAll(seletor);
        return resultado.length === 1 ? resultado[0] : resultado;
    }
    return document.querySelectorAll(seletor);
}

/**
 * Login no firebase Authentication
 */
function fbSigIn(){
    firebase.auth().signInWithPopup(provider);
    /**
     * Logout do firebase
     */
}

function fbSignOut(){
    firebase.auth().signOut()

    
}
function template() {
    return ` <!--HEADER-->
        <header>

            <div>
                <a href="/"><img src="${site.logo}" alt="" srcset=""></a>               
                <div id="campoUm"></div>               
                <a href="login.html" id="userAcao" data-acao="login" title=""><img src="img/user.png" alt="faça login"  referrerpolicy="no-referrer" srcset=""></a>           
            </div>                
            <div id="campoDois"></div>
        </header>
        <!--HEADER-->
            <nav class="navbar navbar-expand-lg">

                <div class="container-fluid">
                        <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a href="/" title="inicio"><i class="fa-solid fa-house fa-fw"></i><span>home</span></a>
                            <a href="contatos.html" title="faça contato"><i class="fa-solid fa-comments fa-fw"></i><span>sac</span></a>
                            <a href="info.html" title="Sobre o site"><i class="fa-solid fa-circle-info fa-fw"></i><span>info</span></a>
                        </div>
                    </div>
                 </div>
            </nav>
        <main id="conteudo">
        </main>
        <footer>
            <a href="/" title="inicio"><i class="fa-solid fa-house fa-fw"></i></a>
            <div>
                ${site.licensa}
                <div><a href="privacidade.html">Políticas de Privacidade</a></div>
            </div>
            <a href="#wrap" title="Ir para o inicio desta pagina"><i class="fa-regular fa-circle-up fa-fw"></i></a>
        </footer>`
}