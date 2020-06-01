const user = {
  name: 'Eisten',
  userName: 'Dipper',
  country: 'Peru',
  social: {
    facebook: 'http://fb....',
    twitter: 'http://tw...',
  },
}

const saluda = (user) => {
  const {
    name,
    social: { twitter },
  } = user

  console.log(`Hola soy ${name} y mi twitter es ${twitter}`)
}

saluda(user)
