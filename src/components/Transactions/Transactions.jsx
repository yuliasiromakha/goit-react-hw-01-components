import React from 'react';
import PropTypes from 'prop-types';
import './Transactions.css'

const TransactionHistory = ( {items} ) => {
    return (
        <table className="transaction-history">
  <thead className='headline'>
    <tr className='headLineNames'>
      <th className='headlineValue type'>Type</th>
      <th className='headlineValue amount'>Amount</th>
      <th className='headlineValue currency'>Currency</th>
    </tr>
  </thead>

  <tbody className='tableBody'>

    {items.map((item) => (
          <tr key={item.id}>
            <td className='tableValue type'>{item.type}</td>
            <td className='tableValue'>{item.amount}</td>
            <td className='tableValue'>{item.currency}</td>
          </tr>
    ) )}

  </tbody>
</table>
    )
}

TransactionHistory.propTypes = {
  items: PropTypes.shape({
    id: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired, 
    currency: PropTypes.string.isRequired,
  }),
}

export default TransactionHistory;

