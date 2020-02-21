import React from 'react'
import {ClickedContext} from '../App'


export default props => {
    return(
        <div style={{border:'1px solid', width:'200px'}}>
            <h3>counter2</h3>
            <ClickedContext.Consumer>
                {clicked => clicked ? <p>cliced</p>:null}
            </ClickedContext.Consumer>
        </div>
    )
}