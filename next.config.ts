module.exports = {
  images: {
    domains: ['img.freepik.com','avatars.githubusercontent.com','placehold.co', 'images.unsplash.com'], //https://placehold.co/600x400?font=roboto
  },
  async redirects() {
    
    return [
     
      {
        source: '/',
        destination: '/home',
        permanent: true,
      },
    ];
  },
};
