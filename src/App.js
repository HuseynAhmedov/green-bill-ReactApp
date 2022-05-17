import logo from './logo.svg';
import './App.scss';
import Navbar from './components/navbar/Navbar.component.jsx'
import Footer from './components/footer/Footer.component.jsx'
import { Component } from 'react';

class App extends Component
{
  render()
  {
    return(
      <div className='App'>
        <header>
          <Navbar/>
        </header>
        <main>

        </main>
        <footer className='footer-main'>
          <Footer/>
        </footer>
      </div>
    );
  }
}
export default App;
