import React from "react";

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            doText:''
        };
    }
    handleChanges = e => {
        this.setState({
            doText: e.target.value
        });
    };
    handleSubmit = e => {
        e.preventDefault();
        this.props.addItem(this.state.doText);
    };

    render() {
    return (
        <form onSubmit={this.handleSubmit}>
            <input
            type="text" name="item" value={this.state.doText} onChange={this.handleChanges}
            />
            <button type="submit">Add Item</button>
        </form>
    );
}
}

export default TodoForm;