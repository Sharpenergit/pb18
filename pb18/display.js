function getTodos() {
  

    axios
      .get('https://crudcrud.com/api/9c5cef1a1e6843ca8339446ab1eaa491/data', {
        timeout: 5000
      })
      .then(res => showOutput(res))
      .catch(err => console.error(err));
  }

  function showOutput(res) {
    document.getElementById('res').innerHTML = `
  
    <div class="card mt-3">
      <div class="card-header">
        Data
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.data, null, 2)}</pre>
      </div>
    </div>
   
  `;
  }

  document.getElementById('btn').addEventListener('click', getTodos);























