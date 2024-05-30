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
                    // <div key={index} className="flex flex-col items-center justify-center p-5 bg-white rounded-lg">
                    //     <img src={post.img} className="w-32 h-32 rounded-full" alt="Imagen de prueba"/>
                    //     <h3 className="text-xl font-bold text-center">
                    //         {post.title}
                    //     </h3>
                    //     <p className="text-sm text-gray-400">
                    //         {post.description}
                    //     </p>
                    //     <p className="text-xs text-gray-400">
                    //         {post.date}
                    //     </p>
                    // </div>
                    <SwiperSlide key={index}>
                        <div className=" overflow-auto flex px-6 py-8 h-full md:h-[290px] rounded-lg cursor-pointer bg-[rgba(65,47,123,0.15)] sm:flex-col gap-x-6 sm:gap-x-0 group hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300 hover:border-secondary border-2">
                            {/* <img src={post.img} className=" w-1/2 h-full rounded-lg" alt="Imagen de prueba"/> */}
                            <div>
                            {/* <img src={post.img} alt={post.title} className="h-full w-fit max-h-40 rounded-lg" /> */}
                            
                                <h3 className=" mb-4 text-lg"><strong>{post.attributes.title}</strong></h3>
                                <p className=" text-sm">{post.attributes.body}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    )
}