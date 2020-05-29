import React,{ Component } from 'react';
import css from '../css/style.less';

class WithLess extends Component {
    constructor(props){
        super(props)
        this.state = {}
    }
    render() {
        return (
            <div className={css.example}>Hello Next.js!</div>
        )
    }
}
export default WithLess