import { useCallback, useEffect, useRef, useState } from 'react';

function useWebcam() {
  const videoElementRef = useRef<HTMLVideoElement>(null);
  const imageElementRef = useRef<HTMLCanvasElement>(null);
  const [reload, setReload] = useState(false);

  const reloadVideo = (): void => {
    setReload((status) => !status)
  }

  const mirrorWebcam = useCallback(async (videoRef: HTMLVideoElement) => {
    try {
      const media = await navigator
        .mediaDevices
        .getUserMedia({ video: true });

      videoRef.srcObject = media;
      videoRef.play();
    } catch (err) {
      console.error(err);
    }
  }, []);

  const captureImage = useCallback(() => {
    const canvas = imageElementRef.current;
    if (canvas && videoElementRef.current) {
      canvas.height = 492;
      canvas.width = 665;

      const context = canvas.getContext('2d');

      if (context) {
        context.drawImage(videoElementRef.current, 0, 0);
      }

      videoElementRef.current;
      return canvas.toDataURL() || "";
    }
  }, []);

  useEffect(() => {
    if (videoElementRef.current) {
      mirrorWebcam(videoElementRef.current);
    }
  }, [videoElementRef.current, reload]);

  return {
    videoElementRef, imageElementRef, captureImage, reloadVideo
  };
}

export default useWebcam;
