export interface IThemeData {
    theme: string;
    title: string;
    amount: number;
    description: string;
    image: string;
    imgBackgroundColor: string;
    backgroundColor: string;
    availability: string;
  }
  
  export const themesData: IThemeData[] = [
    {
      theme: 'default',
      title: 'Ivy',
      amount: 0,
      description:
        'Our default theme. Ivy represents the core essence of a simple yet beautiful design with one goal in mind: get customers to fall in love and purchase seamlessly.',
      availability: 'Available for free on all plans.',
      image: '/assets/images/StorefrontSectionFive.webp',
      imgBackgroundColor: 'var(--fainttext)',
      backgroundColor: 'var(--background-primary_18) !important',
    },
    {
      theme: 'theme1',
      title: 'Aquarius',
      amount: 800,
      description:
        'Aquarius is a sleek but confident theme. Highlighting information about each of your product with a prominent banner to evoke interest in your brand.',
        availability: 'Available for free on Basic and Premium plan.',
      image: '/assets/images/StorefrontSectionOne.webp',
      imgBackgroundColor: 'var(--fainttext)',
      backgroundColor: 'var(--background-primary_19) !important',
    },
    {
      theme: 'theme2',
      title: 'Firefly',
      amount: 800,
      description:
        'Living up to its name, Firefly is a lively and adventurous design. Ideal for highlighting certain products. Visitors will find your storefront unmistakable.',
        availability: 'Available for free on Premium plan.',
      image: '/assets/images/StorefrontSectionTwo.webp',
      imgBackgroundColor: 'var(--faint_2)',
      backgroundColor: 'var(--background-primary_17) !important',
    },
    {
      theme: 'theme3',
      title: 'Thoria',
      amount: 1000,
      description:
        'Thoria. This understated and absolutely lovely design features a prominent header that easily make visitors identify your brand and identity.',
        availability: 'Available for purchase on any plan.',
      image: '/assets/images/StorefrontSectionThree.webp',
      imgBackgroundColor: 'var(--fainttext)',
      backgroundColor: 'var(--background-primary_16) !important',
    },
    {
      theme: 'theme4',
      title: 'Stellar',
      amount: 1000,
      description:
        'A gallery-minded design, Stellar aims to give a familiar but interesting angle to product displays similar to the picture galleries on our smartphones that we are so used to.',
        availability: 'Available for purchase on any plan.',
      image: '/assets/images/StorefrontSectionFour.webp',
      imgBackgroundColor: 'var(--success-bg)',
      backgroundColor: 'var(--background-primary_15) !important',
    },
  ];
  