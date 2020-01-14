import React, { Component } from 'react'
import { Header, Icon, List } from 'semantic-ui-react'
import axios from 'axios'
import './App.css'

class App extends Component {
  state = {
    values: []
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/values')
      .then(({ data }) => {
        this.setState({
          values: data
        })
      })
  }

  render() {
    return (
      <div>
        <Header as='h2'>
          <Icon name='users' />
          <Header.Content>Reactivities</Header.Content>
        </Header>
        <List>
          {
            this.state.values.map((value: any) => (
              <List.Item key={value.id}>{value.name}</List.Item>
            ))
          }
        </List>
      </div>
    )
  }
}

export default App

