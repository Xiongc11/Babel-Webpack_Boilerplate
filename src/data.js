const users = [
  { name: 'mario', premium: true },
  { name: 'jade', premium: false },
  { name: 'wendy', premium: true },
  { name: 'marcus', premium: true },
  { name: 'janet', premium: false },
];

const getPremUsers = (users) => {
  return users.filter((user) => user.premium);
};

export { getPremUsers, users as default };

// can only have one default value per file.
