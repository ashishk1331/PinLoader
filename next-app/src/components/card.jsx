import Image from 'next/image'
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline'
import { formatDistance, subDays } from 'date-fns'

export default function card(props) {

	return (
		<li className="w-[360px] mx-auto my-12">
			<section className="w-full h-flex mb-4">
				<Image 
					src={props.data[0].author.avatarUrl}
					className="aspect-square overflow-hidden rounded-full"
					width={32}
					height={32}
					alt="@user-image"
				/>
				<p>
					{props.data[0].author.name}
				</p>
				<p className="text-gray-400">
					{formatDistance(new Date(), new Date(props.data[0].datePublished), { addSuffix: true })}
				</p>
			</section>

			<section className="w-full rounded aspect-square overflow-hidden h-flex">
				{
					props.data.length > 1 ?
					<video className="w-full object-cover m-auto" autoPlay={true} muted loop>
					  <source src={props.data[1].contentUrl} type="video/mp4" />
					  Your browser does not support the video tag.
					</video>
					:
					<Image 
						src={props.data[0].image}
						className="w-full h-full object-cover transition ease-linear duration-300 hover:scale-125"
						width={500}
						height={500}
						alt="@given-image"
					/>
				}
			</section>
		</li>
	)
}