import React from 'react';
import ReactDOM from 'react-dom';
import ContactsList from './ContactsList';

let contacts = [{
  id: 1,
  name: 'Scott',
  phone: '555 555 5555'
}, {
  id: 2,
  name: 'Courtney',
  phone: '555 111 5555'
}, {
  id: 3,
  name: 'Tim',
  phone: '555 333 5555'
}, {
  id: 4,
  name: 'Jeff',
  phone: '555 555 1111'
}]

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Contacts List</h1>
        <ContactsList contacts={this.props.contacts}/>
      </div>
    )
  }
}

ReactDOM.render(<App contacts={contacts} />, document.getElementById('root'));
