import React from 'react'
import styles from '../styles/style.scss';
import request from '../util/request';

class Index extends React.Component{
    constructor() {
        super();
        this.state = {
            list: []
        }
    }
    componentDidMount = () => {
        const res = request("https://api.github.com/repos/yuwancumian/100-days-of-ARTS/issues",{}).then((data)=>{
            console.log("res", data)
            this.setState({list: data})
        })


    }

    render() {
        const {list} = this.state;
        return (
            <div className={styles.normal}>
                <ul className={styles.list}>
                    {
                        list.map((item)=>(
                            <div key={item.node_id}>{item.title}</div>
                        ))
                    }
                </ul>
            </div>
        );
    }
}
export default Index;
