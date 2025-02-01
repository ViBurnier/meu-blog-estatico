// Observador do Firebase Auth
firebase.auth().onAuthStateChanged((user) => {
    if (user) {

        console.log(user);

        document.title = `${site.titulo} - Perfil de ${user.displayName}`

        telefone = verificado = '';

        if (user.phoneNumber)
            telefone = `<li><strong>Telefone:</strong> ${user.phoneNumber}</li>`

        if(user.emailVerified)
            verificado = `Sim`
        let out = `

            <h2>Olá ${user.displayName}!</h2>
            <img class="fotoPerfil" src="${user.photoURL}" alt="Avatar de ${user.displayName}" referrerpolicy="no-referrer">
            <ul class="ulDados">
                <li><strong>E-mail:</strong> ${user.email}
                <li><strong>E-mail verificado:</strong> ${verificado}</li>
                <li><strong>ID:</strong> ${user.uid}
                <li><strong>Cadastro:</strong> ${dataISOparaBR(dataJStoISO(user.metadata.creationTime))}
            </ul>

            
            <button type="button" class="verPerfil" onclick="verPerfil()"> 
                <i class="fa-brands fa-google fa-fw"></i>Perfil no Google
            </btn>
            

            <button type="button" class="logout" onclick="fbSignOut()"> 
                <i class="fa-solid fa-right-from-bracket fa-fw"></i>Logout / Sair
            </btn>


        `;


        // Exibe os dados no HTML
        _('#conteudo').innerHTML = out;

        } else {
            // Se não está logado, mostra 404.html
            location.href = 'index.html';
        }

});

function verPerfil(){
    window.open('https://myaccount.google.com', '_blank')
}