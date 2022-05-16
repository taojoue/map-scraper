import sharp from "sharp/lib/sharp";

function index() {
    var Scraper = require("image-scraper");

    var scraper = new Scraper("https://apod.nasa.gov/apod/astropix.html");

    scraper.address = "http://www.npmjs.org";

    scraper.scrape(function(image) { 
        image.save();
    });
}
module.exports(index);