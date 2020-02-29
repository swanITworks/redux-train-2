import React, {Component} from 'react';
import './AddPerson.css';

class AddPerson extends Component {
    state = {
        name: '',
        age: null,
    };

    onChangeHandler = (event) => {
      this.setState({
          [event.target.name]:event.target.value,
      })
    };

    render() {
        return (
            <div className="AddPerson">
                <input type='text' placeholder='name' name='name' value={this.state.name} onChange={this.onChangeHandler}/>
                <input type='number' placeholder='age' name='age' value={this.state.age} onChange={this.onChangeHandler}/>
                <button onClick={()=>this.props.personAdded(this.state.name, this.state.age)}>Add Person</button>
            </div>
        )
    }
};

export default AddPerson;