import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export class Slideshow extends Component {
    state = {
        slides: [],
        activeSlide: 1 
    }

    componentDidMount(){
        axios.get("https://raw.githubusercontent.com/MonolithOfficial/darkwirejsons/master/articles.json")
        .then(res => {
            this.setState({
                slides: res.data
            })
            showFirstSlide();
            
            
            
        })
        this.interval = setInterval(() => showSlides(), 5000)
        // setInterval(() => this.setState({ activeSlide: x++}), 6000);
        

    }

    componentDidUpdate(){
        console.log(this.state.activeSlide)
    }

    componentWillUnmount(){
        
        clearInterval(this.interval);
    }

     


    render() {
        // setTimeout(showFirstSlide(), 200);
        const { slides } = this.state;
        const slidesList = slides.length ? (
            slides.map(slide => {
                return (

                    <Link to={"/" + slide.content} key={slide.number}>
                        <div className="mySlides fade">
                            <div className="numbertext">{slide.number} / {slides.length}</div>
                            <img src={"https://raw.githubusercontent.com/MonolithOfficial/darkwirejsons/master/images/" + slide.photo} alt="" style={{width: "100%"}}/>
                            <div className="text">{slide.title}</div>
                            
                        </div>
                    </Link>
                    
                )
            })
        ) : (
            <h3 className="loading">Loading, please wait</h3>
        )
        
        return (
            <div>
                {slidesList}
            </div>
        )
    }
}

let x = 0
const showSlides = () => {
    let allSlides = document.querySelectorAll('.mySlides')

    if (x === allSlides.length - 1){
        x = 0;
    }
    for (let i = 0; i < allSlides.length; i++) {
        allSlides[i].style.display = "none";
    }
    x++;
    allSlides[x - 1].style.display = "block";
    // allSlides[x - 1].style.display = "none";
    console.log(x)
}

const showFirstSlide = () => {
    const allSlides = document.querySelectorAll('.mySlides');
    
    setTimeout(() => {
        allSlides[0].style.display = "block"
    }, 400)
    
}

export default Slideshow;
