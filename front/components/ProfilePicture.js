
import React from 'react';

const ProfilePicture = (props) => {
    const imageUploaded = React.useRef(null);
    const handleUpload = (e) => {
        const [file] = e.target.files;
        if(file) {
            const fileReader = new FileReader();
            const {current} = imageUploaded;
            current.file = file;
            fileReader.onload = (e) => {
                current.src = e.target.result;
            }
            fileReader.readAsDataURL(file);
        }
    };

    return (
        <div>
            <input type="file" accept="image/*" onChange={handleUpload} multiple="false" />
            <div>
                <img 
                    ref={imageUploaded}
                    style={{
                        width: props.height,
                        height: props.width,
                        position: "absolute"
                    }}
                />
            </div>
        </div>
    );
}

export default ProfilePicture;