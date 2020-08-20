let campos = [
  document.querySelector('#data'),
  document.querySelector('#valor'),
  document.querySelector('#quantidade')
];
const tbody = document.querySelector('table tbody');
const tr = document.createElement('tr');

document.querySelector('.form').addEventListener('submit', function (e) {
  e.preventDefault();

  campos.forEach(campo => {
    let td = document.createElement('td');
    td.textContent = campo.value;
    tr.appendChild(td);
  })

  let tdVolume = document.createElement('td');
  tdVolume.textContent = campos[1].value * campos[2].value;
  tr.appendChild(tdVolume);

  tbody.appendChild(tr);

  campos[0].value = '';
  campos[1].value = 1;
  campos[2].value = 0;
  campos[0].focus();

});


