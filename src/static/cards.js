const cards = [
  {
    title: 'Instagram',
    description:
      'Be sure to check out our Instagram page for all of our exhibition reviews!',
    imageUrl: `${process.env.PUBLIC_URL}/assets/instagram.jpg`,
    link: 'https://www.instagram.com/ratemyexhibition/',
  },
  {
    title: 'Donate',
    description:
      'Our goal is to help support the local Art community. In future, this portal will allow for donations to local non-profits.',
    imageUrl: `${process.env.PUBLIC_URL}/assets/donate.jpg`,
    link: 'https://crescentarts.org/about/the-crescent/the-hub',
  },
  {
    title: 'Contact Us',
    description:
      'Feel free to contact us if you have any queries or advice. We love to hear your feedback.',
    imageUrl: `${process.env.PUBLIC_URL}/assets/img4.jpg`,
    link: 'mailto:ratemyexhibition@gmail.com?subject=General Queries',
  },
];

export default cards;
