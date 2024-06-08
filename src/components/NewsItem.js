import React from "react";

const NewsItem =(props)=> {
    let { title, description, imageUrl, newsUrl, author, date} = props;
    const formattedDate = date ? new Date(date).toGMTString() : "Unknown Date";

    return (
      <div className="my-3">
        <div className="card">
          <img
            src={
              !imageUrl
                ? "https://static.vecteezy.com/system/resources/thumbnails/006/299/370/original/world-breaking-news-digital-earth-hud-rotating-globe-rotating-free-video.jpg"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-body-secondary">By {!author?'Unkown':author} on {formattedDate}</small></p>
            <a
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }


export default NewsItem;
