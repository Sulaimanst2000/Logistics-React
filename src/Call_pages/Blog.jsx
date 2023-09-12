import React from 'react'
import house1 from "../image/house-1.png"
import house2 from "../image/house-2.png"
import house3 from "../image/house-3.png"

export const Blog = () => {
  return (
    <section class="blog" data-aos="fade-in">
        <div class="container">
            <h2 class="blog-head">Blogs</h2>
            <div class="row">
                <div class="col-md-4 col-12">
                    <div class="box-blog">
                        <img src={house1} alt="" />
                        <h4>perspiciatis unde omnis</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been.</p>
                    </div>
                </div>
                <div class="col-md-4 col-12">
                    <div class="box-blog">
                        <img src={house2} alt="" />
                        <h4>perspiciatis unde omnis</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been.</p>
                    </div>
                </div>
                <div class="col-md-4 col-12">
                    <div class="box-blog">
                        <img src={house3} alt="" />
                        <h4>perspiciatis unde omnis</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
