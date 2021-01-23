import React from 'react'

class Index extends React.Component {

  respo = '';

  componentDidMount(){
    fetch("http://lvh.me:3001")
    .then(response => response.json())
    .then(datas => this.respo = datas);
  }

  render() {
    return <>{this.respo}</>
  }
}

export default Index;