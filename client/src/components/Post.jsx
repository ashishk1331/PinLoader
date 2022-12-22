import { ArrowSquareOut } from 'phosphor-react'
import Loader from './Loader.jsx'

function Post({ headline, userName, imageURL, videoURL }){

	return (
		<li className="relative wheadline-full min-w-[320px] aspect-square rounded-lg overflow-hidden flex flex-col items-center my-8 shadow-xl">

			<div className="w-full aspect-[4/3] overflow-hidden cursor-pointer flex">
				<img src={imageURL} alt="" className="w-full object-cover transition duration-700 ease-in-out hover:scale-150" />
			</div>

			<span className="w-full flex p-3 px-4">
				<div className="flex flex-col w-full">
					<h1 className="text-2xl text-lg mb-1">
						{headline.substring(0,20)}
					</h1>
					<p className="flex items-center text-sm lowercase">
						{userName}
					</p>
				</div>

				<a target="_blank" href={videoURL || imageURL}>
					<ArrowSquareOut weight="bold" size="22" className="m-4" />
				</a>
			</span>
		</li>
	)
}

export default Post