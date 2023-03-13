import axios from 'axios'
import * as cheerio from 'cheerio'


function createObj(userName, userURL, headline, contentURL, datePublished, videoURL = null){
	return {
		userName: userName,
		userURL: userURL,
		headline: headline,
		imageURL: contentURL,
		datePublished: datePublished,
		videoURL: videoURL,
		error: false
	}
}

/*
	test urls ->

	image url
	const url = 'https://in.pinterest.com/pin/116038127891337513/'

	gif url
	const url = 'https://in.pinterest.com/pin/70437481143914/'

	video url
	const url = 'https://in.pinterest.com/pin/11047961578668971/'
*/


async function fetchData(u){
	// if(u) return null
	let r = {};
	await axios.get(u)
	.then(async ({ data }) => { 
		const $ = cheerio.load(data);
		let imageOBJ = {}, videoOBJ = {};

		$('script').get().forEach(child => {
			let innerText = child.children[0]?.data;
			if(innerText){
				let t = JSON.parse(innerText)
				if(t['@type'] === 'VideoObject'){
					videoOBJ = t
				}
				if(t['@type'] === 'SocialMediaPosting'){
					imageOBJ = t
				}
			}
		})


		r = {...videoOBJ, ...imageOBJ}
		console.log(r)

	}).catch(err => {
		r = {
			error: true,
			message: err.message,
		}
	})
	return await r
}

export default fetchData