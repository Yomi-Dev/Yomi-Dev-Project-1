const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt the user to select media stream, pass video element, then play
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error) {
        // Catch Error Here
        console.log('whoops, error here:', error);
    }
}


    /**
     * Create a method to check if video is playing
     */
     Object.defineProperty(HTMLMediaElement.prototype, 'playing', {
        get: function(){
            return !!(this.currentTime > 0 && !this.paused && !this.ended && this.readyState > 2);
        }
    })
     
    /**
     * If the API is sharing a stream, open picture in picture
     * Else re-prompt for stream source
     */
  

    button.addEventListener('click', async () => {
        // Disable Button
        button.disabled = true;
        // Start Picture in Picture
        await videoElement.requestPictureInPicture();
        // Reset Button
        button.disabled = false;
    });


// On load
selectMediaStream();