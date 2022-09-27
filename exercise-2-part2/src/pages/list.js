import React from "react"
import data from "../components/data";
import ArticleCard from 


function List() {
    return (
        <main className="pageWrapper">
            <h1>Articles List</h1>
                {Data.map((article, i) => (
                    <ArticleCard
                    key={i}
                    blurb={article.blurb}
                    date={article.publishedDate}
                    imageAlt={article.image.alt}
                    imageSrc={article.image.url}
                    title={article.title}
                    />
                ))}
        </main>
    );
}

export default List