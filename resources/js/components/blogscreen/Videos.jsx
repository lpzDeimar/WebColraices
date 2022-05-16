import React, { useState, useEffect, memo } from "react";

const apiKey = "AIzaSyAWQ4bAayePmmYTrnhxvwefzcQQaTmQk2k";
const channelId = "UCiBystYzqzabHULJWwgAjnw";
const apiUrl = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=3`;

export const Videos = memo(() => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const videos = async () => {
            const resp = await fetch(apiUrl);
            const videos = await resp.json();
            setVideos(videos.items);
        };
        videos();
    }, []);

    return (
        <section className="blogscreen-video" id="videos">
            <div className="video-content">
                <h4>
                    Disfruta <span>nuestros videos</span>
                </h4>
                <div className="videos-container">
                    {videos &&
                        videos.map((video) => {
                            const videoId = video.id.videoId;
                            return (
                                <article key={videoId}>
                                    <iframe
                                        src={`https://www.youtube.com/embed/${videoId}?modestbranding=1`}
                                        title={video.snippet.title}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                    <p>{video.snippet.title}</p>
                                </article>
                            );
                        })}
                </div>
                <a
                    href="https://www.youtube.com/c/Colraicesserviciosinmobiliariosfinancieros"
                    target="_blank"
                >
                    Sigue navegando
                </a>
            </div>
        </section>
    );
});
