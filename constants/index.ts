

export const headerLinks = [
    {
      label: 'Home',
      route: '/',
      alternateroute: null,
    },
    {
      label: 'Food Recomendatios',
      route: '/private/recommendations',
      alternateroute: null,
    },
    {
      label: 'My Profile',
      route: '/private/profile/myday',
      alternateroute : '/private/profile/update',
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