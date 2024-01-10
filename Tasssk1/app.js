document.addEventListener('DOMContentLoaded', async () => {
    try {
      const response = await fetch('/getProducts');
      const data = await response.json();
      updateProductList(data);
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  });
  



function updateProductList(data) {
    const productListTable = document.getElementById('product-list');
  
    // Clear previous content
    productListTable.innerHTML = '';
  
    // Create table header
    const tableHeader = document.createElement('tr');
    tableHeader.innerHTML = `
      <th>Title</th>
      <th>Price</th>
      <th>Popularity</th>
    `;
    productListTable.appendChild(tableHeader);
  
    // Create table rows for each product
    data.forEach(product => {
      const productRow = document.createElement('tr');
      productRow.classList.add('product');
  
      // Add product details to the table
      productRow.innerHTML = `
        <td>${product.title}</td>
        <td>$${product.price}</td>
        <td>${product.popularity}</td>
      `;
  
      // Append the product row to the product list table
      productListTable.appendChild(productRow);
    });
  }