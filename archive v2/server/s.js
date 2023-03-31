import axios from "axios";
import * as cheerio from "cheerio";
// import fs from "fs";

async function fetchData(url){
	let resp = await axios.get(url)

    const $ = await cheerio.load(resp.data);
    const leaf = $('script[data-test-id="leaf-snippet"]');
    const video = $('script[data-test-id="video-snippet"]')
    const image = $('img')
    let data = [];

    // debugging file writer func
    //
    // fs.writeFile("data.html", $.html(), (err) => {
    //   if (err) console.log(err);
    //   else {
    //     console.log("File written successfully\n");
    //   }
    // });

    if(leaf.length > 0){
    	let r = JSON.parse(leaf.contents()['0']['data'])
    	r.author['avatarUrl'] = image.attr('src')
    	data.push(r)
    }
    if(video.length > 0){
    	let r = JSON.parse(video.contents()['0']['data'])
    	data.push(r)
    }

    return data
}


let url = "https://in.pinterest.com/pin/550916966933052224/";
(async function(){
	let r = await fetchData(url)
	console.log(r)
})()