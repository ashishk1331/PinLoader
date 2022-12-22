import { Coffee, ToiletPaper } from 'phosphor-react'

function Footer(){
	return (
		<footer className="text-xl my-4">
			<p className="flex items-center">
				Made with
				<Coffee weight="fill" size="24" className=" mx-1" />
			</p>
			<p className="flex items-center">
				<ToiletPaper weight="fill" size="24" className="mx-1" />
				on a toilet.
			</p>
		</footer>
	)
}

export default Footer