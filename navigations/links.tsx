import { AdsIcon, BankAccountIcon, VideoGuideIcon } from '../constants/svgs';
import {
  ChatIcon,
  HelpIcon,
  NavChartIcon,
  NavDeliveryIcon,
  NavHomeIcon,
  NavMenuIcon,
  NavProductIcon,
  NavProfileIcon,
  NavSupportIcon,
  NavTagIcon,
  RewardIcon,
  ShoppingCartIcon,
} from '../constants';

// import NavAddIcon from '../public/assets/images/add-icon.svg';
import LogoutIcon from '../public/assets/images/logout.svg';

export const NAVIGATION_LINKS = {
  VENDORS: '/',
  SHOPPERS: '/shoppers',
  DASHBOARD: '/admin',
  AUTH_SIGNIN: '/auth/login',
  AUTH_SIGNUP: '/auth/register',
  ACCOUNT: {
    PROFILE: '/account/profile',
    PASSWORD: '/account/password',
    PREFERENCES: '/account/preferences',
  },
  USERS: {
    LIST: '/users',
    CREATE: '/users/create',
    DETAILS: (username: string) => `/users/${username}`,
  },
};
export const ENV_KEYS = {
  __DEV__: process.env.NEXT_PUBLIC_LOCATION === 'local',
  BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
  PAYSTACK_KEY: process.env.NEXT_PUBLIC_PAYSTACK_KEY,
  API_KEY: process.env.NEXT_PUBLIC_API_KEY,
  TALK_CHAT: process.env.NEXT_PUBLIC_TALK_CHAT,
};
export const NAV_TOP_1_LINKS = [
  {
    TITLE: 'For vendors',
    LINK: '/',
    SLUG: 'for-vendors',
  },
  {
    TITLE: 'For Buyers',
    LINK: '/buyers',
    SLUG: 'shoppers',
  },
];
export const NAV_TOP_2_LINKS = [
  {
    TITLE: 'About',
    LINK: '/about',
    SLUG: 'about',
  },
  {
    TITLE: 'Support',
    LINK: '/support',
    SLUG: 'support',
  },
  {
    TITLE: 'Pricing',
    LINK: '/pricing',
    SLUG: 'pricing',
  },
  {
    TITLE: 'Themes',
    LINK: '/themes',
    SLUG: 'themes',
  },
  {
    TITLE: 'Ads',
    LINK: '/ads',
    SLUG: 'ads',
  },
];
export const MAIN_NAV_1_LINKS = [
  {
    TITLE: 'Home',
    LINK: '/',
    SLUG: 'home',
    TYPE: 1,
  },
  {
    TITLE: 'FAQs',
    LINK: '/faq',
    SLUG: 'faqs',
    TYPE: 1,
  },

  {
    TITLE: 'Blog',
    LINK: '/blog',
    SLUG: 'blog',
    TYPE: 1,
  },
];

export const NEW_MAIN_NAV_1_LINKS = [
  {
    TITLE: 'Home',
    LINK: '/',
    SLUG: 'vendors',
    TYPE: 1,
  },
  // {
  //   TITLE: 'Buyers',
  //   LINK: '/buyers',
  //   SLUG: 'vendors',
  //   TYPE: 1,
  // },
  {
    TITLE: 'About',
    LINK: '/about',
    SLUG: 'about',
    TYPE: 1,
  },
  {
    TITLE: 'FAQs',
    LINK: '/faq',
    SLUG: 'faqs',
    TYPE: 1,
  },
  {
    TITLE: 'Blog',
    LINK: '/blog',
    SLUG: 'blog',
    TYPE: 1,
  },
  {
    TITLE: 'Support',
    LINK: '/support',
    SLUG: 'support',
    TYPE: 1,
  },
  {
    TITLE: 'Pricing',
    LINK: '/pricing',
    SLUG: 'pricing',
    TYPE: 1,
  },
  {
    TITLE: 'Themes',
    LINK: '/themes',
    SLUG: 'themes',
    TYPE: 1,
  },
  {
    TITLE: 'Ads',
    LINK: '/ads',
    SLUG: 'ads',
    TYPE: 1,
  },
  // {
  //   TITLE: 'Ads',
  //   LINK: '/ads',
  //   SLUG: 'ads',
  //   TYPE: 1,
  // },
  // {
  //   TITLE: 'Why vendorstack',
  //   LINK: '/shoppers/#why-vendorstack',
  //   SLUG: 'shopper-why-vendorstack',
  //   TYPE: 2,
  // },
  // {
  //   TITLE: 'Testimonies',
  //   LINK: '/shoppers/#testimonies',
  //   SLUG: 'shopper-testimonies',
  //   TYPE: 2,
  // },
  // {
  //   TITLE: 'FAQs',
  //   LINK: '/shoppers/#faqs',
  //   SLUG: 'shopper-faqs',
  //   TYPE: 2,
  // },
];
export const MAIN_NAV_2_LINKS = [
  {
    TITLE: 'Login',
    LINK: '/auth/login',
    SLUG: 'login',
    TYPE: 2,
  },
  {
    // TITLE: 'Shop Now',
    TITLE: 'Get Started',
    LINK: '/auth/register',
    // LINK: '/shopper',
    SLUG: 'register',
    TYPE: 2,
  },

  {
    TITLE: 'Login',
    LINK: '/auth/login',
    SLUG: 'login',
    TYPE: 1,
  },
  {
    TITLE: 'Get Started',
    // LINK: '/auth/register',
    LINK: '/auth/register',
    SLUG: 'register',
    TYPE: 1,
  },
];

export const LANDING_PAGE_LINKS_1 = [
  {
    TITLE: 'Download App',
    // LINK: '/auth/login',
    LINK: 'https://linktr.ee/vendorstack',
    SLUG: 'download',
    TARGET: '_blank',
  },
  {
    TITLE: 'Shop Now',
    // LINK: '/auth/register',
    LINK: '/shopper',
    SLUG: 'register',
  },
];

export const LANDING_PAGE_LINKS_3 = [
  {
    TITLE: 'Download App',
    // LINK: '/auth/login',
    LINK: 'https://linktr.ee/vendorstack',
    SLUG: 'download',
    TARGET: '_blank',
  },
  {
    TITLE: 'Get Started Now',
    // LINK: '/auth/register',
    LINK: '/auth/register',
    SLUG: 'register',
  },
];

export const LANDING_PAGE_LINKS_4 = [
  {
    TITLE: 'Sign In',
    LINK: '/auth/login',
    SLUG: 'sign-in',
  },
  {
    TITLE: 'Get Started',
    // LINK: '/auth/register',
    LINK: '/auth/register',
    SLUG: 'register',
  },
];

export const LANDING_PAGE_LINKS_2 = [
  {
    TITLE: 'Sign In',
    LINK: '/auth/login',
    SLUG: 'sign-in',
  },
  {
    TITLE: 'Shop Now',
    // LINK: '/auth/register',
    LINK: '/shopper',
    SLUG: 'register',
  },
];

export const LANDING_PAGE_LINKS_5 = [
  {
    TITLE: 'Sign In',
    LINK: '/auth/login',
    SLUG: 'sign-in',
  },
  {
    TITLE: 'Get Started',
    // LINK: '/auth/register',
    LINK: '/auth/register',
    SLUG: 'register',
  },
];

export const DOWNLOAD_ICONS = [
  {
    // IMAGE: '/../public/assets/images/AppStoreNew.png',
    IMAGE: '/../public/assets/images/AppStoreNew.webp',
    LINK: 'https://testflight.apple.com/join/VvqsG5Co',
    SLUG: 'download',
  },
  {
    // IMAGE: '/../public/assets/images/Store50.png',
    IMAGE: '/../public/assets/images/StoreBadge.webp',
    LINK: 'https://play.google.com/apps/testing/com.vendorstack',
    SLUG: 'register',
  },
];

export const FOOTER_LINKS = [
  {
    TITLE: 'Home',
    LINK: '/',
    SLUG: 'home',
  },
  // {
  //   TITLE: 'Buyers',
  //   LINK: '/buyers',
  //   SLUG: 'vendors',
  // },
  {
    TITLE: 'About',
    LINK: '/about',
    SLUG: 'about',
  },

  {
    TITLE: 'FAQ',
    LINK: '/faq',
    SLUG: 'faq',
  },
  {
    TITLE: 'Blog',
    LINK: '/blog',
    SLUG: 'blog',
  },
  {
    TITLE: 'Support',
    LINK: '/support',
    SLUG: 'support',
  },
  {
    TITLE: 'Pricing',
    LINK: '/pricing',
    SLUG: 'pricing',
  },
  {
    TITLE: 'Themes',
    LINK: '/themes',
    SLUG: 'themes',
  },
  {
    TITLE: 'Ads',
    LINK: '/ads',
    SLUG: 'ads',
  },
  // {
  //   TITLE: 'Home',
  //   LINK: '/',
  //   SLUG: 'home',
  // },
  // {
  //   TITLE: 'Features',
  //   LINK: '/features',
  //   SLUG: 'features',
  // },
  // {
  //   TITLE: 'Blog',
  //   LINK: '/blog',
  //   SLUG: 'blog',
  // },
  // {
  //   TITLE: 'Contact',
  //   LINK: '/contact',
  //   SLUG: 'contact',
  // },
  // {
  //   TITLE: 'About',
  //   LINK: '/about',
  //   SLUG: 'about',
  // },
];

export const DASHBOARD_LINKS = [
  // {
  //   TITLE: 'Home',
  //   LINK: '/shopper',
  //   SLUG: 'shopper',
  //   PROTECTED: false,
  //   ISVENDOR: false,
  //   ICON: (isActive: boolean) => <NavHomeIcon isActive={isActive} />,
  // },
  // {
  //   TITLE: 'Search',
  //   // LINK: '/shopper/search',
  //   LINK: '/shopper/popular-vendors',
  //   SLUG: 'search',
  //   PROTECTED: false,
  //   ISVENDOR: false,
  //   ICON: (isActive: boolean) => <NavSearch isActive={isActive} />,
  // },

  {
    TITLE: 'My Orders',
    LINK: '/shopper/my-order',
    SLUG: 'my-order',
    PROTECTED: false,
    ISVENDOR: false,
    ICON: (isActive: boolean) => <ShoppingCartIcon isActive={isActive} />,
  },
  {
    TITLE: 'Account',
    LINK: '/shopper/account',
    SLUG: 'account',
    PROTECTED: true,
    ISVENDOR: false,
    ICON: (isActive: boolean) => <NavProfileIcon isActive={isActive} />,
  },
  {
    TITLE: 'Rewards',
    LINK: '/shopper/rewards',
    SLUG: 'rewards',
    PROTECTED: true,
    ISVENDOR: false,
    ICON: (isActive: boolean) => <RewardIcon isActive={isActive} />,
  },
//   {
//     TITLE: 'Add Business',
//     LINK: '#',
//     SLUG: 'add-business',
//     IS_BTN: true,
//     PROTECTED: true,
//     ISVENDOR: false,
//     ICON: () => <NavAddIcon />,
//   },
  {
    TITLE: 'Support',
    LINK: '/shopper/support',
    SLUG: 'support',
    ISVENDOR: false,
    PROTECTED: false,
    ICON: (isActive: boolean) => <NavSupportIcon isActive={isActive} />,
  },
//   {
//     TITLE: 'Logout',
//     LINK: '/',
//     SLUG: 'logout',
//     IS_BTN: true,
//     PROTECTED: false,
//     ISVENDOR: false,
//     ICON: () => <LogoutIcon />,
//   },
];
export const DASHBOARD_LINKS_MOBILE = [
  {
    TITLE: 'Account',
    LINK: '/shopper/account',
    SLUG: 'account',
    PROTECTED: true,
    ICON: (isActive: boolean) => <NavProfileIcon isActive={isActive} />,
  },
  {
    TITLE: 'Contact Details',
    LINK: '/shopper/account/edit-profile',
    SLUG: 'contact',
    PROTECTED: true,
    ICON: (isActive: boolean) => <NavHomeIcon isActive={isActive} />,
  },
  {
    TITLE: 'Help & Support',
    LINK: '/shopper',
    SLUG: 'support',
    PROTECTED: false,
    ICON: (isActive: boolean) => <HelpIcon isActive={isActive} />,
  },
  // {
  //   TITLE: 'Logout',
  //   LINK: '/shopper',
  //   SLUG: 'logout',
  //   IS_BTN: true,
  //   PROTECTED: false,
  //   ICON: () => <LogoutIcon />,
  // },
];
export const VENDOR_DASHBOARD_LINKS = [
//   {
//     TITLE: 'Dashboard',
//     LINK: '/vendor/[vendorId]',
//     SLUG: 'dashboard',
//     PROTECTED: true,
//     ISVENDOR: true,
//     ICON: (isActive: boolean) => <NavMenuIcon isActive={isActive} />,
//   },
//   {
//     TITLE: 'Customer Order',
//     LINK: '/vendor/[vendorId]/orders',
//     SLUG: 'orders',
//     PROTECTED: true,
//     ISVENDOR: true,
//     ICON: (isActive: boolean) => <ShoppingCartIcon isActive={isActive} />,
//   },
//   {
//     TITLE: 'Profile',
//     LINK: '/vendor/[vendorId]/profile',
//     SLUG: 'profile',
//     PROTECTED: true,
//     ISVENDOR: true,
//     ICON: (isActive: boolean) => <NavProfileIcon isActive={isActive} />,
//   },
//   {
//     TITLE: 'Products',
//     LINK: '/vendor/[vendorId]/products',
//     SLUG: 'products',
//     PROTECTED: true,
//     ISVENDOR: true,
//     ICON: (isActive: boolean) => <NavProductIcon isActive={isActive} />,
//   },
//   {
//     TITLE: 'Product tags',
//     LINK: '/vendor/[vendorId]/product-tags',
//     SLUG: 'category',
//     PROTECTED: true,
//     ISVENDOR: true,
//     ICON: (isActive: boolean) => <NavTagIcon isActive={isActive} />,
//   },
//   {
//     TITLE: 'Inbox',
//     LINK: '/vendor/[vendorId]/inbox',
//     SLUG: 'inbox',
//     PROTECTED: true,
//     ISVENDOR: true,
//     ICON: (isActive: boolean) => <ChatIcon isActive={isActive} />,
//   },
//   {
//     TITLE: 'Sales report',
//     LINK: '/vendor/[vendorId]/sales-report',
//     SLUG: 'sales-report',
//     PROTECTED: true,
//     ISVENDOR: true,
//     ICON: (isActive: boolean) => <NavChartIcon isActive={isActive} />,
//   },
//   {
//     TITLE: 'Video Guide',
//     LINK: '/vendor/[vendorId]/video',
//     SLUG: 'video',
//     ISVENDOR: true,
//     PROTECTED: true,
//     // ICON: (isActive: boolean) => <NavAdsIcon isActive={isActive} />,
//     ICON: (isActive: boolean) => <VideoGuideIcon isActive={isActive} />,
//   },
//   {
//     TITLE: 'Delivery fees',
//     LINK: '/vendor/[vendorId]/delivery-fee',
//     SLUG: 'delivery-fee',
//     ISVENDOR: true,
//     PROTECTED: true,
//     ICON: (isActive: boolean) => <NavDeliveryIcon isActive={isActive} />,
//   },
//   {
//     TITLE: 'Rewards',
//     LINK: '/vendor/[vendorId]/rewards',
//     SLUG: 'rewards',
//     PROTECTED: true,
//     ISVENDOR: true,
//     ICON: (isActive: boolean) => <RewardIcon isActive={isActive} />,
//   },
//   {
//     TITLE: 'Bank details',
//     LINK: '/vendor/[vendorId]/account-details',
//     SLUG: 'account-details',
//     PROTECTED: true,
//     ISVENDOR: true,
//     ICON: (isActive: boolean) => <BankAccountIcon isActive={isActive} />,
//   },
  {
    TITLE: 'View storefront',
    LINK: 'store',
    SLUG: 'store-front',
    ISVENDOR: true,
    PROTECTED: true,
    ICON: (isActive: boolean) => <NavHomeIcon isActive={isActive} />,
  },
  {
    TITLE: 'Support',
    LINK: 'support',
    SLUG: 'support',
    ISVENDOR: false,
    PROTECTED: false,
    ICON: (isActive: boolean) => <NavSupportIcon isActive={isActive} />,
  },
];
// export const USER_PROFILE_LINKS =  [
//   TITLE: 'Like Collection',
//   LINK: 'account/my-profile/collection',
//   SLUG: 'collection',
//   ICON: (isActive: boolean) => <Nav isActive={isActive} />,
// ]
