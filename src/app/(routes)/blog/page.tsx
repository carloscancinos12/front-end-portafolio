import AvatarBlog from "@/app/components/avatar-blog";
import CircleImage from "@/app/components/circle-image";
import SliderBlog from "@/app/components/slider-blog";
import TransPage from "@/app/components/trans-page";

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

interface ApiResponse {
    data: Post[];
}

import axios from "axios";
import { parsedEnv } from "../../../../env";

export default async function BlogPage(){
    const config = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${parsedEnv.API_KEY}`,
        }
      };
    try {
        // Realiza la petición con los headers configurados
    const response = await axios.get<ApiResponse>(`${parsedEnv.API_URL}`, config);
    console.log(response.data);

    // Asumiendo que los posts están dentro de una propiedad llamada 'data'
    const posts = response.data.data;
    
    return(
        <>
            <TransPage></TransPage>
            <CircleImage></CircleImage>
            {/* <AvatarBlog></AvatarBlog> */}
            <div className="px-6 grid items-center justify-center h-fit pt-10 md:pt-0 md:h-screen max-w-7xl gap-1 mx-auto md:grid-cols-2 md:px-20">
                {/* Introduccion */}
                <div className=" max-w-[450px] mt-20 md:mt-0">
                    <h1 className=" text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5">
                        Blog
                        <span className=" font-bold text-secondary">
                            {" personal"}
                        </span>
                    </h1>
                    <p className=" mb-3 text-xl text-gray-300">
                        {"Aquí encontrarás mis pensamientos, opiniones y reflexiones sobre diversos temas.Aquí encontrarás mis pensamientos, opiniones y reflexiones sobre diversos temas.Aquí encontrarás mis pensamientos, opiniones y reflexiones sobre diversos temas."}
                    </p>
                    {/* <button className="px-3 py-2 rounded-lg bg-secondary hover:bg-secondary/65">
                        {"Ver blog"}
                    </button> */}
                </div>
                <div>
                    <SliderBlog posts={posts}></SliderBlog>
                </div>
            </div>
        </>
    );
    } catch (error) {
        console.error("Error fetching data: ", error);
        return (
        <main>
            <h1>Error al cargar los datos</h1>
        </main>
        );
    }
}