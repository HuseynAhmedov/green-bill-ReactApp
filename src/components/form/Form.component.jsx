import { Component } from "react";
import './Form.style.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import Select from '../select/Select.component.jsx'

class FormCustom extends Component
{
    constructor(){
        super();
        this.state = {
          currencies : [],
          fromValue : 'USD',
          toValue: 'RUB',
          convertResult :'0.00000',
          convertAmount : '0',
          convertRateTo :'0.00',
          convertRateFrom :'0.00',
          formValidationString :'',
          convertDisabled :true,
        };
    }

    componentDidMount(){

      var myHeaders = new Headers();
      myHeaders.append("apikey", "s4i2dM0OlGpiIZRacPPVtMIIwKmbuLna");

      var requestOptions = {
        method: "GET",
        redirect: "follow",
        headers: myHeaders,
      };

      const {
        currencies,
        fromValue,
        toValue,
        convertResult,
        convertAmount,
        convertRateTo,
        convertRateFrom,
        formValidationString
      } = this.state;

      fetch(
        "https://openexchangerates.org/api/currencies.json?prettyprint=true&show_alternative=true&show_inactive=true"
      )
        .then((response)=> response.json())
        .then((currencies)=> this.setState(()=>
        {
          let currenciesArray = Object.entries(currencies)
          return {currencies : currenciesArray};
        }))

        fetch(
          `https://api.apilayer.com/fixer/latest?symbols=${toValue}&base=${fromValue}`, requestOptions
          )
        .then(response => response.json())
        .then((result)=> this.setState(()=>
        {
          if(typeof result.rates !=='null' && typeof result.rates !=='undefined')
          {
            var rate = Object.entries(result.rates)
            return {convertRateFrom : rate[0][1]};
          }
        }))
        .catch(error => console.log('error', error));

        fetch(
          `https://api.apilayer.com/fixer/latest?symbols=${fromValue}&base=${toValue}`, requestOptions
          )
        .then(response => response.json())
        .then((result)=> this.setState(()=>
        {
          if(typeof result.rates !=='null' && typeof result.rates !=='undefined' )
          {
            var rate = Object.entries(result.rates)
            return {convertRateTo : rate[0][1]};
          }
        }))
        //.then(response => this.props.sendDataToChartHandler(fromValue,toValue,convertRateTo))
        .catch(error => console.log('error', error));
    }

    onFromValueChange = (event)=>
    {
      this.setState(() => {
        //console.log(event.target.value);
        return { fromValue: event.target.value };
      });
    }


    onAmountValueChange = (event)=> 
    {
      var {fromValue, toValue} = this.state;
      if(event.target.value < 0)
      {
        this.setState(() => {
          return { formValidationString: 'Please enter a valid amount',convertDisabled:true };
        });
      }
      else if(event.target.value > 100000000000000)
      {
        this.setState(() => {
          return { formValidationString: 'Exceeding maximum convertion amount' ,convertDisabled:true };
        });
      }
      else if(event.target.value == '')
      {
        this.setState(() => {
          return { formValidationString: '',convertAmount : 0 ,convertDisabled:true };
        });
      }
      else
      {
        this.setState(() => {
          return { formValidationString: '',convertAmount : event.target.value, convertDisabled:false };
        });
      }
    }

    onToValueChange = (event)=>
    {
      this.setState(() => {
        //console.log(event.target.value);
        return { toValue: event.target.value };
      });
    }

    convert = (event)=>
    {
      const {
        fromValue,
        toValue,
        convertAmount
      } = this.state;

      var myHeaders = new Headers();
      myHeaders.append("apikey", "s4i2dM0OlGpiIZRacPPVtMIIwKmbuLnj");

      var requestOptions = {
        method: "GET",
        redirect: "follow",
        headers: myHeaders,
      };

      fetch(
        `https://api.apilayer.com/fixer/latest?symbols=${toValue}&base=${fromValue}`, requestOptions
        )
      .then(response => response.json())
      .then((result)=> this.setState(()=>
      {
        if(typeof result.rates !=='null' && typeof result.rates !=='undefined')
        {
          var rate = Object.entries(result.rates)
          var convertResult = convertAmount * rate[0][1];
          return {convertRateFrom : rate[0][1], convertResult: convertResult};
        }
      }))
      .catch(error => console.log('error', error));

      fetch(
        `https://api.apilayer.com/fixer/latest?symbols=${fromValue}&base=${toValue}`, requestOptions
        )
      .then(response => response.json())
      .then((result)=> this.setState(()=>
      {
        if(typeof result.rates !=='null' && typeof result.rates !=='undefined' )
        {
          var rate = Object.entries(result.rates)
          return {convertRateTo : rate[0][1]};
        }
      }))
      //.then(response => this.props.sendDataToChartHandler(fromValue,toValue,convertRateTo))
      .catch(error => console.log('error', error));
    }

    render(){

      const {
        currencies,
        fromValue,
        toValue,
        convertResult,
        convertAmount,
        convertRateTo,
        convertRateFrom,
        formValidationString,
        convertDisabled
      } = this.state;
      const {onFromValueChange, onToValueChange, onAmountValueChange, convert} = this;
      
      let convertButtonClasses = "btn btn-lg "
      if(convertDisabled == true)
      {
        convertButtonClasses+="disabled"
      }

        return (
          <div className="container form-container">
            <div className="form-title-container">
              <h1 className="form-title">
              Green Bill Currency Converter
              </h1>
            </div>
            <div className="d-flex">
              <div className="col form-input-container">
                <label className="form-label">
                  Amount
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="Amount"
                  placeholder={fromValue}
                  min={0}
                  max={100000000000000}
                  onChange={onAmountValueChange}
                />
                <span className="form-validation">{formValidationString}</span>
              </div>
              <div className="col form-input-container">
                <label className="form-label">
                  From
                </label>
                <Select selectOptions ={currencies} onChangeHandler = {onFromValueChange} value={fromValue}/>
              </div>
              <div className="col form-input-container">
                <label className="form-label">
                  To
                </label>
                <Select selectOptions ={currencies} onChangeHandler = {onToValueChange} value={toValue} />
              </div>
            </div>
            <div className="d-flex form-bottom-container">
              <div className=" convert-result-container row">
                <p className="convert-amount ">{convertAmount} {fromValue} =</p>
                <p className="convert-result ">{convertResult} {toValue}</p>
                <p className="convert-information ">1 {fromValue} = {convertRateFrom} {toValue}</p>
                <p className="convert-information ">1 {toValue} = {convertRateTo} {fromValue}</p>
              </div>
              <div className="convert-button-container">
                <button type="button" className={convertButtonClasses} onClick={convert}>Convert</button>
              </div>
            </div>
          </div>
        );
    }
}
export default FormCustom;