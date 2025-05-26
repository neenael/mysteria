'use client'
import { useEffect, useState, use } from 'react';
import {getCategories, getPostBySlug} from "@/app/API/commands";
export default function PostPage({params}) {
    const { eventId } = use(params);
    const [post, setPost] = useState(null);

    useEffect(() => {
        if (!eventId) return;

        const fetchPost = async () => {
            const data = await getPostBySlug(eventId);
            setPost(data);
        };
        fetchPost();



    }, [eventId]);

    if (!post) return <p>Загрузка...</p>;

    return (
        <div>
            <h1>{post.title.rendered}</h1>
           <p>{post.acf.mode}</p>
        </div>
    );
}