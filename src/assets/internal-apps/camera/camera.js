const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const startButton = document.getElementById('startButton');
const captureButton = document.getElementById('captureButton');
const status = document.getElementById('status');
let stream = null;

async function startCamera() {
    try {
        stream = await navigator.mediaDevices.getUserMedia({ 
            video: { 
                width: { ideal: 1280 },
                height: { ideal: 720 }
            } 
        });
        video.srcObject = stream;
        startButton.disabled = true;
        captureButton.disabled = false;
        status.textContent = 'Camera is ready';
    } catch (err) {
        console.error('Error accessing camera:', err);
        status.textContent = 'Error: Could not access camera';
    }
}

async function capturePhoto() {
    if (!stream) return;

    // Set canvas size to match video
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    // Draw current video frame to canvas
    const context = canvas.getContext('2d');
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    // Convert canvas to blob
    canvas.toBlob(async (blob) => {
        if (!blob) return;

        try {
            // Create filename with timestamp
            const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
            const filename = `photo-${timestamp}.jpg`;

            // Create download link
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = filename;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);

            status.textContent = 'Photo saved successfully';
        } catch (err) {
            console.error('Error saving photo:', err);
            status.textContent = 'Error: Could not save photo';
        }
    }, 'image/jpeg', 0.95);
}

// Clean up when page is closed
window.addEventListener('beforeunload', () => {
    if (stream) {
        stream.getTracks().forEach(track => track.stop());
    }
}); 