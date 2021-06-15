

// make a database of art posts to generate/fill based on what page you're on

// maybe posts from recent dates or priority numbers fill into home ? or with certain ids? unsure
const starless_images = [
    'assets/ttrpgs/starless/rileyrefsheet1.PNG',
    'assets/ttrpgs/starless/riley_drowning.jpg',
    'assets/ttrpgs/starless/riley_meditate.jpg',
    'assets/ttrpgs/starless/rileyblood.PNG',
    'assets/ttrpgs/starless/rileyleahclose.JPG',
    'assets/ttrpgs/starless/rileyleahliedown.PNG',
    'assets/ttrpgs/starless/rileyleahpride1.PNG',
    'assets/ttrpgs/starless/rileysword.jpg'
]

const dreamscape_images = [
    'assets/ttrpgs/dreamscape/ashter.png',
    'assets/ttrpgs/dreamscape/walkingthrustatic.JPG',
    'assets/ttrpgs/dreamscape/asterbathingsuit.PNG',
    'assets/ttrpgs/dreamscape/asheconcept.PNG',
    'assets/ttrpgs/dreamscape/asterandieamy.PNG',
    'assets/ttrpgs/dreamscape/asterandiefancy.PNG',
    'assets/ttrpgs/dreamscape/asterandielittle.PNG',
    'assets/ttrpgs/dreamscape/asterandieold.PNG',
    'assets/ttrpgs/dreamscape/asterandietimeline.PNG',
    'assets/ttrpgs/dreamscape/asterashechibialt.PNG',
    'assets/ttrpgs/dreamscape/asterashecuddle.PNG',
    'assets/ttrpgs/dreamscape/asterashedoodles.jpg',
    'assets/ttrpgs/dreamscape/asterashehaircut.PNG',
    'assets/ttrpgs/dreamscape/asterashepiggyback.PNG',
    'assets/ttrpgs/dreamscape/asterashesweaters.PNG',
    'assets/ttrpgs/dreamscape/asterashewedding.PNG',
    'assets/ttrpgs/dreamscape/asterashewinter.PNG',
    'assets/ttrpgs/dreamscape/asterashexmas.PNG',
    'assets/ttrpgs/dreamscape/asterdad.JPG',
    'assets/ttrpgs/dreamscape/asterdoodles.PNG',
    'assets/ttrpgs/dreamscape/asterfashion.PNG',
    'assets/ttrpgs/dreamscape/asteroutfits.PNG',
    'assets/ttrpgs/dreamscape/chungfam.PNG',
    'assets/ttrpgs/dreamscape/core3xmas.PNG',
    'assets/ttrpgs/dreamscape/gang.JPG',
    'assets/ttrpgs/dreamscape/gotyouflowers.JPG',
    'assets/ttrpgs/dreamscape/sleepyheads.png'
]

const sky_high_images = [
    'assets/ttrpgs/sky_high/refsheet_taika.PNG',
    'assets/ttrpgs/sky_high/taikaBABY.png',
    'assets/ttrpgs/sky_high/taikasmallfinished.png',
    'assets/ttrpgs/sky_high/skitchin_large.jfif',
    'assets/ttrpgs/sky_high/nguyenfamilyphoto.png',
    'assets/ttrpgs/sky_high/itsagoodthingyourecute.png',
    'assets/ttrpgs/sky_high/taikarhea_table.png',
    'assets/ttrpgs/sky_high/fabian.png',
    'assets/ttrpgs/sky_high/taika_smiley.png',
    'assets/ttrpgs/sky_high/theyreherosandtheyreholdinghands.png',
    'assets/ttrpgs/sky_high/NguyenFamilyBread.PNG',
    'assets/ttrpgs/sky_high/NowThat.PNG',
    'assets/ttrpgs/sky_high/fabian.png',
    'assets/ttrpgs/sky_high/babyfabian.png',
    'assets/ttrpgs/sky_high/makingbread.png',
    'assets/ttrpgs/sky_high/oldteamteens.png',
    'assets/ttrpgs/sky_high/oldteamadults.png',
    'assets/ttrpgs/sky_high/taikadance.png',
    'assets/ttrpgs/sky_high/taikaearlyconcept.png',
    'assets/ttrpgs/sky_high/taikaearlymagic.png',
    'assets/ttrpgs/sky_high/taikaearlypurple.png',
    'assets/ttrpgs/sky_high/taikaknight.png',
    'assets/ttrpgs/sky_high/taikarheaoutfits.png',
    'assets/ttrpgs/sky_high/taikaspread.png',
    'assets/ttrpgs/sky_high/team.png',
    'assets/ttrpgs/sky_high/tessearlyconcept.png',
    'assets/ttrpgs/sky_high/tessisasimp.png',
    'assets/ttrpgs/sky_high/tesstaikahug.png',
    'assets/ttrpgs/sky_high/taikaoutfits.png',
    'assets/ttrpgs/sky_high/taikarheaearlyrivals.png'
]

const sky_high_animations = [
    'assets/ttrpgs/sky_high/IdleAnimationTaikaZoom.gif',
    'assets/ttrpgs/sky_high/cuties.gif',
    'assets/ttrpgs/sky_high/IdleAnimationTaika.gif',
    'assets/ttrpgs/sky_high/IdleAnimationEzra.gif',
    'assets/ttrpgs/sky_high/IdleAnimationLilli.gif',
    'assets/ttrpgs/sky_high/IdleAnimationLuxin.gif',
    'assets/ttrpgs/sky_high/fabiananimation.gif',
    'assets/ttrpgs/sky_high/taikaearlygif.gif'
]

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

const initGifs = (gif_vec, campaign) => {
    let idx = 0;
    for (const image of gif_vec) {
        document.getElementById(campaign).querySelector('.gifs').innerHTML += `
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
        attachEventHandlers();
        });
})

const attachEventHandlers = () => {
    for (const elem of document.querySelectorAll('.image')) {
        elem.onclick = setFeatured;
    }
};


initImages(sky_high_images, "sky-high");
initImages(dreamscape_images, "dreamscape");
// initImages(starless_images, "starless");
initImages(world_tour_images, "world-tour");
initImages(phoenix_images, "phoenix");
initImages(children_images, "children");
initImages(misc_images, "oneshots");
initGifs(sky_high_animations, "sky-high");
