import React from 'react';
import PropTypes from 'prop-types';

const TransactionHistory = ( {transactions} ) => {
    return (
        <table class="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>

    {transactions.map((item) => (
          <tr key={item.id}>
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </tr>
    ) )}

  </tbody>
</table>
    )
}

TransactionHistory.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired, 
    currency: PropTypes.string.isRequired,
}

export default TransactionHistory;