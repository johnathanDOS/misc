function highlightHandler(e) {
    var text = document.getSelection().toString();
    if(text !=="") {
        console.log(text);
        word = document.querySelector('#word-container').getAttribute("data-word");
        var sound = new Audio(words[word].sounds[text]);
        sound.loop = false;
        sound.play();
        console.log(document.getSelection());
    }
}

function buildWord(word) {
    console.log(words[word].id)
    for (var i = 0; i < words[word].chunks.length; i ++) {
        console.log(words[word].chunks[i])
        var newChunk = "<div class='word-chunk'>" + words[word].chunks[i] + "</div>";
        wordContainer = document.querySelector("#word-container");
        wordContainer.setAttribute('data-word', word)
        wordContainer.innerHTML += newChunk;
    }
}

document.onmouseup = highlightHandler;

// var strongs = document.getElementsByTagName("strong");
// var s = window.getSelection();

// if (s.rangeCount)