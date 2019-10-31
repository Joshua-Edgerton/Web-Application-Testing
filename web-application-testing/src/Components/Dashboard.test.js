import React from 'react';
import {render} from '@testing-library/react';
import "@testing-library/react/cleanup-after-each";
import Dashboard from './Dashboard';
import {fireEvent, cleanup} from '@testing-library/react';

describe ('<Dashboard .>', () => {

    it('should render the dashboard component', () =>{
        const dashboard = render(<Dashboard/>);
    });


    it('should check the balls button', () => {
        const click = jest.fn();
        const { getByText } = render(<Dashboard ballsCounting={click} />);
        const ballsButton = getByText(/ball/i);
        fireEvent.click(ballsButton);
        expect(click).toBeCalled();
      });

      it('should check the strikes button', () => {
        const click = jest.fn();
        const { getByText } = render(<Dashboard strikesCounting={click} />);
        const stikesButton = getByText(/strike/i);
        fireEvent.click(stikesButton);
        expect(click).toBeCalled();
      });

      it('should check the foul button', () => {
        const click = jest.fn();
        const { getByText } = render(<Dashboard foulsCounting={click} />);
        const foulsButton = getByText(/foul/i);
        fireEvent.click(foulsButton);
        expect(click).toBeCalled();
      });

      it('should check the hit button', () => {
        const click = jest.fn();
        const { getByText } = render(<Dashboard hitsCounting={click} />);
        const hitsButton = getByText(/hit/i);
        fireEvent.click(hitsButton);
        expect(click).toBeCalled();
      });


});
