import React from 'react'
import {Carousel} from '../Call_pages/Carousel'
import { Main_Banner } from '../Call_pages/Main_Banner';
import { Product_Container } from '../Call_pages/Product_Container';
import {Storage_Need} from '../Call_pages/Storage_Need'
import { Work_Banner } from '../Call_pages/Work_Banner.';
import { Testimonial } from '../Call_pages/Testimonial';
import { Blog } from '../Call_pages/Blog';
export const Home = () => {
  return (
    <>
    <Main_Banner/>  
    <Carousel/> 
    <Product_Container/>
    <Storage_Need/>
    <Work_Banner/>
    <Testimonial/>
    <Blog/>
    </>
    )  
}
export default Home;