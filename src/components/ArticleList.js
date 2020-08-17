import React from 'react'
import { Link } from 'react-router-dom'


export default function ArticleList(props) {
    const { state } = props
    const articleList = state.length ? (
        state.map(article => {
            return (
                <div className="articleDiv" key={article.id}>
                    {/* <img src={"https://raw.githubusercontent.com/MonolithOfficial/darkwirejsons/master/images/" + article.photo} alt=""/> */}
                    <img src={article.image}/>
                    <div>
                        <Link to={"/" + article.content.split('.')[0]}><p className="articleTitle">{article.title}</p></Link>
                        <p className="articleDescription">{article.desc}</p>
                        <p className="articleAuthorAndTime">By {article.author} | {article.pubDate}</p>
                        <p className="articleCategory">{article.category}</p>
                    </div>
                </div>
            )
        })
    ) : (
        <h4>Loading, please stand by.</h4>
    )
    return (
        <div className="wrapper">
            { articleList }
        </div>
    )
}
