let formControl = (function(){
	let form = document.forms[0];
	let btn = form.elements['submitBTN'];
	let flag = false;
	let stateBTN = (props) => {
		if(props.state === 'loading'){
			btn.innerHTML = `
				<svg xmlns="http://www.w3.org/2000/svg" width="192" height="192" fill="#000000" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M168,40.7a96,96,0,1,1-80,0" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path></svg>
			`;
		} else {
			btn.innerHTML = 'Get';
		}
	}
	stateBTN({'state':'get'});

	form.addEventListener('submit', (e) => {
		e.preventDefault();
		const url = e.target.elements[0].value;
		const check = (/https:\/\/\w+\.pinterest.com\/pin\/(\d+)/gm).test(url) || (/https:\/\/pin.it\/(\w+)/gm).test(url);
		console.log(check);
		e.target.reset();
	});

}());