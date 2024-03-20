
import PropTypes from 'prop-types';

const Blog = ({blog}) => {
    //console.log(blog)

    const {title , cover, author, author_image, reading_time, posted_date , hashtag} = blog

    return (
        <div>
            <img src={cover} alt="" />

            <div className="flex justify-between">
                <div className="flex gap-6 m-5">
                <img className=' w-14 h-14 rounded-full' src={author_image} alt="" />
                    <div>
                        <h3 className=' text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className="mt-3">
                    <span>{reading_time} min read</span>
                </div>
            </div>
            <h2 className="text-4xl font-bold">{title}</h2>
            {
                hashtag.map((hash , idx) => <span key={idx}># {hash}  </span>)
            }
        </div>
    );
};


Blog.propTypes = { 
    blog : PropTypes.object.isRequired

}

export default Blog;