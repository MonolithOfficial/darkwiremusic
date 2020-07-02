import React, { Component } from 'react'
import Axios from 'axios';

export class Article extends Component {
    state = {
        article: ''
    }

    componentDidMount(){
        let id = this.props.match.params.post_id;
        

        Axios.get("https://raw.githubusercontent.com/MonolithOfficial/darkwirejsons/master/" + id + '.json')
        .then(res => {
            this.setState({
                article: res.data
            })
        })
    }
    render() {
        const { article } = this.state;
        const articleTitle = article.length ? (
                <p className="mainTitle">{article[0].title}</p>
        ) : (
            <h4>No title</h4>
        )
        const articleBody = article.length ? (
            article.map(each => {
                return (
                    <div className="wrapperArticle" key={Number(each.place)}>
                        <h3 className="mainSubTitle">{each.place}. {each.name}</h3>
                        <p className="desc">{each.description}</p>
                        <img src={"https://raw.githubusercontent.com/MonolithOfficial/darkwirejsons/master/images/" + each.photo} alt=""/>
                    </div>
                    
                )
            })
        ) : (
            <h1>Loading. Please wait.</h1>
        )
        
        return (
            <div id="pageWrapper">
                <div className="mainTitleHolder">
                    {articleTitle}
                </div>
                {articleBody}
            </div>
        )
    }
}

export default Article
