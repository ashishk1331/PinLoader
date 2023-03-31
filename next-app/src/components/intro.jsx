import { useState } from 'react'
import { cn } from '../util/cn'
import { ArrowPathIcon } from '@heroicons/react/24/solid'

export default function intro(props){

    function handleSubmit(e){
        e.preventDefault()

        let typedURL = e.target.url.value
        let re = /https:\/\/(\w+\.)?pinterest\.com\/pin\/(\d+)(\/.+)?/gm
        if(re.test(typedURL)){
            let urlID = (/https:\/\/(\w+\.)?pinterest\.com\/pin\/(\d+)(\/.+)?/gm.exec(typedURL))[2]
            props.fetchData(urlID)
        }

        e.target.reset()
    }

	return (
		<form className="v-flex w-[360px] mx-auto" onSubmit={handleSubmit}>
            <h1 className="text-6xl w-full font-bold">Pinloader</h1>
            <label className="w-full">
                <p className="w-full mb-2">type in the url of the pin</p>
                <div className="h-flex w-hull">
                    <input type="text" placeholder="url" name="url" className="border-2 rounded p-2 w-full" />
                    <button type="submit" className="text-white p-2 px-4 bg-black rounded">
                        {
                            props.isLoading ?
                            <ArrowPathIcon className="w-6 h-6 animate-spin" />
                            :
                            'Get'
                        }
                    </button>
                </div>
            </label>
        </form>
	)
}