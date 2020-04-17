const TextBox = (props) => {
    return (
        <div>
            <div>
                <span>Summary:</span>
                {props.editing ? (
                    <input 
                        type="text"
                        // value={this.state.summary}
                        value={props.theText}
                        // ref={node => {
                        //     this.newSummary = node;
                        // }}
                        onChange={e => props.handleTextChange(e.target.value)}
                    />
                ) : (
                    <span className="summary">{props.theText}</span>
                )}
            </div>
        </div>
    );
}

export default TextBox;