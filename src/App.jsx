
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([])
  const [readingTime, setReadingTime] = useState(0)

  const handleBookmark = (blog) =>{
     const newBlogs = [...bookmarks, blog];
     setBookmarks(newBlogs)
     }

  const handleMarkAsRead = (id,time) =>{
    setBookmarks(bookmarks.filter(bookmark => bookmark.id !== id));
    //update total reading time
    setReadingTime((prevTime) => prevTime + time)
  }
  return (
    <div className='w-[1080px] mx-auto'>
        <Header />
        <div className='flex'>
          <Blogs handleBookmark={handleBookmark} handleMarkAsRead={handleMarkAsRead} />
          <Bookmarks bookmarks={bookmarks} readingTime={readingTime} />
        </div>
    </div>
  )
}

export default App
