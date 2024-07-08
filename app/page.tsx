"use client";

import Image from "next/image";
import { useState } from "react";
import axios from "axios";
// import handleSubmit from "@/actions"

export default function Home() {
    const [image, setImage] = useState("");
    const [imageClass, setImageClass] = useState("");


    const handleFileChange = async(e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files[0]) {
        const selectedFile = e.target.files[0];
        setImage(URL.createObjectURL(selectedFile));
      } else {
        console.log("No file selected");
      };
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        try {
            const response = await axios.post("https://lawallanre-image-classification.hf.space/classify", formData);
            const imageClass = response.data.class;
            setImageClass(imageClass)
        } catch (error) {
            console.error("Error uploading file:", error);
            setImageClass("");
            alert("Please input any image found among to categories");
        }
    };

    return (
        <main className="min-h-screen flex justify-center items-center">
            <form className="flex flex-col items-center justify-center" onSubmit={handleSubmit}>
                <span className="text-center text-sm mb-4 font-semibold text-green-600">Upload an image to classify it among banana, apple, strawberries and mango</span>
                <p className="font-bold">Note that this model is 65% accurate!</p>
                <div className="mb-8">
                    <div className="relative border hover:scale-[1.1] w-[300px] h-[300px] transition-all cursor-pointer">
                        {image ? (
                            <Image
                                src={image}
                                alt="Uploaded Image"
                                width={300}
                                height={300}
                                className="mb-8 object-cover h-[300px] w-[300px]"
                            />
                        ) : (
                            <Image
                                src="/image.png"
                                fill
                                alt="Placeholder Image"
                            />
                        )}
                    </div>
                </div>
                <input
                    type="file"
                    placeholder="Enter your file"
                    className="w-80 h-12 px-4 mb-4 border"
                    name="image"
                    onChange={handleFileChange}
                />
                <button
                    type="submit"
                    className="w-80 h-12 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition-all hover:font-semibold"
                >
                    Get Image Class
                </button>
                <div className="mt-2 text-sm">
                {imageClass ? (<p className="font-semibold">{`You just uploaded a ${imageClass}`}</p>) : (<p>Please input the image found among to categories</p>)}
                </div>
            </form>
        </main>
    );
}
