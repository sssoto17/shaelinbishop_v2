"use client";

export default function imageLoader({ src, width, quality }) {
    const url = new URL(src);
    let directPath = url.pathname;
    
    
    if (url.pathname.startsWith('/api/media/file')) {
        let path = url.pathname.split('file');
        directPath = `media${path[1]}`;
    }
    
    const test = `${url.protocol}//${url.host}${directPath}?w=${width}&q=${quality || 75}`;

    // console.log("HOST:", url.host)
    // console.log("HOST:", process.env.NEXT_PUBLIC_PAYLOAD_URL)
    console.log("IMG:", test)

    return test
}