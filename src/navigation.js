import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    // {
    //   text: 'Boxing',
    //   links: [
    //     {
    //       text: 'Boxers',
    //       href: getPermalink('/boxers'),
    //     },
    //     {
    //       text: 'Divisions',
    //       href: getPermalink('/weight-classes'),
    //     },
    //     {
    //       text: 'Fights',
    //       href: getPermalink('/fights'),
    //     },
    //     {
    //       text: 'Schedule',
    //       href: getPermalink('/schedule'),
    //     },
    //     {
    //       text: 'Tickets',
    //       href: getPermalink('/tickets'),
    //     },
    //   ],
    // },
    {
      text: 'Videos',
      links: [
        {
          text: 'YouTube',
          href: 'https://serp.ly/@serpgames/youtube',
          target: '_blank',
        },
      ],
    },
    {
      text: 'Content',
      links: [
        {
          text: 'Blog',
          href: getBlogPermalink(),
        },
        // {
        //   text: 'Glossary',
        //   href: getPermalink('/glossary'),
        // },
      ],
    },
   
  ],
  actions: [{ text: 'Subscribe', href: '/subscribe', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Company',
      links: [
        { text: 'Website', href: 'https://serp.games' },
        { text: 'About', href: '/about' },
      ],
    },
    {
      title: 'Community',
      links: [
        { text: 'Newsletter', href: '/subscribe' },
        { text: 'Forum', href: '/#' },
        { text: 'Community', href: '/#' },
      ],
    },
    {
      title: 'Links',
      links: [
        { text: 'Medium', href: 'https://medium.com/serpgames', target: '_blank' },
        { text: 'Pages', href: 'https://serpgames.pages.dev', target: '_blank' },
        { text: 'Substack', href: 'https://serpgames.substack.com/', target: '_blank' },
        { text: 'Hashnode', href: 'https://serpgames.hashnode.dev/', target: '_blank' },
        { text: 'Website', href: 'https://serp.games/', target: '_blank' },
      ],
    },
    {
      title: 'Boring Stuff',
      links: [
        { text: 'Privacy Policy', href: '/privacy' },
        { text: 'Terms & Conditions', href: '/terms' },
        { text: 'Affiliate Disclosure', href: '/affiliate-disclosure' },
        { text: 'DMCA', href: '/dmca' },
        { text: 'Archive', href: '/archive' },
        { text: 'Tags', href: '/tags' },
      ],
    },
  ],
  secondaryLinks: [
    // { text: 'Free Stuff', href: 'https://stuff.serp.games' },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://serp.ly/@serpgames/twitter', target: '_blank' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://serp.ly/@serpgames/instagram', target: '_blank' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://serp.ly/@serpgames/facebook', target: '_blank' },
    { ariaLabel: 'YouTube', icon: 'tabler:brand-youtube', href: 'https://serp.ly/@serpgames/youtube', target: '_blank' },
    { ariaLabel: 'Linkedin', icon: 'tabler:brand-linkedin', href: 'https://serp.ly/@serpgames/linkedin', target: '_blank' },
    { ariaLabel: 'TikTok', icon: 'tabler:brand-tiktok', href: 'https://serp.ly/@serpgames/tiktok', target: '_blank' },
    { ariaLabel: 'Medium', icon: 'tabler:brand-medium', href: 'https://serp.ly/@serpgames/medium', target: '_blank' },
  ],
  // footNote: `
  //   <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm bg-[url(https://onwidget.com/favicon/favicon-32x32.png)]"></span>
  //   Made by <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://onwidget.com/"> onWidget</a> · All rights reserved.
  // `,
};
