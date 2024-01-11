---
title: "SosMedGrab API"
description: "Backend, Rest API, Python, Flask"
thumbnail: /img/sosmedgrab.png
published_at: "2022-01-09"
updated_at: "2022-01-09"
---

# SosMedGrab API

SosmedGrab API is a platform that allows users to access and retrieve various information from Instagram through the use of links. With its outstanding features, SosmedGrab API can extract various content such as images, videos, Reels, Stories, and user information. Through an easy-to-use integration, users can quickly and efficiently access these contents for various purposes such as analysis, monitoring, or research. With the ability to provide direct access to various elements of Instagram content, SosmedGrab API becomes an effective solution to obtain the necessary data from this leading social media platform.

## Installation

```bash
git clone https://github.com/SukunDev/sosmedgrab-api.git
cd sosmedgrab-api
npm i -g vercel
vercel dev
```

## Rest API

The example usage of the rest api is below.

### Request

`POST /instagram`

```bash
curl -i -d "target_url=https://www.instagram.com/reel/C06xLG0I-gv/" http://localhost:3000/instagram
```

### Response

```
HTTP/1.1 200 OK
cache-control: public, max-age=0, must-revalidate
Content-Type: application/json
Content-Length: 2390
Access-Control-Allow-Origin: *
server: Vercel
x-vercel-id: dev1::dev1::111eo-1704546679997-ebf8573449ad
x-vercel-cache: MISS
Date: Sat, 06 Jan 2024 13:11:22 GMT
Connection: keep-alive
Keep-Alive: timeout=5

{
    "status": true,
    "user": {
        "biography": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "category name": "Dummy Category",
        "full name": "John Doe",
        "jumlah followers": 5000,
        "jumlah following": 200,
        "jumlah responses": 150,
        "profile picture": "https://dummyimage.com/320x320/000000/ffffff",
        "user id": 1234567890,
        "username": "john.doe"
    },
    "items": [
        {
            "caption": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. #dummycaption #loremipsum #dummydata",
            "media": {
                "height": 1920,
                "thumbnail": "https://dummyimage.com/480x480/000000/ffffff",
                "type": "image",
                "url": "https://dummyimage.com/1080x720/000000/ffffff"
            },
            "media_id": "12345678901234567890",
            "product_type": "dummy",
            "shortcode": "ABC123"
        }
    ]
}
```

Source Code: [Github](https://github.com/SukunDev/sosmedgrab-api)
