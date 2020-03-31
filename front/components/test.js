
export default class TestAPI extends React.Component{
  state = {
    loading: true,
    person: null,
  }

async componentDidMount() {
    const url = "https://api.randomuser.me/";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.results[0]);
    this.setState({ person: data.results[0], loading: false })

}

  render() {
    return <div>
      {this.state.loading || !this.state.person ? (
      <div>loading...</div>
       ) : (
       <div>
         <div>
           {/* {this.state.person.name.first} */}
           </div>
       </div>
       )}
      </div>
  }
}