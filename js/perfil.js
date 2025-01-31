firebaseApp.auth().onAuthStateChanged((user) => {
    if(user){

    }
    else{
        location.href = "404.hmtl";
    }
})