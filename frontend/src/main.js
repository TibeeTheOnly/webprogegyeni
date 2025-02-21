document.addEventListener('DOMContentLoaded', () => {
  fetchData('/monitorok');
});

document.getElementById('fetchMonitors').addEventListener('click', () => {
  fetchData('/monitorok');
});

document.getElementById('fetchLaptops').addEventListener('click', () => {
  fetchData('/laptops');
});

document.getElementById('fetchPhones').addEventListener('click', () => {
  fetchData('/phones');
});

function fetchData(endpoint) {
  fetch(`http://localhost:3000${endpoint}`)
    .then(response => response.json())
    .then(data => displayData(data))
    .catch(error => console.error('Error fetching data:', error));
}

function displayData(data) {
  displayNumberedList(data);
  displayUnorderedList(data);
  displayTable(data);
}

function displayNumberedList(data) {
  const list = document.getElementById('numberedList');
  list.innerHTML = '';
  data.forEach(item => {
    const listItem = document.createElement('li');
    listItem.textContent = `${item.brand} - ${item.size || item.model}`;
    list.appendChild(listItem);
  });
}

function displayUnorderedList(data) {
  const list = document.getElementById('unorderedList');
  list.innerHTML = '';
  data.forEach(item => {
    const listItem = document.createElement('li');
    listItem.textContent = `${item.brand} - ${item.size || item.model}`;
    list.appendChild(listItem);
  });
}

function displayTable(data) {
  const tableBody = document.querySelector('#dataTable tbody');
  tableBody.innerHTML = '';
  data.forEach(item => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${item.id}</td>
      <td>${item.brand}</td>
      <td>${item.size || item.model}</td>
    `;
    tableBody.appendChild(row);
  });
}