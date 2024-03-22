
import PropTypes from 'prop-types';
import { PiBookmarkSimpleLight } from "react-icons/pi";


const Blog = ({blog, handleAddToBookMarks, handleMarkAsRead }) => {
    //console.log(blog)

    const {title , cover, author, author_image, reading_time, posted_date , hashtag} = blog

    return (
        <div className='mb-4'>
            <img className='w-full h-[450px] mb-2' src={cover} alt="" />

            <div className="flex justify-between ">
                <div className="flex gap-6 m-5">
                <img className=' w-14 h-14 rounded-full' src={author_image} alt="" />
                    <div className='mb-2'>
                        <h3 className=' text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className="">
                    <span>{reading_time} min read</span>
                    <button onClick={() =>handleAddToBookMarks(blog)} className='text text-2xl text-red-600 ml-2 mt-3 mt-2'><PiBookmarkSimpleLight /></button>
                </div>
            </div>
            <h2 className="text-4xl font-bold">{title}</h2>
            <p>
            {
                hashtag.map((hash , idx) => <span key={idx} className='mt-3 space-x-2'># {hash}  </span>)
            }

            </p>
            <button onClick={() => handleMarkAsRead(reading_time)}
             className="text-purple-800 font-bold underline" type="button">Mark as read</button>
        </div>
    );
};


Blog.propTypes = { 
    blog : PropTypes.object.isRequired,
    handleAddToBookMarks : PropTypes.func.isRequired

}

export default Blog;