import { ExclamationTriangleIcon, ArrowPathRoundedSquareIcon } from '@heroicons/react/24/solid'

export default function toast(props){

	return (
		<div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full m-4 max-w-[400px] bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border border-gray-200 p-4 h-flex mx-auto shadow-xl">
			<ExclamationTriangleIcon className="w-5 h-5" />
			{props.message}
			<button className="h-flex ml-auto">
				Retry
				<ArrowPathRoundedSquareIcon className="w-5 h-5" />
			</button>
		</div>
	)
}