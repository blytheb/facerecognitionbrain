import React from "react";

const FaceRecognition = ( {imageUrl} ) => {
    return (
        <div>
            <img alt="img" src={imageUrl} />
        </div>
    );
}

export default FaceRecognition;