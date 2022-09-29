import React from "react"
import Data from "../components/data";
import ArticleCard from "../components/ArticleCard";


function List() {
    return (
        <main className="pageWrapper">
            <h1>Articles List</h1>
                {Data.map((article, i) => (
                    <ArticleCard
                    key={i}
                    blurb={article.blurb}
                    date={article.publishedDate}
                    id={article.id}
                    imageAlt={article.image.alt}
                    imageSrc={article.image.url}
                    title={article.title}
                    />
                ))}
        </main>
    );
}

export default List