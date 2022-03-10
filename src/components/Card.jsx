import React, { useState, useEffect } from "react";
import CardItem from "./CardItem";
import "./css/Card.css";
import Navbar from "./Navbar";
function Card({ setProgress }) {
  const [articles, setArticles] = useState([]);
  const [category, setCategory] = useState("general");
  const [country, setCountry] = useState("in");
  const [countryName, setCountryName] = useState("India");

  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  useEffect(() => {
    const updatePage = async () => {
      setProgress(10);
      let url = `https://raw.githubusercontent.com/pranavpk404/news-api/main/${country}/${category}.json`;
      let data = await fetch(url);
      setProgress(30);
      let resp = await data.json();
      window.scrollTo(0, 0);
      setProgress(50);
      setArticles(resp.articles);
      setProgress(100);
    };
    document.title = `Latest Headlines About: ${capitalizeFirstLetter(
      category
    )}`;
    updatePage();
  }, [category, country, setProgress, setArticles]);

  return (
    <div className="container">
      <Navbar
        setCategory={setCategory}
        setCountry={setCountry}
        setCountryName={setCountryName}
      />

      <h1 id="newsName">
        {`Showing Headlines About ${capitalizeFirstLetter(
          category
        )} - ${countryName}`}
      </h1>
      {articles.map((element) => {
        if (element.url === null || element.image === null) {
          return null;
        } else {
          return (
            <div className="card" key={element.title}>
              <CardItem
                imgUrl={element.urlToImage}
                title={element.title}
                description={element.description}
                published_time={element.publishedAt}
                url={element.url}
                site_name={element.author}
              ></CardItem>
            </div>
          );
        }
      })}
    </div>
  );
}

export default Card;
