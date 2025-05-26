import { getPostBySlug } from "@/app/APIREQ/commands";
import { notFound } from "next/navigation";
import styles from '../eventPage.module.scss'
import Link from "next/link";
import LocationSVG from "@/app/components/SVG/LocationSVG";
import CalendarSvg from "@/app/components/SVG/CalendarSvg";
import TicketSvg from "@/app/components/SVG/TicketSVG";
import Slider from "@/app/components/Slider/Slider";
import EventHeroSection from "@/app/events/sections/EventHeroSection";
import {useStore} from "@/app/store/layoutStore";
import Timeline from "@/app/events/sections/Timeline";
import FullImage from "@/app/events/sections/FullImage";
import RegistrationForm from "@/app/events/sections/RegistrationForm";
import Home from "@/app/events/sections/RegistrationForm";
export default async function PostPage({ params }) {
    const eventId = params.eventId;

    const post = await getPostBySlug(eventId);

    if (!post) {
        notFound();
    }




    return (
        <>
            <EventHeroSection post={post}/>
            {post.acf.add_time_line && <Timeline data={post.acf.time_line_points} />}
            {post.acf.add_wide_view_image && <FullImage src={post.acf.wide_view_image.url}/>}
            {post.acf.open_registration &&
                <RegistrationForm event_name={post.acf.title} event_id={post.id} form_request={post.acf.forms}/>}


        </>
    );
}