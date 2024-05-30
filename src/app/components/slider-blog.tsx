"use client";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface PostAttributes {
    title: string;
    body: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
}

interface Post{
    id: string;
    attributes: PostAttributes;
}

type Props = {
    posts: Post[];
}

export default function SliderBlog({posts}: Props) {
    return(
        <Swiper breakpoints={{
            320:{
                slidesPerView:1,
                spaceBetween:15,
            },
            768:{
                slidesPerView:1,
                spaceBetween:15,
            },
            1024:{
                slidesPerView:1,
                spaceBetween:15,
            },
            }
        }
        freeMode={true} pagination={{
            clickable:true,
        }}
        modules={[Pagination]} className=" h-[340px] md:h-[340px] w-[270px] md:w-[600px]">
            {
                Array.isArray(posts) && posts.map((post, index) => (
                    <SwiperSlide key={index}>
                        <div className=" overflow-auto flex px-6 py-8 h-full md:h-[290px] rounded-lg cursor-pointer bg-[rgba(65,47,123,0.15)] sm:flex-col gap-x-6 sm:gap-x-0 group hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300 hover:border-secondary border-2">
                            {/* <img src={post.img} className=" w-1/2 h-full rounded-lg" alt="Imagen de prueba"/> */}
                            <div>
                            {/* <img src={post.img} alt={post.title} className="h-full w-fit max-h-40 rounded-lg" /> */}
                            
                                <h3 className=" mb-2 text-lg font-extrabold">{post.attributes.title}</h3>
                                <p className=" text-xs w-fit font-semibold text-emerald-600 bg-emerald-100 rounded-full">{post.attributes.publishedAt}</p>
                                <p className=" text-sm">{post.attributes.body}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    )
}