
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {

  return (
    <div className='w-[1080px] mx-auto'>
        <Header />
        <div className='flex'>
          <Blogs />
          <Bookmarks />
        </div>
    </div>
  )
}

export default App
