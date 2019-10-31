import React from 'react';
import {render} from '@testing-library/react';
import "@testing-library/react/cleanup-after-each";
import Display from './Display';

describe('<Display />', () => {
    it('should render the display component', () =>{
        const dashboard = render(<Display/>);
    })

    it('should correctly get the props values', () => {
        const balls = 1, strikes = 5;
        const display = render(<Display strikes={strikes} balls={balls} />);
        display.getByText(new RegExp(`Strikes: ${strikes}`, 'i'));
        display.getByText(new RegExp(`Balls: ${balls}`, 'i'));
      });
    it('should correctly get the props values', () => {
        const balls = -1, strikes = NaN;
        const display = render(<Display strikes={strikes} balls={balls} />);
        display.getByText(new RegExp(`Strikes: ${strikes}`, 'i'));
        display.getByText(new RegExp(`Balls: ${balls}`, 'i'));
      });

})