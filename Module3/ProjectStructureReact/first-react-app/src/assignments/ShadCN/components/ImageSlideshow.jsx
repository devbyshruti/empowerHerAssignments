import { useState } from "react";
import { Card, CardContent, CardHeader, Cardtitle } from "@components/ui/card"
import { Button } from "@components/ui/button";

const images = [

];

export default function ImageSlideshow() {
    const [index, setIndex] = useState(0) 

    const nextImage = () => {
        setIndex((prev) => (prev+1) % images.length);
    }

    const prevImage = () => {
        setIndex((prev) => (prev-1+images.length) % images.length);
    };

    return (
        <Card className="max-w-md mx-auto mb-10">
            <CardHeader>
                <CardTitle>Image Slideshow</CardTitle>
            </CardHeader>

            <CardContent className="flex flex-xol items-center gap-4">
                <img
                src={images[index]}
                alt="slideshow"
                className="rounded-md"
                />

                <div className="flex gap-4">
                    <Button onClick={prevImage}>Previous</Button>
                    <Button onClick={nextImage}>Next</Button>

                </div>

            </CardContent>
        </Card>
    );
}