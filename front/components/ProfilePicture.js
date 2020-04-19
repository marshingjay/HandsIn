
import React from 'react';

const ProfilePicture = (props) => {
    const imageUploaded = React.useRef(null);
    const imageChangeButton = React.useRef(null);

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
        <div 
            // style={{
            //     display: "flex",
            //     flexDirection: "column",
            //     alignItems: "center",
            //     justifyContent: "center"
            // }}
        >
            <input 
                type="file" 
                accept="image/*" 
                onChange={handleUpload}
                ref={imageChangeButton}
                style={{
                    display: "none"
                }}
            />
            <div>
                {(function() {
                    if(props.editing == true) {
                        return(
                            <button onClick={() => {imageChangeButton.current.click()}}>
                                Change Picture
                            </button>
                        )
                    }
                })()}
                <img 
                    ref={imageUploaded}
                    src={'/static/defaultProfilePic.jpg'}
                    style={{
                        width: props.height,
                        height: props.width,
                        // position: "absolute"
                    }}
                />
            </div>
        </div>
    );
}

export default ProfilePicture;