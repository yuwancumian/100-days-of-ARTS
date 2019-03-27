import React, { Component } from 'react';
import request from '../../util/request';

export default class extends Component {
    constructor() {
        super();
        this.state = {
            list: []
        }
    }
    componentDidMount = () => {
        // const res = request("https://api.github.com/repos/yuwancumian/100-days-of-ARTS/issues",{}).then((data)=>{
        //     console.log("res", data)
        //     this.setState({list: data})
        // })

    }
    render() {
        return (
            <div>
                123
            </div>
        )
    }
}


