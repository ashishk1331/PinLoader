import URLForm from './components/URLForm.jsx'
import Post from './components/Post.jsx'
import Footer from './components/Footer.jsx'
import ErrorPost from './components/ErrorPost.jsx'
import Loader from './components/Loader.jsx'
import { PinterestLogo } from 'phosphor-react'
import { useState, useEffect } from 'react'

function App(){

  const [ list, setList ] = useState([]);
  const [ url, setURL ] = useState('');
  const [ isLoading, setIsLoading ] = useState(false);

  async function fetchData(id){
    let r = '';
    await fetch('/api', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "id": id
      })
    }).then(res => res.json()).then(res => {
      r = res;
    }).catch(err => {
      r = {
        error: true,
        message: err.message
      }
    })
    await setList([r, ...list])
    await setIsLoading(false)
  }

  return (
    <div className="app flex flex-col items-center py-16 max-w-[320px] m-auto">
      <PinterestLogo weight="fill" size="54" />
      <URLForm url={url} setURL={setURL} isLoading={isLoading} setIsLoading={setIsLoading} fetchData={fetchData} />
      <ul>
        {
          (list.length > 0) && list.map( (i, ind) =>
            !i.error ?
            <Post key={ind+""} {...i} />
            : <ErrorPost key={ind+""} {...i} />
          )
        }
        {/*<Post headline="Goodreads" userName="Goodreads" imageURL="https://i.pinimg.com/736x/2d/11/c0/2d11c0fc9dcd3dd2d2d7be0e80970f0d.jpg">
          {
            isLoading ? 
            <Loader />
            : null
          }
        </Post>
        <ErrorPost message="https://i.pinimg.com/736x/2d/11/c0/2d11c0fc9dcd3dd2d2d7be0e80970f0d.jpg"/>*/}
      </ul>
      <Footer />
    </div>
  );
}

export default App