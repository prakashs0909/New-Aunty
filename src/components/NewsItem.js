import React from "react";

const NewsItem = (props) => {
  let { title, description, imgurl, url, author, date } = props;
  return (
    <div className="my-3">
      <div className="card">
        <img
          src={
            imgurl
              ? imgurl
              : "https://content.api.news/v3/images/bin/48db96763fffb2be6a1d2f21136529b9"
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-muted">
              By {author ? author : "Unknown"} on {new Date(date).toGMTString()}{" "}
            </small>
          </p>
          <a href={url} target="blank" className="btn btn-sm btn-primary">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
