import React from 'react';

export default class TodoItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ...props
        };
    }

    render() {
        return (
            <div>{this.state.name}</div>
        );
    }
}