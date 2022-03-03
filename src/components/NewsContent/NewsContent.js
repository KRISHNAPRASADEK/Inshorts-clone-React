import React from "react";
import Container from "@mui/material/Container";
import "./NewsContent.css";
import NewsCard from "../NewsCard/NewsCard";

const NewsContent = ({ newsArray, newsResults, setLoadMore, loadMore }) => {
  return (
    <Container maxWidth="md">
      <div className="content">
        <div className="downloadMessage">
          <span className="downloadText">
            For the best experience use inshorts app on your smartphone
          </span>
          <img
            alt="app store"
            height="80%"
            src="https://assets.inshorts.com/website_assets/images/appstore.png"
          />
          <img
            alt="play store"
            height="80%"
            src="https://assets.inshorts.com/website_assets/images/playstore.png"
          />
        </div>
        {newsArray.slice(0, loadMore).map((newsItem, i) => (
          <NewsCard key={i} newsItem={newsItem} />
        ))}

        {loadMore <= newsResults && (
          <>
            <hr />
            <button
              className="loadMore"
              onClick={() => setLoadMore(loadMore + 15)}
            >
              Load More
            </button>
          </>
        )}
      </div>
    </Container>
  );
};

export default NewsContent;
