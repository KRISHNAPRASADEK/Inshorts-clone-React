import "./NewsContent.css";
import React from "react";
import { Container } from "@mui/material";
import NewsCard from "../NewsCard/NewsCard";

const NewsContent = ({ newsArray, newsResults, loadMore, setLoadMore }) => {
  return (
    <Container maxWidth="md">
      <div className="content">
        <div className="downloadMessage">
          <span className="downloadText">
            For the best experience use Inshorts App on your smartphone
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
          <NewsCard newsItem={newsItem} key={i} />
        ))}
        {loadMore <= newsResults && (
          <>
            <hr />
            <button
              className="loadMore"
              onClick={() => setLoadMore(loadMore + 14)}
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
