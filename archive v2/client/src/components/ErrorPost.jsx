import { Warning, ArrowClockwise } from '@phosphor-icons/react'

function ErrorPost(props){
	return (
		<li className="w-[320px] aspect-square rounded-lg overflow-hidden flex my-8 shadow-xl border-2 border-black bg-[white]">
				<div className="m-auto flex w-full flex-col items-center">
					<Warning weight="fill" size="42"/>
					<h1 className="text-xl">
						Error occured

					</h1>
					<p className="w-[320px] text-ellipsis overflow-hidden px-6 text-center italic">
						{props.message}
					</p>
					<button className="flex items-center bg-black rounded-lg p-1 pb-2 mt-4 px-4 text-white" 
						onClick={() => {
							props.setIsLoading(true)
							props.fetchData(props.url)
						}}
					>
						<ArrowClockwise weight="bold" className="mx-1"/>
						retry
					</button>
				</div>
		</li>
	)
}

export default ErrorPost