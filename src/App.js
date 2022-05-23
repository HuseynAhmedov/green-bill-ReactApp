import logo from './logo.svg';
import './App.scss';
import Navbar from './components/navbar/Navbar.component.jsx'
import Footer from './components/footer/Footer.component.jsx'
import Form from './components/form/Form.component.jsx'
import Chart from './components/chart/Chart.component.jsx';
import { Component } from 'react';

class App extends Component
{
  constructor()
  {
    super();
    this.state ={
      fromValue: '',
      toValue: '',
      convertRateTo :'',
    };
  }

  // sendDataToChart(fromValue,toValue,convertRateTo)
  // {
  //   this.setState(()=>{
  //     console.log(fromValue)
  //     console.log(toValue)
  //     console.log(convertRateTo)
  //     return {fromValue : fromValue, toValue:toValue, convertRateTo:convertRateTo};
  //   })
  // }

  render()
  {
    const{fromValue, toValue, convertRateTo} = this.state;
    return(
      <div className='App'>
        <header>
          <Navbar/>
        </header>
        <main>
          <section id='formMain'>
            <Form/>
          </section>
          <section>
            <Chart/>
          </section>
        </main>
        <footer className='footer-main'>
          <Footer/>
        </footer>
      </div>
    );
  }
}
export default App;
