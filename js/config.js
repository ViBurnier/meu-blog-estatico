/**
 * Configuração do Site
 */

/**
 * chaves de conecção com o Firebase
 * Troque a chave pela suas chaves
*/
const firebaseConfig = {
  apiKey: "AIzaSyBSJlEXEvhdnqTW14DnCQpv7hruR-2B7nQ",
  authDomain: "myblogsenac.firebaseapp.com",
  projectId: "myblogsenac",
  storageBucket: "myblogsenac.firebasestorage.app",
  messagingSenderId: "22614412187",
  appId: "1:22614412187:web:87fa84dd45d25665dc2f3e"
};
  
const site = {
    titulo: "MyBlog",

    logo: "img/logo.png",

    verPerfil: true,

    proprietario: 'ANDROMEDA',

    ano: 2022,

    licensa: 
    `<i class="fa-regular fa-copyright fa-rotate-180 fa-fw"></i>
    <span>Copyleft <span id="footerYear"></span> Burnier</span> 
    `,

    pesquisa: ` <form action="https://www.google.com/search" method="get" id="formSearch">
                    <input type="search" name="q" id="inputSearch" placeholder="Search">
                    <button type="submit" id="submitSearch"><i class="fa-solid fa-magnifying-glass fa-fw"></i></button>
                </form>` ,
}