import React from 'react';

const FormComponent = () => {
    return (
        <form class="newTrans">
          <label htmlFor="amount">Amount</label>
          <input type="number" id="amount" name="amount" />
  
          <label htmlFor="category">Category</label>
          <select id="category" name="category">
            <option value="">Select category</option>
            <option value="category1">Category 1</option>
            <option value="category2">Category 2</option>
            <option value="category2">Category 2</option>
          </select>
  
          <label htmlFor="description">Description</label>
          <textarea id="description" name="description"></textarea>
  
          <input type="submit" value="Submit" />
        </form>
      );
};

export default FormComponent;
