export const headerLinks = [
    {
      label: 'Home',
      route: '/',
    },
    {
      label: 'Food Recomendatios',
      route: '/private/recomendations',
    },
    {
      label: 'My Profile',
      route: '/private/profile',
    },
  ]
  
  export const eventDefaultValues = {
    title: '',
    description: '',
    location: '',
    imageUrl: '',
    startDateTime: new Date(),
    endDateTime: new Date(),
    categoryId: '',
    price: '',
    isFree: false,
    url: '',
  }