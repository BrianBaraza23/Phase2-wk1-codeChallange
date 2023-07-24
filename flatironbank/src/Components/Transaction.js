import React, { Component } from 'react';
import Form from './Form';
import Filter from './Filter';

class Transaction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transactions: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    fetch("http://localhost:8001/transactions")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          transactions: data,
          isLoading: false,
        });
      });
  }

  handleNewTransaction = (newTransaction) => {
    this.setState((prevState) => ({
      transactions: [...prevState.transactions, newTransaction],
    }));
  };

  handleDeleteTransaction = (id) => {
    this.setState((prevState) => ({
      transactions: prevState.transactions.filter((transaction) => transaction.id !== id),
    }));
  };

  render() {
    const { transactions, isLoading } = this.state;

    return (
      <div className="transactions-container">
        {isLoading ? (
          <div>Retrieving History...</div>
        ) : (
          <>
            <Form onSubmit={this.handleNewTransaction} />
            
            <Filter
              transactions={transactions}
              onDelete={this.handleDeleteTransaction}
            />
          </>
        )}
      </div>
    );
  }
}

export default Transaction;