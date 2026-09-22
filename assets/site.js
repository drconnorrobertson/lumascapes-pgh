const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('#primary-nav');
if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.textContent = open ? 'Close' : 'Menu';
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.textContent = 'Menu';
  }));
}

const form = document.querySelector('#consultation-form');
if (form) {
  form.addEventListener('submit', event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const message = [
      'Hi Lumascapes, I would like to talk about landscape lighting.',
      `Name: ${data.get('name')}`,
      `Town/neighborhood: ${data.get('town')}`,
      `Interested in: ${data.get('interest')}`,
      `Details: ${data.get('message') || 'I would like to discuss the possibilities.'}`
    ].join('\n');
    form.querySelector('.status').textContent = 'Your messaging app is opening. Please review and send the text there.';
    window.location.href = `sms:+14122568351?body=${encodeURIComponent(message)}`;
  });
}
