function index() {
    const { exec } = require("child_process");
    const sharp =  require('sharp');

    for (let i = 9; i <= 54; i++) {
        for (let n = 0; n <= 63; n++) {
            let url = "https://tiles.telegeography.com/maps/submarine-cable-map-2015/6/" + n.toString() + "/" + i.toString() + ".png";
            let name = "6-" + n.toString() + "-" + i.toString();
            exec("curl -s " + url + " -o ./images/" + name + ".jpg");
        }
    }
    sharp('./images/6-0-9.png')
        .composite([{
            input: './images/6-0-9.png'
        }])
        .toFile('output.jpg', function (err) {
            console.log("error: ", err)
        });

}
module.exports = index();