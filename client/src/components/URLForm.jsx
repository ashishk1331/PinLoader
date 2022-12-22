import { CircleNotch } from 'phosphor-react'
import { useRef } from 'react'

function URLForm({ url, setURL, isLoading, setIsLoading, fetchData }){

	const inp = useRef(null)

	return (
		<form 
			className="flex w-full my-4"
			onSubmit={(e) => {
				e.preventDefault();
				setIsLoading(true)
				const re = /^(https:\/\/)?(\w+\.)?pinterest\.com\/pin\/(\d+)/gm;
				setURL(e.target.children[0].value);
				if(re.exec(url)){
					const id = url.match(/(\d+)/gm)[0];
					fetchData(id);
				} else {
					console.log('wrong url passed')
				}
				// type submit debouncer
				setURL('');
				e.target.reset();
			}}
		>
			<input 
				ref={inp}
				type="text"
				placeholder="paste url..."
				className="border-2 border-[black] p-1 px-3 rounded-l-lg w-full"
				value={url}
				onChange={(e) => {
					setURL(e.target.value)
				}}
			/>
			<button 
				className="w-[80px] flex flex-col items-center bg-[black] border-2 border-[black] text-[white] p-1 px-3 rounded-r-lg mr-auto"
			>
				{
					isLoading?
					<CircleNotch className="animate-spin text-xl m-auto" weight="bold" />
					:
					'Get'
				}
			</button>
		</form>
	);
}

export default URLForm