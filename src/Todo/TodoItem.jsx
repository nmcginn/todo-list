import React from 'react';

export default class TodoItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ...props,
            expanded: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            expanded: !this.state.expanded
        });
    }

    render() {
        if (!this.state.expanded)
            return <div className="task-list-item row blue lighten-4 z-depth-4" onClick={() => this.handleClick()}>{this.state.name}</div>;
        return (
            <div className="task-list-item row orange lighten-4 z-depth-4" onClick={() => this.handleClick()}>
                <div className="col s3">{this.state.name}</div>
                <div className="col s3">{this.state.priority}</div>
                <div className="col s3">{this.state.estimate}</div>
                <div className="col s3">{this.state.description}</div>
            </div>
        );
    }
}