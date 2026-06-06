"use client";

const payloadUrl = process.env.NEXT_PUBLIC_PAYLOAD_URL;

export default function imageLoader({ src, width, quality }) {
    const fallbackBase = payloadUrl || 'http://localhost:3000'
    const source = new URL(src, fallbackBase);

    let pathname = source.pathname
    
    
    if (pathname.startsWith('/api/media/file')) {
        pathname = pathname.replace('/api/media/file', '/media')
        // let path = url.pathname.split('file');
        // directPath = `media${path[1]}`;
    }

    // if (pathname.startsWith('/api/images/file')) {
    //     pathname = pathname.replace('/api/images/file', '/images/file')
    // }

    const isLocalHost =
    source.hostname === 'localhost' ||
    source.hostname === '127.0.0.1' ||
    source.hostname === '::1'
    
    const origin = isLocalHost && payloadUrl ? new URL(payloadUrl).origin : source.origin
    return`${origin}${pathname}?w=${width}&q=${quality || 75}`

    // console.log("HOST:", url.host)
    // console.log("HOST:", process.env.NEXT_PUBLIC_PAYLOAD_URL)
    // console.log("IMG:", test)

    return test
}