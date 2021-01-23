import React from 'react'

class Index extends React.Component {

  constructor(props){
    super(props);
    this.state = { respo: '' };
  }

  componentDidMount(){
    fetch("http://localhost:3001")
    .then(response => { return response.text() })
    .then(datas => {
      this.setState({respo: datas})
      return
    })
  }

  render() {
    return <>{this.state.respo}</>
  }
}

export default Index;