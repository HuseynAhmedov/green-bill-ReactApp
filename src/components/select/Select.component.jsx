import { Component } from "react";
import './Select.style.scss'
import 'bootstrap/dist/css/bootstrap.min.css';

class SelectCustom extends Component
{
    constructor(){
        super();
    }
    render(){
        //const { currencies } = this.props.selectOptions;
        //console.log(this.props.selectOptions)
        return (
          <select className="form-select" onChange={this.props.onChangeHandler} value={this.props.value}>
            {this.props.selectOptions.map((data)=>{
              return(
                <option value={data[0]} key={data[0]}>{data[0]} {data[1]}</option>
              )
            })}
          </select>
        );
    }
}
export default SelectCustom;