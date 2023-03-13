import { ArrowSquareOut, DownloadSimple, Image, Gif, Video, XCircle } from '@phosphor-icons/react'
import Loader from './Loader.jsx'

function Post(props){
	const isVideo = props.contentUrl ? true : false;
	const isGIF = props.image.endsWith('gif');
	const icon_size = 24

	return (
		<li className="relative wheadline-full min-w-[320px] aspect-square rounded-lg overflow-hidden flex flex-col items-center my-8 shadow-xl border-2 border-black bg-[white]">

			<button className="p-3 mb-2" onClick={() => {
				props.setList(props.list.filter(i => i.image !== props.image))
			}}>
				<XCircle size={icon_size} weight="fill" fill="black" />
			</button>

			<div className="w-full aspect-[4/3] overflow-hidden flex relative">
				<img src={props.image} alt="" className="w-full object-cover transition duration-700 ease-in-out hover:scale-150" />
			</div>

			<span className="w-full flex p-3 px-4 my-2">
				<div className="flex flex-col w-full">
					<h1 className="text-2xl text-lg mb-1 flex items-center">
						{
							isGIF?
							<Gif weight="fill" size={icon_size} className="mr-1" />
							: (
								isVideo?
								<Video weight="fill" size={icon_size} className="mr-1" />
								:
								<Image weight="fill" size={icon_size} className="mr-1" />
							)
						}
						{props.headline.substring(0,20)}
					</h1>
					<a href={props.author.url} className="flex items-center text-sm lowercase underline">
						{props.author.name}
						<ArrowSquareOut size={14} />
					</a>
				</div>

				<a target="_blank" href={props.contentUrl || props.image}>
					<DownloadSimple weight="bold" size="22" className="m-4" />
				</a>
			</span>
		</li>
	)
}

Post.defaultProps = {
	contentUrl: false
}

export default Post