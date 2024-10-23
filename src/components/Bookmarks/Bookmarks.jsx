import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/BookMark'
export default function Bookmarks({bookmarks,readingTime}){

    return (
        <div className="w-1/3">
          <div>
            <h1 className='text-purple-500 text-2xl font-bold bg-slate-100 border-2 border-purple-600 px-4 py-6 mb-4 rounded-xl'>Spent time on read : {readingTime} min</h1>
          </div>
          <div className='bg-slate-100 h-fit py-4 rounded-xl'>
            <h1 className='text-2xl font-bold p-4'>Bookmarks : {bookmarks.length}

            </h1>
            {
                bookmarks.map((bookmark,idx) => <Bookmark  key={idx} bookmark={bookmark} />)
            } 
          </div>
        </div>
    )
}

Bookmarks.propTypes = {
    bookmarks : PropTypes.array,
    readingTime : PropTypes.number
}