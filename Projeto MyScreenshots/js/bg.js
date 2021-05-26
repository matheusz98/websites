function changeBg(){
    const images = [
        'url("../images/bg/bloodborne.jpg")',
        'url("../images/bg/deathStranding.jpg")',
        'url("../images/bg/deusExMd.jpg")',
        'url("../images/bg/dmc5.jpg")',
        'url("../images/bg/ffXv.jpg")',
        'url("../images/bg/gow.jpg")',
        'url("../images/bg/horizon.jpg")',
        'url("../images/bg/mgsV.jpg")',
        'url("../images/bg/p5Royal.png")',
        'url("../images/bg/rdr2.png")',
        'url("../images/bg/spiderMan.jpg")',
        'url("../images/bg/tlou.jpg")',
        'url("../images/bg/tlou2.png")',
        'url("../images/bg/tsushima.jpg")',
        'url("../images/bg/unchartedLostLegacy.jpg")',
    ]

    const banner = document.querySelector('.banner')
    const bg = images[Math.floor(Math.random() * images.length)];
    banner.style.backgroundImage = bg;
}
setInterval(changeBg, 10000);