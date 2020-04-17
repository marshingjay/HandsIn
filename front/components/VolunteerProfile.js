import ProfilePicture from './ProfilePicture';
import TextBox from './TextBox';
import { Component } from 'react';


class VolunteerProfile extends Component {
    constructor(props){
        super(props);
        this.state = {
            editing: false,
            summary: ""
        };
        this.handleSummaryChange = this.handleSummaryChange.bind(this);
    }

    handleSummaryChange (newSummary) {
        this.setState({summary: newSummary});
    }

    render(){
        return (
            <div>
                <div>
                    <ProfilePicture editing={this.state.editing} />
                    <TextBox 
                        className="summaryBox"
                        editing={this.state.editing} 
                        theText={this.state.summary}
                        handleTextChange={this.handleSummaryChange} 
                    />
                </div>
                <div>
                    <button 
                        onClick={() => {
                            this.setState({ editing: !this.state.editing})
                        }}
                    > 
                        Edit 
                    </button>
                </div>
            </div>
        );
    }
}

export default VolunteerProfile;