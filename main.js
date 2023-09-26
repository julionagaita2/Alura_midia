function tocar(i) {
    const audioElements = document.querySelectorAll('audio');
    if (i >= 0 && i < audioElements.length) {
        audioElements[i].play();
    }
}