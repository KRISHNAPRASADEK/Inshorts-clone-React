import axios from "axios";
import "./App.css";
import React, { useEffect, useState } from "react";
import Footer from "./components/Footer/Footer";
import NavInshorts from "./components/NavInshorts";
import NewsContent from "./components/NewsContent/NewsContent";

function App() {
  const [category, setCategory] = useState("general");
  const [newsArray, setNewsArray] = useState([]);
  const [newsResults, setNewsResults] = useState();
  const [loadMore, setLoadMore] = useState(14);

  const newsApi = async () => {
    try {
      await axios
        .get(
          `https://saurav.tech/NewsAPI/top-headlines/category/${category}/in.json`
        )
        .then((res) => {
          setNewsArray(res.data.articles);
          setNewsResults(res.data.totalResults);
        });
    } catch (error) {
      console.warn(error);
    }
  };

  useEffect(() => {
    newsApi();
    // eslint-disable-next-line
  }, [newsResults, category, loadMore]);

  return (
    <div className="App">
      <NavInshorts setCategory={setCategory} setLoadMore={setLoadMore} />
      {newsResults && (
        <NewsContent
          newsArray={newsArray}
          newsResults={newsResults}
          loadMore={loadMore}
          setLoadMore={setLoadMore}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;
