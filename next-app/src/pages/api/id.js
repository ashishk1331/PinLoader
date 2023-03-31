// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "axios";
import * as cheerio from "cheerio";

async function fetchData(url){
  let resp = await axios.get(url)

    const $ = await cheerio.load(resp.data);
    const leaf = $('script[data-test-id="leaf-snippet"]');
    const video = $('script[data-test-id="video-snippet"]')
    const image = $('img')
    let data = [];

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

export default async function handler(req, res) {
  if(req.method === "POST"){
      let id = JSON.parse(req.body)['id']
      let r = await fetchData(`https://in.pinterest.com/pin/${id}/`)
      res.status(200).json({ 
        data : r
      })
  } else {
      res.status(200).json({ message : 'make a post req with id parameter'})
  }
}