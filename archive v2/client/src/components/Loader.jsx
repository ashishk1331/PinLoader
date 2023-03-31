import { CircleNotch, SpinnerGap } from '@phosphor-icons/react'

function Loader(){
	return (
		<div className="flex absolute w-full h-full inset-0 bg-[white]">
			<SpinnerGap weight="bold" className="m-auto animate-spin" size="32" />
		</div>
	);
}

export default Loader;