import React from 'react'
import list from '../../public/list.json'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import Cards from './Cards';

const FreeBook = () => {

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
    
    const filterData = list.filter((data)=>data.category === "free")

  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 my-10'>
        <div>
        <h1 className='font-semibold text-xl pb-2'>Free Offer Cources</h1> 
         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem ullam asperiores ad dolores earum dolor amet,lit. Minima corrupti dicta nostrum quasi sint culpa corporis eos asperiores placeat, doloribus delectus eaque architecto est eligendi, ducimus dolorum ipsum quod numquam!</p>
        </div>
      
      <div>
      <Slider {...settings}>
       {filterData.map((item)=>(
        <Cards key={item.id} item={item}/>
       ))}
      </Slider>
      </div>
      </div>
    </>
  )
}

export default FreeBook
