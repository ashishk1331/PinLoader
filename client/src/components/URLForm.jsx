import { Spinner, CircleNotch } from '@phosphor-icons/react'
import { useRef } from 'react'
import Loader from './Loader'

function URLForm({ url, setURL, isLoading, setIsLoading, fetchData }){

	const inp = useRef(null)

	return (
		<form 
			className="flex flex-col w-full my-4"
			onSubmit={(e) => {
				e.preventDefault();
				setIsLoading(true)
				setURL(e.target.children[0].value);

				let pattern_one = /^(https:\/\/)?(\w+\.)?pinterest\.com\/pin\/(\d+)/gm;
				let pattern_two = /(https:\/\/)?pin\.it\/(\w+)/gm;

				if(pattern_one.exec(url) || pattern_two.exec(url)){
					fetchData(url);
				} else {
					console.log('wrong url passed')
				}
				// type submit debouncer
				// setURL('');
				e.target.reset();
			}}
		>
			<input 
				ref={inp}
				type="text"
				placeholder="paste url..."
				className="border-2 border-[black] p-1 px-3 rounded-lg w-full"
				value={url}
				onChange={(e) => {
					setURL(e.target.value)
				}}
			/>
			<button 
				type="submit"
				className="flex flex-col items-center bg-[black] text-[white] p-3 rounded-lg mr-auto w-full mt-2"
			>
				{
					isLoading?
					<Spinner className="animate-spin text-xl m-auto" weight="bold" />
					:
					'Get'
				}
			</button>
			<a
				href="#" 
				className="mt-2 underline w-fit mx-auto" 
				onClick={(e) => {
					e.preventDefault();
					setURL('')
			}}>
				clear
			</a>
		</form>
	);
}

export default URLForm