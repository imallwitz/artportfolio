
// maybe posts from recent dates or priority numbers fill into home ? or with certain ids? unsure

var artdata = [];

const showFeatured = (imagedata, campaign) => {
    document.getElementById(campaign).querySelector('.featured').innerHTML = `
            <img class="featuredimage"
                src='${imagedata.path}'></img>
            <h3 class="title">${imagedata.name}</h3>
            <h4 class="description">${imagedata.description}</h4>`;
}

const setFeatured = (ev) => {
    let elem = ev.currentTarget;
    let campaign = elem.parentNode.parentNode.parentNode.id;
    let index = parseInt(elem.dataset.index);
    let imagedata = artdata[campaign][index];
    showFeatured(imagedata, campaign);
}

const showImages = (data, campaign) => {
    let image_vec = data[campaign];
    image_vec.sort((a, b) => {
        if (a.priority == 1) {
            return -1;}
        else {return b.date - a.date; }
    })
    let idx = 0;
    showFeatured(image_vec[0], campaign);
    for (const image of image_vec) {
        document.getElementById(campaign).querySelector('.cards').innerHTML += `
            <div class="card">
                <div class="image" 
                    style="background-image:url('${image.path}')"
                    data-index=${idx}"></div>
            </div>`;
        idx += 1;
    }
}

const attachEventHandlers = () => {
    for (const elem of document.querySelectorAll('.image')) {
        elem.onclick = setFeatured;
    }
};

$(document).ready(function() {
    fetch("art_files.json")
    .then(response => {
        return response.json();
    })
    .then(data => {
        artdata = data;
        showImages(artdata, "starless");
        showImages(artdata, "dreamscape");
        showImages(artdata, "sky-high");
        showImages(artdata, "world-tour");
        showImages(artdata, "children");
        showImages(artdata, "phoenix");
        showImages(artdata, "misc");
        attachEventHandlers();
        });
})


