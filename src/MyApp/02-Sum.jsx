import React from 'react'
 
export default class extends React.Component{
    state = { num1: '', num2: '', total: '' }

    render(){

        const AddNums = () => {
            this.setState({ total: ( parseInt(this.state.num1, 0) + parseInt(this.state.num2, 0) ), num1: '', num2: '' })
        }

        return(
            <div>
                <h1>Sum</h1>

                <div className="SumCont" >
                    <input className="SumInput Igral" type="text" value={this.state.num1} onChange={ (e) => { this.setState({ num1: e.target.value }) } } />
                    <br/><br/>

                    <input className="SumInput Igral" type="text" value={this.state.num2} onChange={ (e) => { this.setState({ num2: e.target.value }) } } />
                    <br/><br/>

                    <button onClick={ AddNums } >Add Numbers</button>
                    <br/><br/>

                    <input className="SumOutput Igral" type="text" value={this.state.total} />
                    <br/><br/>
                </div>
                
            </div>
        )
    }
}