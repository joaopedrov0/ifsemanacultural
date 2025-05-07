function share(){
    if (navigator.share !== undefined){
        navigator.share({
            title: "",
            text: "",
            url: ""
        })
        .then(() => console.log("Compartilhado com sucesso!"))
        .catch(err => console.error(err))
    }
}

if (!navigator.share !== undefined){
    const modalShareBtn = document.querySelector(".modal .share-btn")
    modalShareBtn.remove()
}