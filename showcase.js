
var curr = 0;

const data = [
    "assets/pride/rileyleah.PNG",
    "assets/pride/asterashe.PNG",
    "assets/pride/fig.PNG",
    "assets/pride/tess.PNG",
    "assets/pride/taikarhea.PNG",
    "assets/pride/briar.PNG",
    "assets/pride/fabiandavid.PNG",
    "assets/pride/cassclaire.PNG"
]

const insertHTML = (a, b, c) => {
    document.querySelector('#showcase').innerHTML = `
    <i class="fas fa-arrow-circle-left" onclick=moveBack() ></i>
    <img src=${data[a]}></img>
    <img src=${data[b]}></img>
    <img src=${data[c]}></img>
    <i class="fas fa-arrow-circle-right" onclick=moveForward()></i>
    `;
}

const loadImages = () => {
    if (curr < (data.length - 2)) {
        insertHTML(curr, curr + 1, curr + 2);
    } else if (curr == data.length - 2) {
        insertHTML(curr, curr + 1, 0);
    } else {
        insertHTML(curr, 0, 1);
    }
}

moveForward = () => {
    if (curr == data.length - 1) {
        curr = 0;
        loadImages();
    } else {
        curr = curr + 1;
        loadImages();
    }
}

moveBack = () => {
    if (curr == 0) {
        curr = data.length - 1;
        loadImages();
    } else {
        curr = curr - 1;
        loadImages();
    }
}

loadImages();
