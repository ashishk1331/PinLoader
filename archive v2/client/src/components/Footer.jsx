import { Coffee, ToiletPaper, HeartStraight } from '@phosphor-icons/react'

function Footer(){
	return (
		<footer className="text-xl my-4 p-4 bg-[white] rounded-xl border-2 border-black flex flex-col items-center">
			<p className="flex items-center">
				Made in
				<HeartStraight weight="fill" size="24" className="fill-red-400 mx-1" />
			</p>
			<p>
				by 
				{' '}
				<a href="https://github.com/hugekontrast" className="underline">AshishK</a>
			</p>
		</footer>
	)
}

export default Footer