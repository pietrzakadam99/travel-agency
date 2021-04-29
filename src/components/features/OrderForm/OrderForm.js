import React from 'react';
import PropTypes from 'prop-types';
import {Col, Row} from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary.js';
import pricing from '../../../data/pricing.json';
import OrderOption from '../OrderOption/OrderOption';

const OrderForm = props => (
  <Row>
    {pricing.map((option) => 
      <Col md={4} key={option.id}>
        <OrderOption {...option.id} currentValue = {props.options[option.id]} setOrderOption={props.setOrderOption}  />
      </Col>
    )}
    <Col xs={12}>
      <OrderSummary cost={props.tripCost} options={props.options}/>
    </Col>
  </Row>
);

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.any,
  setOrderOption: PropTypes.func,
};

export default OrderForm;