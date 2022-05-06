let dataDashboard =
  JSON.parse(localStorage.getItem('dataDashboard')) !== null
    ? JSON.parse(localStorage.getItem('dataDashboard'))
    : [
        {
          id: 1,
          name: 'TV',
          macAddress: '00:18:44:11:3A:B7',
          ip: '127.0.0.2',
          createdDate: '31-05-2021',
          powerConsumption: 50,
        },
        {
          id: 2,
          name: 'Washer',
          macAddress: '00:18:44:11:3A:B8',
          ip: '127.0.0.3',
          createdDate: '31-05-2021',
          powerConsumption: 60,
        },
        {
          id: 3,
          name: 'Refrigerator',
          macAddress: '00:18:44:11:3A:B9',
          ip: '127.0.0.4',
          createdDate: '31-05-2021',
          powerConsumption: 80,
        },
        {
          id: 4,
          name: 'Selling Fan',
          macAddress: '00:18:44:11:3A:B2',
          ip: '127.0.0.5',
          createdDate: '31-05-2021',
          powerConsumption: 100,
        },
      ];
function renderTable(dataDashboard) {
  let content = dataDashboard.map((value) => {
    return `<tr class="statistic-tr">
        <td>${value.name}</td>
        <td>${value.macAddress}</td>
        <td>${value.ip}</td>
        <td>${value.createdDate}</td>
        <td>${value.powerConsumption}</td>
        <td>
          <i onClick="deleteDataRow(${value.id})" class="fa-solid fa-circle-xmark" style="font-size:1.8rem; color: red; cursor: pointer; margin-left: 4px">
          </i>
          <i onClick="editDataRow(${value.id})" class="fa-solid fa-pencil" style="font-size:1.8rem; color: blue; cursor: pointer; margin-left: 4px"></i>
        </td>
        </tr>`;
  });
  const total = dataDashboard.reduce((prev, current) => {
    return prev + current.powerConsumption;
  }, 0);
  content = content.join('');
  content += `<tr class="statistic-tr">
        <td><b>Total</b></td>
        <td></td>
        <td></td>
        <td></td>
        <td><b>${total}</b></td>
        <td></td>
      </tr>`;
  document.getElementById('dataBody').innerHTML = content;
}
window.onload = () => {
  renderTable(dataDashboard);
  renderChart(dataDashboard);
};

// Resolve chartJS
function renderColor(internalData) {
  const graphColors = [];
  var internalDataLength = internalData.length;
  i = 0;
  while (i <= internalDataLength) {
    var randomR = Math.floor(Math.random() * 130 + 100);
    var randomG = Math.floor(Math.random() * 130 + 100);
    var randomB = Math.floor(Math.random() * 130 + 100);

    var graphBackground =
      'rgb(' + randomR + ', ' + randomG + ', ' + randomB + ')';
    graphColors.push(graphBackground);

    i++;
  }
  return graphColors;
}
function renderChart(dataDashboard) {
  let chartStatus = Chart.getChart('dataChart'); // <canvas> id
  if (chartStatus != undefined) {
    chartStatus.destroy();
  }
  const ctx = document.getElementById('dataChart').getContext('2d');
  const dataPowerConsumption = dataDashboard.map(
    (value) => value.powerConsumption
  );
  const myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: dataDashboard.map((data) => data.name),
      datasets: [
        {
          data: dataPowerConsumption,
          // backgroundColor: ['#F95F82', '#FB9F40', '#FDCD57', '#4BC0C0'],
          backgroundColor: renderColor(dataDashboard),
          borderColor: ['#F5F5F5'],
          borderWidth: 1,
          hoverOffset: 4,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Chart.js Doughnut Chart',
        },
      },
    },
  });
}

// Add devices
function getCurrentTime() {
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  let yyyy = today.getFullYear();

  today = mm + '/' + dd + '/' + yyyy;
  return today;
}

function addDevice() {
  const regexNumber = /^\d+$/;
  const errors = [];
  let inputs = document.querySelectorAll('.device__form--input');
  inputs.forEach((input) => {
    let inputId = input.getAttribute('id');
    if (input.value === '') {
      errors.push(`device__form--error-${inputId}`);
    } else {
      document.querySelector(`.device__form--error-${inputId}`).style.display =
        'none';
    }
    if (inputId === 'powerConsumption' && input.value !== '') {
      if (!!!input.value.match(regexNumber)) {
        errors.push(`device__form--error-${inputId}`);
        document.querySelector(`.device__form--error-${inputId}`).innerHTML =
          'Trường này yêu cầu nhập số!';
      } else {
        document.querySelector(`.device__form--error-${inputId}`).innerHTML =
          'Trường này là bắt buộc!';
      }
    }
  });
  if (errors.length === 0) {
    let data = {};
    inputs.forEach((input) => {
      let inputId = input.getAttribute('id');
      data[inputId] = input.value;
    });
    data.createdDate = getCurrentTime();
    data.powerConsumption = Number(data.powerConsumption);
    data.id = Date.now();
    dataDashboard.push(data);
    localStorage.setItem('dataDashboard', JSON.stringify(dataDashboard));
    renderTable(dataDashboard);
    renderChart(dataDashboard);
  } else {
    errors.forEach((error) => {
      document.querySelector(`.${error}`).style.display = 'block';
    });
  }
}

// additional functions
// Delete
function exitModal() {
  let overlay = document.querySelector('.overlay');
  let popup = document.querySelector('.popup');
  popup.style.display = 'none';
  overlay.style.display = 'none';
}

function deleteDataRow(index) {
  let overlay = document.querySelector('.overlay');
  let popup = document.querySelector('.popup');
  popup.style.display = 'block';
  overlay.style.display = 'block';
  localStorage.setItem('idDeleted', index);
}

function confirmDeleteService() {
  const idDeleted = Number(localStorage.getItem('idDeleted'));
  let newDataDashboard = [];
  dataDashboard.forEach((data) => {
    if (data.id !== idDeleted) {
      newDataDashboard.push(data);
    }
  });
  dataDashboard = newDataDashboard.map((data) => data);
  localStorage.setItem('dataDashboard', JSON.stringify(dataDashboard));
  renderTable(dataDashboard);
  renderChart(dataDashboard);
  localStorage.removeItem('idDeleted');
  exitModal();
}
// Edit
function editDataRow(index) {
  console.log('index', index);
  const deleteModal = document.querySelector('.editModal');
  deleteModal.classList.remove('hide');
  localStorage.setItem('idEdited', index);
}

function closeEditModal() {
  const deleteModal = document.querySelector('.editModal');
  deleteModal.classList.add('hide');
}

function resolveEditForm(id) {
  const regexNumber = /^\d+$/;
  const errors = [];
  let inputs = document.querySelectorAll('.editDevice__form--input');
  inputs.forEach((input) => {
    let inputId = input.getAttribute('id');
    if (input.value === '') {
      errors.push(`editDevice__form--error-${inputId}`);
    } else {
      document.querySelector(
        `.editDevice__form--error-${inputId}`
      ).style.display = 'none';
    }
    if (inputId === 'editPowerConsumption' && input.value !== '') {
      if (!!!input.value.match(regexNumber)) {
        errors.push(`editDevice__form--error-${inputId}`);
        document.querySelector(
          `.editDevice__form--error-${inputId}`
        ).innerHTML = 'Trường này yêu cầu nhập số!';
      } else {
        document.querySelector(
          `.editDevice__form--error-${inputId}`
        ).innerHTML = 'Trường này là bắt buộc!';
      }
    }
  });
  if (errors.length === 0) {
    let data = {};
    inputs.forEach((input) => {
      let inputId = input.getAttribute('id');
      inputId = inputId.replace('edit', '');
      inputId = inputId.replace(inputId[0], inputId[0].toLowerCase());
      data[inputId] = input.value;
    });
    data.powerConsumption = Number(data.powerConsumption);
    dataDashboard = dataDashboard.map((value) =>
      value.id === id ? { ...value, ...data } : value
    );
    localStorage.setItem('dataDashboard', JSON.stringify(dataDashboard));
    closeEditModal();
    renderTable(dataDashboard);
    renderChart(dataDashboard);
    document.querySelectorAll('.editDevice__form--input').forEach((input) => {
      input.value = '';
    });
  } else {
    errors.forEach((error) => {
      document.querySelector(`.${error}`).style.display = 'block';
    });
  }
}

function confirmEditModal() {
  resolveEditForm(Number(localStorage.getItem('idEdited')));
  localStorage.removeItem('idEdited');
}
