import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it('should throw error without required props', () => {
    expect(() => shallow(<TripSummary />)).toThrow();
  });

  const component = shallow(<TripSummary
    id={tripId}
    image={expectedImage}
    name={expectedName} 
    cost={expectedCost}
    days={expectedDays}
    tags={expectedTags} />);

  const expectedLink = '/trip/abc';
  const expectedImage = 'image.jpg';
  const expectedName = 'alt';
  const expectedCost = '$100';
  const expectedDays = 7;
  let expectedTags = ['tag1', 'tag2', 'tag3'];
  const tripId = 'abc';

  it('should render correct link', () => {
    const renderedLink = component.find('.link').prop('to');
    expect(renderedLink).toEqual(expectedLink);
  });

  it('should render correct image and alt', () => {
    const renderedImage = component.find('img').prop('src');
    const renderedAlt = component.find('img').prop('alt');
    expect(renderedImage).toEqual(expectedImage);
    expect(renderedAlt).toEqual(expectedName);
  });

  it('should render correct name, cost and days', () => {
    const renderedName = component.find('.title').text();
    const renderedCostAndDays = component.find('.details').text();
    expect(renderedName).toEqual(expectedName);
    expect(renderedCostAndDays).toEqual(`${expectedDays} daysfrom ${expectedCost}`);
  });

  it('should render tags in correct spands', () => {
    const renderedTagOne = component.find('.tags span').at(0).text();
    const renderedTagTwo = component.find('.tags span').at(1).text();
    const renderedTagThree = component.find('.tags span').at(2).text();
    expect(renderedTagOne).toEqual(expectedTags[0]);
    expect(renderedTagTwo).toEqual(expectedTags[1]);
    expect(renderedTagThree).toEqual(expectedTags[2]);
  });

  it('should not render span if tag is missing', () => {
    expectedTags= [];
    const renderedDiv = component.find('.tags div');
    expect(renderedDiv.exists(expectedTags)).toBe(false);
  });
});

