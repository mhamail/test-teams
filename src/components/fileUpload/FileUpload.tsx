"use client"
import React, { useState, FC } from 'react'
import Resizer from "react-image-file-resizer"
import Image from 'next/image';

interface Props {
    handleImage: (image: any) => void
}

const FileUpload: FC<Props> = ({ handleImage }) => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [showImage, setShowImage] = useState(null);

    const handleImageChange = (event: any) => {
        const file = event.target.files[0];
        let handleFile = file.type.startsWith('image/')
        if (!handleFile) {
            alert('Please select an image file.');
            return
        }

        //Resizer
        if (file) {
            Resizer.imageFileResizer(
                file,
                720,
                720,
                "JPEG",
                90,
                0,
                (uri: any) => {
                    setSelectedImage(uri);
                    handleImage(uri)
                },
                "file"
            )
        }

    };
    //  set in state and to show file
    if (selectedImage) {
        const reader = new FileReader();

        reader.onload = (e: any) => {
            setShowImage(e.target.result);
        };
        reader.readAsDataURL(selectedImage);
    }

    return (
        <div  className='rounded-2xl space-y-5'>
            <input
               className=' border border-blue-600 p-2 rounded-md hover:bg-blue-600 hover:text-white transition duration-300'
                type="file"
                accept="image/*"
                onChange={handleImageChange}
            />
            {showImage && (
                <Image
                className=' rounded-md'
                    src={showImage}
                    alt="Selected Image"
                    height={200}
                    width={200}
                />
            )}
        </div>
    )
}

export default FileUpload