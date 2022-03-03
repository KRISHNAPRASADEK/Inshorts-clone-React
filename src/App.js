import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import NavInshorts from "./components/NavInshorts";
import NewsContent from "./components/NewsContent/NewsContent";
// import apiKey from "./data/config";

function App() {
  const [category, setCategory] = useState("general");
  const [newsArray, setNewsArray] = useState([]);
  const [newsResults, setNewsResults] = useState();
  const [loadMore, setLoadMore] = useState(15);

  const newsApi = async () => {
    try {
      // const proxyUrl = "https://cors-anywhere.herokuapp.com/";

      const news = await axios.get(
        // `https://${proxyUrl}newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}&category=${category}&pageSize=${loadMore}`
        `https://saurav.tech/NewsAPI/top-headlines/category/${category}/in.json`
      );
      setTimeout(() => {
        setNewsArray(news.data.articles);
        setNewsResults(news.data.totalResults);
      }, 1000);
    } catch (error) {
      console.warn(error);
    }
  };

  useEffect(() => {
    newsApi();
    // eslint-disable-next-line
  }, [newsResults, category, loadMore]);

  console.warn(newsResults);

  return (
    <div className="App">
      <NavInshorts setCategory={setCategory} setLoadMore={setLoadMore} />
      <NewsContent
        newsArray={newsArray}
        newsResults={newsResults}
        loadMore={loadMore}
        setLoadMore={setLoadMore}
      />
      <Footer />
    </div>
  );
}

export default App;
