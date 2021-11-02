function getName(){
    a = document.getElementById("word");
    console.log(a.value);
    b = getNewWord();
    document.getElementById("word").innerHTML = b;
}

function getNewWord() {
    return "new word is returned";
}
