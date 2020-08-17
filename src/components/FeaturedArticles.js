import React from 'react'
import { Link } from 'react-router-dom';

const FeaturedArticles = props => {
    const { articles } = props
    const featuredArticles = [articles[getRandomArbitrary(0, articles.length)], articles[getRandomArbitrary(0, articles.length)]]
    // console.log(featuredArticles)
    const sideArticleList = articles.length ? (
        featuredArticles.map(article => {
            return (
                <div className="featuredArticle" key={article.number}>
                    <img src={"https://raw.githubusercontent.com/MonolithOfficial/darkwirejsons/master/images/" + article.photo} alt=""/>
                    <Link to={"/" + article.content.split('.')[0]}><p className="articleTitle">{article.title}</p></Link>
                    <p className="articleCategory">{article.category}</p>
                </div>
            )
        })
    ) : (
        <h3>Loading, please wait...</h3>
    )
    return (
        <div>
            <h3 style={{"color": "white"}}>Featured Articles</h3>
            {sideArticleList}
        </div>
    )
}

function getRandomArbitrary(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

export default FeaturedArticles

