const clients = document.querySelectorAll('.client-list .client');

function changeClient() {
    const clientImg = document.querySelector('.client-img'),
          clientQuote = document.querySelector('.quote'),
          client = document.querySelector('.quote-container .author'),
          currentClient = document.querySelector('.client-list .client.active');

  if (this.classList.contains('active')) return;

  currentClient.classList.remove('active');
  this.classList.add('active');

  clientImg.classList.add('change');
  clientQuote.classList.add('change');
  client.classList.add('change');

  clientImg.addEventListener('transitionend', () => {
    clientImg.src = this.dataset.src;
    clientImg.alt = this.dataset.alt;
    clientQuote.textContent = this.dataset.quote;
    client.textContent = this.dataset.author;
    clientImg.classList.remove('change');
    clientQuote.classList.remove('change');
    client.classList.remove('change');
  });
}

clients.forEach(client => client.addEventListener('click', changeClient));
