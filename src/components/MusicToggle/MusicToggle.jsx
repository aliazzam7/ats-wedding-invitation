import { useEffect, useRef, useState } from "react";
import "./MusicToggle.css";

export default function MusicToggle({ videoId }) {
  const playerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    let script = null;
    let isMounted = true;

    const createPlayer = () => {
      if (!isMounted) return;
      if (!window.YT || !window.YT.Player) return;
      if (playerRef.current) return;

      playerRef.current = new window.YT.Player("youtube-player", {
        videoId,

        width: "1",
        height: "1",

        playerVars: {
          autoplay: 0,
          controls: 0,
          loop: 1,
          playlist: videoId,
          playsinline: 1,
          rel: 0,
          modestbranding: 1,
        },

        events: {
          onReady: (event) => {
            const iframe = event.target.getIframe();

            if (iframe) {
              iframe.style.position = "fixed";
              iframe.style.width = "1px";
              iframe.style.height = "1px";
              iframe.style.left = "-10000px";
              iframe.style.top = "-10000px";
              iframe.style.opacity = "0";
              iframe.style.visibility = "hidden";
              iframe.style.pointerEvents = "none";
              iframe.style.border = "0";
            }
          },

          onStateChange: (event) => {
            if (!window.YT) return;

            if (event.data === window.YT.PlayerState.PLAYING) {
              setIsPlaying(true);
              setHasStarted(true);
            }

            if (event.data === window.YT.PlayerState.PAUSED) {
              setIsPlaying(false);
            }

            if (event.data === window.YT.PlayerState.ENDED) {
              setIsPlaying(false);
            }
          },

          onError: (event) => {
            console.error("YouTube Player Error:", event.data);
          },
        },
      });
    };

    if (window.YT && window.YT.Player) {
      createPlayer();
    } else {
      script = document.createElement("script");
      script.src = "https://www.youtube.com/iframe_api";
      script.async = true;
      document.body.appendChild(script);
      window.onYouTubeIframeAPIReady = createPlayer;
    }

    return () => {
      isMounted = false;

      if (playerRef.current) {
        playerRef.current.destroy();
        playerRef.current = null;
      }

      if (script && script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [videoId]);

  const toggleMusic = () => {
    const player = playerRef.current;

    if (!player || !window.YT) {
      return;
    }

    const state = player.getPlayerState();

    if (state === window.YT.PlayerState.PLAYING) {
      player.pauseVideo();
      setIsPlaying(false);
      return;
    }

    player.unMute();
    player.setVolume(100);
    player.playVideo();
    setHasStarted(true);
  };

  return (
    <div className="music">
      {/* YouTube player exists only for audio playback, kept fully hidden */}
      <div id="youtube-player" className="youtube-player" />

      <button
        type="button"
        className={`music__button ${isPlaying ? "music__button--playing" : ""}`}
        onClick={toggleMusic}
        aria-label={isPlaying ? "Pause our song" : "Play our song"}
      >
        <span className="music__icon" aria-hidden="true">
          {isPlaying ? (
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none">
              <rect x="6" y="5" width="3.2" height="14" rx="1" fill="currentColor" />
              <rect x="14.8" y="5" width="3.2" height="14" rx="1" fill="currentColor" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none">
              <path d="M8 5v14l11-7L8 5Z" fill="currentColor" />
            </svg>
          )}
        </span>
      </button>

      {!hasStarted && <span className="music__hint">Tap to play our song</span>}
    </div>
  );
}
