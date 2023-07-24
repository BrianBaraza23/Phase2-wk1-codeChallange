import React, { useEffect, useState } from 'react';
import { fetchData } from './FetchData';

function Total() {
const [total, setTotal] = useState(0);

useEffect(() => {
fetchData().then(data => {
const totalAmount = data.transactions.reduce((sum, transaction) => sum + transaction.amount, 0);
setTotal(totalAmount);
});
}, []);

return (
<div>
<h2>Total: {total.toFixed(2)}</h2>
</div>
);
}

export default Total;
