

// make a database of art posts to generate/fill based on what page you're on

// maybe posts from recent dates or priority numbers fill into home ? or with certain ids? unsure
const starless_images = [
    'assets/ttrpgs/starless/rileyrefsheet1.png',
    'assets/ttrpgs/starless/riley_drowning.jpg',
    'assets/ttrpgs/starless/riley_meditate.jpg',
    'assets/ttrpgs/starless/rileyblood.png',
    'assets/ttrpgs/starless/rileyleahclose.jpg',
    'assets/ttrpgs/starless/rileyleahliedown.png',
    'assets/ttrpgs/starless/rileyleahpride1.png',
    'assets/ttrpgs/starless/rileysword.jpg'
]

const dreamscape_images = [
    'assets/ttrpgs/dreamscape/ashter.png',
    'assets/ttrpgs/dreamscape/walkingthrustatic.jpg',
    'assets/ttrpgs/dreamscape/asterbathingsuit.png',
    'assets/ttrpgs/dreamscape/asheconcept.png',
    'assets/ttrpgs/dreamscape/asterandieamy.png',
    'assets/ttrpgs/dreamscape/asterandiefancy.png',
    'assets/ttrpgs/dreamscape/asterandielittle.png',
    'assets/ttrpgs/dreamscape/asterandieold.png',
    'assets/ttrpgs/dreamscape/asterandietimeline.png',
    'assets/ttrpgs/dreamscape/asterashechibialt.png',
    'assets/ttrpgs/dreamscape/asterashecuddle.png',
    'assets/ttrpgs/dreamscape/asterashedoodles.jpg',
    'assets/ttrpgs/dreamscape/asterashehaircut.png',
    'assets/ttrpgs/dreamscape/asterashepiggyback.png',
    'assets/ttrpgs/dreamscape/asterashesweaters.png',
    'assets/ttrpgs/dreamscape/asterashewedding.png',
    'assets/ttrpgs/dreamscape/asterashewinter.png',
    'assets/ttrpgs/dreamscape/asterashexmas.png',
    'assets/ttrpgs/dreamscape/asterbathingsuit.png',
    'assets/ttrpgs/dreamscape/asterdad.jpg',
    'assets/ttrpgs/dreamscape/asterdoodles.png',
    'assets/ttrpgs/dreamscape/asterfashion.png',
    'assets/ttrpgs/dreamscape/asteroutfits.png',
    'assets/ttrpgs/dreamscape/chungfam.png',
    'assets/ttrpgs/dreamscape/core3xmas.png',
    'assets/ttrpgs/dreamscape/gang.jpg',
    'assets/ttrpgs/dreamscape/gotyouflowers.jpg',
    'assets/ttrpgs/dreamscape/sleepyheads.png'
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

const world_tour_images = [
    'assets/ttrpgs/world_tour/cassgetstorest.png',
    'assets/ttrpgs/world_tour/casssuit.png',
    'assets/ttrpgs/world_tour/casscane.jpg',
    'assets/ttrpgs/world_tour/casscasketland.png',
    'assets/ttrpgs/world_tour/cassclairedungeonworld.png',
    'assets/ttrpgs/world_tour/cassdungeonworld.png'
]

const phoenix_images = [
    'assets/ttrpgs/phoenix/figspotify.jpg',
    'assets/ttrpgs/phoenix/figsheet.jpg',
    'assets/ttrpgs/phoenix/figdresses.png',
    'assets/ttrpgs/phoenix/figfamily.png'
]

const children_images = [
    'assets/ttrpgs/children/briardesign.png',
    'assets/ttrpgs/children/briarfire.jpg',
    'assets/ttrpgs/children/briarjar.png',
    'assets/ttrpgs/children/briarconcept.png'
]

const misc_images = [
    'assets/ttrpgs/misc/pcs.png',
    'assets/ttrpgs/misc/masksteamdesigns.png',
    'assets/ttrpgs/misc/masksteamflowers.png',
    'assets/ttrpgs/misc/masksteamheads.png',
    'assets/ttrpgs/misc/masksteamconcept.png',
    'assets/ttrpgs/misc/jaimehannah.png',
    'assets/ttrpgs/misc/jaimesheet.png',
    'assets/ttrpgs/misc/cloudharborteens.png',
    'assets/ttrpgs/misc/grace.png',
    'assets/ttrpgs/misc/nikoconcept.png',
    'assets/ttrpgs/misc/alignmentchart.png'
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
initImages(starless_images, "starless");
initImages(world_tour_images, "world-tour");
initImages(phoenix_images, "phoenix");
initImages(children_images, "children");
initImages(misc_images, "oneshots");
initGifs(sky_high_animations, "sky-high");