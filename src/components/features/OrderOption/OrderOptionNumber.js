import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';
import { formatPrice } from '../../../utils/formatPrice';

const OrderOptionNumber = ({currentValue, limits, setOptionValue, price}) => (
  <div className={styles.number}>
    <input type = 'number'
      className = {styles.inputSmall}
      value = {currentValue}
      min = {limits.min}
      max = {limits.max}
      onChange = {event => setOptionValue(event.currentTarget.value)} />
      ({formatPrice(price)})
  </div>
);

OrderOptionNumber.propTypes = {
  name: PropTypes.string,
  limits: PropTypes.object,
  price: PropTypes.any,
  currentValue: PropTypes.any,
  setOptionValue: PropTypes.func,
};

export default OrderOptionNumber;