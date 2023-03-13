import express from 'express'
import axios from 'axios'
import fetchData from './scrape.js'

const app = express()
app.use(express.json());

app.get('/', (req, res) => {
	res.send('API is working now,..')
})

app.post('/api', async (req, res) => {
	const { url } = req.body;
	console.log(url)
	let r = await fetchData(url)
	await res.send(r)
})

app.listen(8080, () => {
	console.log('app running on port 8080')
})