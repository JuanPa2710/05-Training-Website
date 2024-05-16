var player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('video-aboutme', {
        events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
        }
  });
}

function onPlayerReady(event) {
    // El video está listo para reproducirse
    checkVisibility();
    window.addEventListener('scroll', checkVisibility, { passive: true });
    window.addEventListener('resize', checkVisibility, { passive: true });
}

function onPlayerStateChange(event) {
    // Maneja los cambios de estado del reproductor si es necesario
}

function checkVisibility() {
    const iframe = player.getIframe();
    const rect = iframe.getBoundingClientRect();
    if (rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {
        player.playVideo();
    } else {
        player.pauseVideo();
    }
}

onYouTubeIframeAPIReady()