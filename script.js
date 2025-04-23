document.addEventListener('DOMContentLoaded', () => {
    const title = document.querySelector('.title');
    const videoContainer = document.querySelector('.video-container');
    const musicInfo = document.querySelector('.music-info');

    // Add hover effect to title
    title.addEventListener('mouseover', () => {
        title.style.transform = 'scale(1.1)';
        title.style.transition = 'transform 0.3s ease';
    });

    title.addEventListener('mouseout', () => {
        title.style.transform = 'scale(1)';
    });

    // Add floating animation to video container
    setInterval(() => {
        videoContainer.style.opacity = '0.8';
        videoContainer.style.transition = 'opacity 1s ease';
        
        setTimeout(() => {
            videoContainer.style.opacity = '1';
        }, 1000);
    }, 3000);

    // Add pulse animation to music info
    setInterval(() => {
        musicInfo.style.transform = 'scale(1.05)';
        musicInfo.style.transition = 'transform 0.5s ease';
        
        setTimeout(() => {
            musicInfo.style.transform = 'scale(1)';
        }, 500);
    }, 4000);
});