const TextBox = (props) => {
    return (
        <div>
            <div>
                {/* <span>Summary:</span> */}
                {props.editing ? (
                    <textInput 
                        type="text"
                        value={props.theText}
                        onChange={e => props.handleTextChange(e.target.value)}
                        style={{
                            flex: 1,
                            flexWrap: 'wrap'
                        }}
                        margin={12}
                    />
                ) : (
                    <span className="summary">{props.theText}</span>
                )}
            </div>
        </div>
    );
}

export default TextBox;