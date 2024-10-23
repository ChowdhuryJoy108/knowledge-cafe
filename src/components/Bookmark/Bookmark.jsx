import PropTypes from "prop-types";

export default function Bookmark({bookmark}){
    const {title} = bookmark
    return(
        <div className="bg-white text-2xl p-4 rounded-xl m-4">
            <h2>{title}</h2>
        </div>
    )
}

Bookmark.propTypes = {
    bookmark:PropTypes.object,
}