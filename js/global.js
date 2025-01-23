window.onload = () => {

    document.title = site.titulo

    //carrega o template HTMl em div#wrap
    _('#wrap').innerHTML = template();
}