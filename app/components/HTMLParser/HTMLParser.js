'use client'

export default function HTMLContent({ html }) {
    return (
        <div
            className="html-content"
            dangerouslySetInnerHTML={{ __html: html }}
        />
    );
}