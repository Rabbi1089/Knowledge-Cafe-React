import './App.css'
import Blogs from './components/blogs/Blogs'
import Bookmarks from './components/bookmarks/Bookmarks'
import './components/header/Header'
import Header from './components/header/Header'


function App() {


  return (
    <>

    <Header></Header>
   
      <div className="flex p-4 m-4">
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>
      </div>
    

    </>
  )
}

export default App
