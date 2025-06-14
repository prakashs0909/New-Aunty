import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const [articles, setarticles] = useState([]);
  const [loading, setloading] = useState(true);
  const [page, setpage] = useState(1);
  const [totalResults, settotalResults] = useState(0);

  const updatenews = async () => {
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.categary}&apiKey=${props.apiKey}&page=${page}&pagesize=${props.pagesize}`;
    setloading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let passedData = await data.json();
    props.setProgress(70);
    setarticles(passedData.articles);
    settotalResults(passedData.totalResults);
    setloading(false);
    props.setProgress(100);
  };

  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.categary)} - NewsAunty`;
    updatenews();
    // eslint-disable-next-line
  }, []);

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.categary}&apiKey=${props.apiKey}&page=${page + 1}&pagesize=${
      props.pagesize
    }`;
    setpage(page + 1);
    setloading(false);
    let data = await fetch(url);
    let passedData = await data.json();
    setarticles(articles.concat(passedData.articles));
    settotalResults(passedData.totalResults);
  };

  return (
    <div className="container my-3">
      <h2 className="text-center" style={{ marginTop: "81px" }}>
        NewsAunty - Top {capitalizeFirstLetter(props.categary)} Headline
      </h2>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={articles.length < 0 && <Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles.map((element) => {
              if (!element) return null; 
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 40) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 50)
                        : ""
                    }
                    imgurl={element.urlToImage}
                    url={element.url}
                    author={element.author}
                    date={element.publishedAt}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default News;
