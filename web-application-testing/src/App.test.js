import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '@testing-library/react/cleanup-after-each';
import {render, fireEvent} from '@testing-library/react';


describe('<App/>', () => {

  // default
  it('renders without crashing usung ReactDom', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('should render the App component', () => {
    render(<App />);
  });

  it ('should match # clicked', () =>{
    let {getByText} = render(<App />);
    const ball = getByText(/^ball$/i);
  
    fireEvent.click(ball);
    fireEvent.click(ball);
    getByText(/Balls: 2/);
 
    fireEvent.click(ball);
    fireEvent.click(ball);
    fireEvent.click(ball);
    getByText(/Balls: 0/);
  });

    it ('should match # clicked', () =>{
      let {getByText} = render(<App />);
      const strike  = getByText(/^strike$/i); // button text

      fireEvent.click(strike);
      fireEvent.click(strike);
      fireEvent.click(strike);
      getByText(/Strikes: 3/);
   
      fireEvent.click(strike);
      getByText(/Strikes: 0/);
    });

    it ('should reset strikes and balls to 0', () =>{
      let {getByText} = render(<App />);
      const hit = getByText(/^hit$/i);
      fireEvent.click(hit);
      getByText(/Balls: 0/);
      getByText(/Strikes: 0/);
    });

    it ('should not go above 2', () =>{
      let {getByText} = render(<App />);
      const foul = getByText(/^foul$/i);
      fireEvent.click(foul);
      getByText(/Strikes: 1/);
      fireEvent.click(foul);
      getByText(/Strikes: 2/);
      fireEvent.click(foul);
      getByText(/Strikes: 2/);
    });

})