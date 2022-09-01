
// maybe posts from recent dates or priority numbers fill into home ? or with certain ids? unsure

var artdata = [];
var totalindices = [];
var currindices = [];

const showFeatured = (campaign, index) => {
    let imagedata = artdata[campaign][index];
    document.getElementById(campaign).querySelector('.featured').innerHTML = `
            <div class="featuredcard">
                <i class="fas fa-arrow-circle-left last-button" onclick="showLast(this)"></i>
                <img class="featuredimage"
                src='${imagedata.path}'></img>
                <i class="fas fa-arrow-circle-right next-button" onclick="showNext(this)"></i>
            </div>
            <h3 class="title">${imagedata.name}</h3>
            <h4 class="description">${imagedata.description}</h4>`;
}

const setFeatured = (ev) => {
    let elem = ev.currentTarget;
    let campaign = elem.parentNode.parentNode.parentNode.id;
    let index = parseInt(elem.dataset.index);
    currindices[campaign] = index;
    showFeatured(campaign, index);
}

const showNext = (elem) => {
    let campaign = elem.parentNode.parentNode.parentNode.id;
    idx = currindices[campaign] + 1;
    //make sure it isn't past the end
    if (idx >= totalindices[campaign] ){
        idx = 0;
    }
    currindices[campaign] = idx;
    showFeatured(campaign, idx);
    console.log(campaign, idx)
}

const showLast = (elem) => {
    let campaign = elem.parentNode.parentNode.parentNode.id;
    idx = currindices[campaign] - 1;
    //make sure it isn't past the end
    if (idx < 0){
        idx = totalindices[campaign] - 1;
    }
    currindices[campaign] = idx;
    showFeatured(campaign, idx);
    console.log(campaign, idx)
}

const showImages = (data, campaign) => {
    let image_vec = data[campaign];
    image_vec.sort((a, b) => {
        if (a.priority == 1) {
            return -1;}
        else {return b.date - a.date; }
    })
    let idx = 0;
    // load the first image in as the featured image
    //showFeatured(image_vec[0], campaign);
    showFeatured(campaign, 0);
    // load the rest of the images in to the clickable cards 
    for (const image of image_vec) {
        document.getElementById(campaign).querySelector('.cards').innerHTML += `
            <div class="card">
                <div class="image" 
                    style="background-image:url('${image.path}')"
                    data-index=${idx}"></div>
            </div>`;
        idx += 1;
    }
    totalindices[campaign] = idx;
    currindices[campaign] = 0;
}

const attachEventHandlers = () => {
    for (const elem of document.querySelectorAll('.image')) {
        elem.onclick = setFeatured;
    }
    // for (const elem of document.querySelectorAll('.next-button')) {
    //     elem.onclick = showNext;
    // }
    // for (const elem of document.querySelectorAll('.last-button')) {
    //     elem.onclick = showLast;
    // }
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


