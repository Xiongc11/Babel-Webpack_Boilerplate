console.log('dom file');

const body = document.querySelector('body');

const styleBody = () => {
  body.style.background = 'peachpuff';
};

const addTitle = (text) => {
  const title = document.createElement('h1');
  title.textContent = text;
  body.appendChild(title);
};

styleBody();
addTitle('Hello world from the dom file');

const contact = 'cheng@gmail.com';

export { styleBody, addTitle, contact };
