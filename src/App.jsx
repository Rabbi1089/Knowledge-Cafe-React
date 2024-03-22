import { useState } from 'react'
import './App.css'
import Blogs from './components/blogs/Blogs'
import Bookmarks from './components/bookmarks/Bookmarks'
import './components/header/Header'
import Header from './components/header/Header'


function App() {

  const [bookmarks , setBookmarks] = useState([]);
  const [readingTime , setReadingTime] = useState(0);

  const handleAddToBookMarks = blog =>{
    const newBookMarks = [...bookmarks , blog];
    setBookmarks(newBookMarks)
  }

  const handleMarkAsRead = (id ,time) =>{
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime)
    //Remove mark as read
    //console.log('mark as read', id)
    const remainingBookmark = bookmarks.filter(bookmark => (bookmark.id !== id));
    setBookmarks(remainingBookmark)

  }

  return (

    <>

    <Header></Header>
   
      <div className="flex p-4 m-4 max-w-7xl mx-auto">
        <Blogs handleAddToBookMarks={handleAddToBookMarks} handleMarkAsRead = {handleMarkAsRead}></Blogs>
        <Bookmarks bookmarks ={bookmarks}  readingTime={readingTime}></Bookmarks>
      </div>
    

    </>
  )
}

export default App
