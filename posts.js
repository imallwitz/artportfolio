

// make a database of art posts to generate/fill based on what page you're on

// maybe posts from recent dates or priority numbers fill into home ? or with certain ids? unsure

const dreamscape_images = [
    'assets/ttrpgs/dreamscape/ashter.png'
]

const sky_high_images = [
    'assets/ttrpgs/sky_high/refsheet_taika.png',
    'assets/ttrpgs/sky_high/taikaBABY.png',
    'assets/ttrpgs/sky_high/taikasmallfinished.png',
    'assets/ttrpgs/sky_high/skitchin_large.jfif',
    'assets/ttrpgs/sky_high/nguyenfamilyphoto.png',
    'assets/ttrpgs/sky_high/itsagoodthingyourecute.png',
    'assets/ttrpgs/sky_high/taikarhea_table.png',
    'assets/ttrpgs/sky_high/fabian.png',
    'assets/ttrpgs/sky_high/taika_smiley.png',
    'assets/ttrpgs/sky_high/theyreherosandtheyreholdinghands.png',
    'assets/ttrpgs/sky_high/NguyenFamilyBread.png',
    'assets/ttrpgs/sky_high/NowThat.png',
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

initImages(sky_high_images, "sky-high");
initImages(dreamscape_images, "dreamscape");
initGifs(sky_high_animations, "sky-high");