import URLForm from './components/URLForm.jsx'
import Post from './components/Post.jsx'
import Footer from './components/Footer.jsx'
import ErrorPost from './components/ErrorPost.jsx'
import Loader from './components/Loader.jsx'
import { PinterestLogo, GithubLogo } from '@phosphor-icons/react'
import { useState, useEffect } from 'react'

function App(){

  const [ list, setList ] = useState([]);
  const [ url, setURL ] = useState('');
  const [ isLoading, setIsLoading ] = useState(false);

  async function fetchData(url){
    let r = '';
    await fetch('/api', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "url": url
      })
    }).then(res => res.json()).then(res => {
      r = res;
    }).catch(err => {
      r = {
        error: true,
        message: err.message,
      }
    })
    await setList([r, ...list])
    await setIsLoading(false)
  }

  return (
    <div className="app flex flex-col items-center py-16 max-w-[320px] m-auto ">
      <div className="bg-[white] border-2 border-black p-4 rounded-xl mb-2 py-8 w-full">
        <div className="p-2 px-4 bg-red-500 rounded-full flex items-center gap-2 text-white font-medium uppercase w-fit mx-auto">
          <PinterestLogo size="36" className="fill-white" />
          PinLoader
        </div>
        <URLForm url={url} setURL={setURL} isLoading={isLoading} setIsLoading={setIsLoading} fetchData={fetchData} />
      </div>
      <ul>
        {
          (list.length > 0) && list.map( (i, ind) =>
            !i.error ?
            <Post key={ind+""} {...i} list={list} setList={setList} />
            : 
            <ErrorPost key={ind+""} {...i} url={url} fetchData={fetchData} setIsLoading={setIsLoading} />
          )
        }
        {/*<Post headline="Goodreads" userName="Goodreads" imageURL="https://i.pinimg.com/736x/2d/11/c0/2d11c0fc9dcd3dd2d2d7be0e80970f0d.jpg">
          {
            isLoading ? 
            <Loader />
            : null
          }
        </Post>
        <ErrorPost message="https://i.pinimg.com/736x/2d/11/c2d11c0fc9dcd3dd2d2d7be0e80970f0d.jpg"/>*/}
      </ul>
      <a href="https://github.com/hugekontrast/PinLoader/issues" target="_blank" className="flex items-center gap-2 bg-white p-4 border-2 border-black rounded-xl mt-4">
        Report a bug
        <GithubLogo size={24} />
      </a>
      <Footer />
    </div>
  );
}

export default App