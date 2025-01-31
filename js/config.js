/**
 * Configuração do Site
 */

const site = {
  /**
   * Nome do site usado na tag <title>...</title> e nas interações dinâmicas
   **/
    titulo: "MyBlog",

    /**
   * Logotipo do site, usado na tag <header>...</title>
   */
    logo: "img/logo.png",

    /**
   * Controla a ação ao clicar no link do usuário logado no menu principal
   * Se `true`, exibe o perfil do usuário → perfil.html
   * Se `false`, faz logout direto ← Útil durante o desenvolvimento
   **/
    verPerfil: true,

    proprietario: 'ANDROMEDA',

    /**
   * Ano de lançamento do site.
   * Usado na licensa do site no rodapé.
   **/
    ano: 2025,

    /**
   * Licensa do site usada no rodapé.
   * `span#footerAno` receberá o ano conforme `site.ano` acima.
   **/
    licensa: 
    `<i class="fa-regular fa-copyright fa-rotate-180 fa-fw"></i>
    <span>Copyleft <span id="footerYear"></span> Burnier</span> 
    `,

    pesquisa: ` <form action="https://www.google.com/search" method="get" id="formSearch">
                    <input type="search" name="q" id="inputSearch" placeholder="Search">
                    <button type="submit" id="submitSearch"><i class="fa-solid fa-magnifying-glass fa-fw"></i></button>
                </form>` ,
}