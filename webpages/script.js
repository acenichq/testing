document.addEventListener('DOMContentLoaded', function () {
    const apiKey = 'AIzaSyAfiE_UupfPATBo1kJI3AiLz6dvlosFofc';
    const channelId = 'UCt5FBx5YaZ7QZmd4sDEJYmw';
    const videosContainer = document.getElementById('videos-container');

    // Fetch videos using the YouTube Data API
    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&maxResults=10&order=date&key=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            // Display each video
            data.items.forEach(item => {
                const videoId = item.id.videoId;
                const videoTitle = item.snippet.title;

                const iframe = document.createElement('iframe');
                iframe.src = `https://www.youtube.com/embed/${videoId}`;
                iframe.title = videoTitle;

                const fullscreenButton = document.createElement('button');
                fullscreenButton.innerText = 'Fullscreen';
                fullscreenButton.classList.add('fullscreen-button');
                fullscreenButton.addEventListener('click', function () {
                    toggleFullScreen(iframe);
                });

                const videoContainer = document.createElement('div');
                videoContainer.classList.add('video-container');
                videoContainer.appendChild(iframe);
                videoContainer.appendChild(fullscreenButton);

                videosContainer.appendChild(videoContainer);
            });
        })
        .catch(error => console.error('Error fetching videos:', error));

    // Function to toggle full-screen mode
    function toggleFullScreen(element) {
        if (!document.fullscreenElement &&    // alternative standard method
            !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
            // current working methods
            if (element.requestFullscreen) {
                element.requestFullscreen();
            } else if (element.msRequestFullscreen) {
                element.msRequestFullscreen();
            } else if (element.mozRequestFullScreen) {
                element.mozRequestFullScreen();
            } else if (element.webkitRequestFullscreen) {
                element.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
            }
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            }
        }
    }
});


document.addEventListener('DOMContentLoaded', function () {
    const sidebar = document.querySelector('.sidebar');
    const toggleBtn = document.querySelector('.toggle-btn');

    toggleBtn.addEventListener('click', function () {
        const sidebarLeft = parseInt(getComputedStyle(sidebar).left);
        const newLeft = sidebarLeft === 0 ? -250 : 0;
        sidebar.style.left = newLeft + 'px';
    });
});
