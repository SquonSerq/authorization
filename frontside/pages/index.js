import React from 'react'

class Index extends React.Component {
  constructor(props){
    super(props);
    this.state = {valueLogin: '', valuePassword: ''};

    this.handleChangeLogin = this.handleChangeLogin.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeLogin(event){
    this.setState({valueLogin: event.target.value});
  }

  handleChangePassword(event){
    this.setState({valuePassword: event.target.value});
  }

  handleSubmit(event){
    let JSONbody = {
      login: this.state.valueLogin,
      password: this.state.valuePassword
    }
    fetch("http://localhost:3001/users/register", {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(JSONbody)
    })
    event.preventDefault();
  }

  render(){
    return <>
      <form onSubmit={this.handleSubmit}>
        <label>
          Login:
          <input type="text" value={this.state.valueLogin} onChange={this.handleChangeLogin}></input>
          Password:
          <input type="password" value={this.state.valuePassword} onChange={this.handleChangePassword}></input>
        </label>
        <input type="submit" value="Отправить"></input>
      </form>
    </>
  }

}

export default Index;