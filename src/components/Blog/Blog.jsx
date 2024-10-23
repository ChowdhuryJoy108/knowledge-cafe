import PropTypes from "prop-types"

export default function Blog({blog}){
    const {cover,title,reading_time, author, author_img,hashtags,posted_date} = blog
    return(
        <div className="flex flex-col space-y-4 border-b-2 mb-8 pb-4">
            <img className="w-full rounded-lg" src={cover} alt={`cover img for ${title}`} />
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <img className="w-14" src={author_img} alt="" />
                    <div>
                        <h3 className="font-bold">{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button>Bookmark</button>
                </div>
            </div>

            <h1 className="text-4xl font-semibold leading-snug">{title}</h1>
            <div className="flex gap-4">
                {
                    hashtags.map((hash, idx)=>(<p className="text-gray-500 text-base" key={idx} >#{hash}</p>))
                }
            </div> 
            <button className="text-purple-500 font-bold text-start underline">Mark As Read</button>
        </div>
    )
}

Blog.propTypes = {
    blog:PropTypes.object
}