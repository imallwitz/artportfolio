

// make a database of art posts to generate/fill based on what page you're on

// maybe posts from recent dates or priority numbers fill into home ? or with certain ids? unsure

const world_tour_images = [
    'assets/ttrpgs/world_tour/cassgetstorest.png',
    'assets/ttrpgs/world_tour/casssuit.png',
    'assets/ttrpgs/world_tour/casscane.JPG',
    'assets/ttrpgs/world_tour/casscasketland.PNG',
    'assets/ttrpgs/world_tour/cassclairedungeonworld.PNG',
    'assets/ttrpgs/world_tour/cassdungeonworld.PNG'
]

const phoenix_images = [
    'assets/ttrpgs/phoenix/figspotify.jpg',
    'assets/ttrpgs/phoenix/figsheet.jpg',
    'assets/ttrpgs/phoenix/figdresses.PNG',
    'assets/ttrpgs/phoenix/figfamily.PNG'
]

const children_images = [
    'assets/ttrpgs/children/briardesign.PNG',
    'assets/ttrpgs/children/briarfire.JPG',
    'assets/ttrpgs/children/briarjar.PNG',
    'assets/ttrpgs/children/briarconcept.PNG'
]

const misc_images = [
    'assets/ttrpgs/misc/pcs.PNG',
    'assets/ttrpgs/misc/masksteamdesigns.PNG',
    'assets/ttrpgs/misc/masksteamflowers.PNG',
    'assets/ttrpgs/misc/masksteamheads.PNG',
    'assets/ttrpgs/misc/masksteamconcept.PNG',
    'assets/ttrpgs/misc/jaimehannah.PNG',
    'assets/ttrpgs/misc/jaimesheet.PNG',
    'assets/ttrpgs/misc/cloudharborteens.PNG',
    'assets/ttrpgs/misc/grace.PNG',
    'assets/ttrpgs/misc/nikoconcept.PNG',
    'assets/ttrpgs/misc/alignmentchart.PNG'
]

var artdata = [];

// code taken from a tutorial created by Professor Sarah Van Wart at Northwestern University

const initImages = (image_vec, campaign) => {
    let idx = 0;
    for (const image of image_vec) {
        document.getElementById(campaign).querySelector('.cards').innerHTML += `
            <div class="card">
                <div class="image" 
                    style="background-image:url('${image}')"
                    data-index=${idx}"></div>
            </div>`;
        idx += 1;
    }
}

const setFeatured = (ev) => {
    let elem = ev.currentTarget;
    let campaign = elem.parentNode.parentNode.parentNode.id;
    let index = parseInt(elem.dataset.index);
    let imagedata = artdata[campaign][index];
    showFeatured(imagedata, campaign);
}

const showFeatured = (imagedata, campaign) => {
    document.getElementById(campaign).querySelector('.featured').innerHTML = `
            <img class="featuredimage"
                src='${imagedata.path}'></img>
            <h3 class="title">${imagedata.name}</h3>
            <h4 class="description">${imagedata.description}</h4>`;
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
        attachEventHandlers();
        });
})

const attachEventHandlers = () => {
    for (const elem of document.querySelectorAll('.image')) {
        elem.onclick = setFeatured;
    }
};


// initImages(starless_images, "starless");
initImages(world_tour_images, "world-tour");
initImages(phoenix_images, "phoenix");
initImages(children_images, "children");
initImages(misc_images, "oneshots");
