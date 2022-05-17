function index() {
    const { exec } = require("child_process");
    const { joinImages } = require('join-images');
    // for (let i = 9; i <= 54; i++) {
    //     for (let n = 0; n <= 63; n++) {
    //         let url = "https://tiles.telegeography.com/maps/submarine-cable-map-2015/6/" + n.toString() + "/"+i.toString()+".png";
    //         let name = "6-" + n.toString() + "-"+i.toString();
    //         exec("curl " + url + " -o ./images/" + name + ".png");
    //         // exec("curl https://tiles.telegeography.com/maps/submarine-cable-map-2015/6/0/21.png -o ./images/6-1-21.png");
    //     }
    // }
    let array = [];
    let outputImages = [];
    for (let i = 0; i <= 63; i++) {
        let col = [];
        for (let n = 9; n <= 54; n++) {
            let name = "./images/6-" + i.toString() + "-" + n.toString() + ".png";
            col.push(name);
        }
        array.push(col);
    }
    // console.log(array)

    for (let n = 0; n <= 63; n++) {
        joinImages(array[n]).then((img) => {
            img.toFile('./output/output-' + n.toString() + '.png');
        });
        outputImages.push('./output/output-' + n.toString() + '.png');
    }
    // console.log(outputImages);
    joinImages(outputImages, { direction: "horizontal" }).then((img) => {
        img.toFile('./output.png');
    });

}
module.exports = index();