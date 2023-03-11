import React, { useEffect, useState } from 'react';
import { Image } from 'cloudinary-react';
import { Pagination } from './Pagination';


export default function Home() {
    const [imageIds, setImageIds] = useState([]);

    const totalImage = imageIds.length;
    const [imagePerPage, setImagePerPage]= useState(9);
    const [currentPage, setCurrentPage] = useState(1);
    
    const lastIndex = currentPage * imagePerPage
    const firstIndex = lastIndex - imagePerPage
     

    const loadImages = async () => {
        try {
            const res = await fetch('/api/images');
            const data = await res.json();
            setImageIds(data);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        loadImages();
    }, []);

    return (
        <div>
            <h1 className="title">Clientes</h1>
            <div className="gallery" key={imageIds}>
                {imageIds &&
                    imageIds.map((imageId, index) => (
                        <Image
                            key={index}
                            cloudName={process.env.REACT_APP_CLOUDINARY_NAME}
                            publicId={imageId}
                            width="300"
                            height="300"
                            crop="scale"
                        />
                    )) .slice(firstIndex, lastIndex)} 
                 
            </div>
            <Pagination 
                    imagePerPage={imagePerPage} 
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    totalImage = {totalImage}/>   
        </div>
    );
}
