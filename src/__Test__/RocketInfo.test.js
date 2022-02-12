import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import RocketInfo from '../components/Rockets/RocketInfo';

const renderer = require('react-test-renderer');

it('should do render reserve rocket button and match the snapshot', () => {
  const id = 1;
  const rocketName = 'Test Rocket';
  const rocketImage = 'img';
  const description = 'Test';
  const reserved = false;
  const handleToggleClick = () => true;

  const { getByTestId } = render(<RocketInfo
    id={id}
    rocket_name={rocketName}
    rocket_image={rocketImage}
    description={description}
    reserved={reserved}
    handleToggleClick={handleToggleClick}
  />);
  expect(getByTestId('rocket-btn')).toHaveTextContent('Reserve Rocket');

  const tree = renderer.create(<RocketInfo
    id={id}
    rocket_name={rocketName}
    rocket_image={rocketImage}
    description={description}
    reserved={reserved}
    handleToggleClick={handleToggleClick}
  />).toJSON();
  expect(tree).toMatchSnapshot();
});
