import React, { Component } from 'react'

export class Inputholder extends Component {
    render() {
        const { classnames } = this.props;
        return (
            <div className={classnames}>
                {this.props.children}
            </div>
        )
    }
}

export default Inputholder
