import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

function News(props) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  async function UpdateNews() {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=c82c2b9d35a342dd9674e183e4681cf7&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    console.log(articles)
  }
  const handleNextClick = async () => {
    setPage(page + 1);
    UpdateNews();
  };
  const handlePreviousClick = async () => {
    setPage(page - 1);
    UpdateNews();
  };
  useEffect(() => {
    UpdateNews();
  }, []);

  return (
    <div className="container my-3" >
      <h2>{props.headline}</h2>
      <div className="row my-3">
        {!loading &&
          articles.map((element) => {
            return (
              <div className="col-md-3" key={element.url} style={{ height: '29rem' }}>
                <NewsItem
                  title={element.title.split(' - ')}
                  imgUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source.name}
                />
              </div>
            );
          })
        }
      </div>
      <div className="d-flex justify-content-between">
        <button
          disabled={page <= 1}
          type="button"
          className="btn btn-dark"
          onClick={handlePreviousClick}
        >
          &larr;Previous
        </button>
        {loading && <Spinner />}
        <button
          disabled={page + 1 > Math.ceil(totalResults / props.pageSize)}
          type="button"
          className="btn btn-dark"
          onClick={handleNextClick}
        >
          Next&rarr;
        </button>
      </div>
    </div>
  );
}

export default News;
