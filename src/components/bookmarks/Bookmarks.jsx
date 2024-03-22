import PropTypes from 'prop-types'
import Bookmark from '../bookmark/Bookmark';

const Bookmarks = ({bookmarks , readingTime}) => {
    return (
        <div className="md:w-1/3 text-center bg-gray-300 m-4 rounded-xl">
            <h2 className=' m-4 text-purple-800 text-xl'> Reading Time : {readingTime}</h2>
          <h1 className=' text-3xl text-blue-50 text-bold mt-3'> Bookmarks Blog : {bookmarks.length}</h1>   
            {
                bookmarks.map((bookmark , idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks : PropTypes.array,
    readingTime:PropTypes.number
}

export default Bookmarks;