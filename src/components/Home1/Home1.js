import React, { useState, useEffect, useRef } from "react";
import './Home1.css';
import logo1 from "../../asserts/logo1.png"
import logo2 from "../../asserts/logo2.png"
import logo3 from "../../asserts/logo3.png"
import logo4 from "../../asserts/logo4.png"
import arrow1 from "../../asserts/arrow1.svg"
import arrow2 from "../../asserts/arrow2.svg"

function CardGroup() {
    const [startIndex, setStartIndex] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const cardsPerPage = 6; // Number of cards displayed per page
    const containerRef = useRef(null);

    const cards = [
        {
            id: 1,
            image: logo1, 
            text: "Harvard University",
            text1:"Cambridge, Massachusetts, UK"
        },
        {
            id: 2,
            image: logo2, 
            text: "Oxford University",
            text1:"Oxford, England"
        },
        {
            id: 3,
            image: logo3,
            text: "Stanford University",
            text1:"Stanford California"
        },
        {
            id: 4,
            image: logo4, 
            text: "Nanyang Technological University",
            text1:"Nanyang Ave, Singapura"
        },
        {
            id: 5,
            image: logo1, 
            text: "Harvard University",
            text1:"Cambridge, Massachusetts, UK"
        },
        {
            id: 6,
            image: logo2, 
            text: "Oxford University",
            text1:"Oxford, England"
        },
        {
            id: 7,
            image: logo3,
            text: "Stanford University",
            text1:"Stanford California"
        },
        {
            id: 8,
            image: logo4, 
            text: "Nanyang Technological University",
            text1:"Nanyang Ave, Singapura"
        },
    ];

    const totalPages = Math.ceil(cards.length / cardsPerPage);

    const visibleCards = cards.slice(startIndex, startIndex + cardsPerPage);

    const handleNext = () => {
        if (startIndex + cardsPerPage < cards.length) {
            setStartIndex(startIndex + cardsPerPage);
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevious = () => {
        if (startIndex - cardsPerPage >= 0) {
            setStartIndex(startIndex - cardsPerPage);
            setCurrentPage(currentPage - 1);
        }
    };

    const updateScroll = () => {
        const container = containerRef.current;
        if (container) {
            const scrollPosition = container.scrollLeft;
            const cardWidth = container.offsetWidth / cardsPerPage;
            const newPage = Math.floor(scrollPosition / cardWidth) + 1;
            setCurrentPage(newPage);
        }
    };

    useEffect(() => {
        const container = containerRef.current;
        if (container) {
            container.addEventListener('scroll', updateScroll);
            return () => {
                container.removeEventListener('scroll', updateScroll);
            };
        }
    }, []);

    return (
        <div className="main-container">
            <p className="container-p">Our Destinations</p>
            <div className="container">
                
                <div className="card-group">
                    {visibleCards.map((card, index) => (
                        <div className="card-10" key={index}>
                            <img src={card.image} alt={`Image ${card.id}`} />
                            <p className="card-p11">{card.text}</p>
                            <div className="card-box-1">
                                <p className="card-p12">{card.text1}</p>
                                <btn className="dots-btn">•••</btn>
                            </div>
                           
                        </div>
                    ))}
                </div>
            </div>
            <div className="navigation">
                <button onClick={handlePrevious}><img className="arrow-image" src={arrow2} alt="Previous" /></button>
               
                <button onClick={handleNext}><img className="arrow-image" src={arrow1} alt="Next" /></button>
            </div>
        </div>
    );
};

export default CardGroup;
