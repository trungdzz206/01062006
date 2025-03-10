import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Camera, Trash2 } from "lucide-react";

export default function PhotoBook() {
  const [photos, setPhotos] = useState([]);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const startCamera = async () => {
    if (navigator.mediaDevices?.getUserMedia) {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
    }
  };

  const capturePhoto = () => {
    const canvas = canvasRef.current;
    const video = videoRef.current;
    const context = canvas.getContext("2d");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    const imageData = canvas.toDataURL("image/png");
    setPhotos([...photos, imageData]);
  };

  const deletePhoto = (index) => {
    setPhotos(photos.filter((_, i) => i !== index));
  };

  return (
    <div className="p-6 text-center">
      <h1 className="text-2xl font-bold mb-4">PhotoBook</h1>
      <div className="flex justify-center mb-4">
        <video ref={videoRef} autoPlay className="border rounded-lg" />
      </div>
      <Button onClick={startCamera} className="mb-2">Bật Camera</Button>
      <Button onClick={capturePhoto} className="ml-2 bg-blue-500">
        <Camera className="w-5 h-5" /> Chụp Ảnh
      </Button>
      <canvas ref={canvasRef} className="hidden" />
      <div className="grid grid-cols-3 gap-4 mt-6">
        {photos.map((photo, index) => (
          <Card key={index} className="relative">
            <CardContent>
              <img src={photo} alt={`Captured ${index}`} className="rounded-lg" />
              <Button
                onClick={() => deletePhoto(index)}
                className="absolute top-2 right-2 bg-red-500"
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
