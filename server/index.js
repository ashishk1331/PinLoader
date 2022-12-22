import express from 'express'
import axios from 'axios'
import fetchData from './scrape.js'

const app = express()
app.use(express.json());

app.post('/api', async (req, res) => {
	const { id } = req.body;
	let r = await fetchData(`https://in.pinterest.com/pin/${id}/`)
	await res.send(r)
})

app.listen(8080, () => {
	console.log('app running on port 8080')
})