import React from "react";
import "./NewsCard.css";
import noImage from "./no-image.png";

const NewsCard = ({ newsItem }) => {
  const fullDate = new Date(newsItem.publishedAt);
  const date = fullDate.toString().split(" ");
  const hour = parseInt(date[4].substring(0, 2));
  const time = hour > 12 ? true : false;
  return (
    <div className="newsCard">
      <img
        className="newsImage"
        src={newsItem.urlToImage ? newsItem.urlToImage : noImage}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = noImage;
        }}
        alt={newsItem.title}
      />
      <div className="newsText">
        <div>
          <span className="title">{newsItem.title}</span>
          <br />
          <span className="author">
            <a href={newsItem.url} target="__blank">
              <b>short </b>
            </a>
            <span className="muted">
              by {newsItem.author ? newsItem.author : "Unknown"} /
              {time
                ? ` ${hour - 12}:${date[4].substring(3, 5)} pm`
                : ` ${hour}:${date[4].substring(3, 5)} am`}{" "}
              on {date[2]} {date[1]} {date[3]} {date[0]}
            </span>
          </span>
        </div>

        <div className="lowerNewsText">
          <div className="description">{newsItem.description}</div>
          <span className="readMore">
            read more at{" "}
            <a href={newsItem.url} target="__blank">
              <b>{newsItem.source.name}</b>
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
