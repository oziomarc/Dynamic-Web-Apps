import { ClientRequest } from "http";
import React, { useMemo } from "react";
import { useParams } from "react-router";
import Data from "../components/data"

function Article() {
    const { id } = useParams();

    const articleData = Data.find((article) => article.id === id)

    const date = useMemo(() => {
        if (!articleData) return "";
        const parsedDate = new Date(articleData.publishedDate)

        return parsedDate.toDateString();
    }, [articleData]);

    return (
        <main className="article">
            <header className="article--header" 
                style={{
                    backgroundImage: `url('${articleData.image.url}')`, 
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                }}
            >
                <div className="article--header--wrapper">
                    <h1>{articleData.title}</h1>
                    <p>{date}</p>
                    <p className="blurb">{articleData.blurb}</p>
                </div>
            </header>
            <section className="article--content">
                {/*where content goes*/}
            </section>
        </main>
    );
}
export default Article