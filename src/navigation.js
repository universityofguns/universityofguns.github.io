import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Videos',
      links: [
        {
          text: 'YouTube',
          href: 'https://serp.ly/@universityofguns/youtube',
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
      ],
    },
   
  ],
  actions: [{ text: 'Subscribe', href: '/subscribe/', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Company',
      links: [
        { text: 'Website', href: 'https://universityofguns.com' },
        { text: 'About', href: '/about/' },
      ],
    },
    {
      title: 'Community',
      links: [
        { text: 'Newsletter', href: '/subscribe/.' },
        { text: 'Community', href: '/#' },
      ],
    },
    {
      title: 'Links',
      links: [
        { text: 'Medium', href: 'https://medium.com/universityofguns', target: '_blank' },
        { text: 'Pages', href: 'https://universityofguns.pages.dev', target: '_blank' },
        { text: 'Github', href: 'https://universityofguns.github.io', target: '_blank' },
        // { text: 'Substack', href: 'https://universityofguns.substack.com/', target: '_blank' },
        // { text: 'Hashnode', href: 'https://universityofguns.hashnode.dev/', target: '_blank' },
        { text: 'Website', href: 'https://universityofguns.com', target: '_blank' },
      ],
    },
    {
      title: 'Boring Stuff',
      links: [
        { text: 'Privacy Policy', href: '/privacy/' },
        { text: 'Terms & Conditions', href: '/terms/' },
        { text: 'Affiliate Disclosure', href: '/affiliate-disclosure/' },
        { text: 'DMCA', href: '/dmca/' },
        { text: 'Archive', href: '/archive/' },
        { text: 'Tags', href: '/tags/' },
      ],
    },
  ],
  secondaryLinks: [
    // { text: 'Free Stuff', href: 'https://stuff.universityofguns.com' },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://serp.ly/@universityofguns/twitter', target: '_blank' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://serp.ly/@universityofguns/instagram', target: '_blank' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://serp.ly/@universityofguns/facebook', target: '_blank' },
    { ariaLabel: 'YouTube', icon: 'tabler:brand-youtube', href: 'https://serp.ly/@universityofguns/youtube', target: '_blank' },
    { ariaLabel: 'Linkedin', icon: 'tabler:brand-linkedin', href: 'https://serp.ly/@universityofguns/linkedin', target: '_blank' },
    { ariaLabel: 'TikTok', icon: 'tabler:brand-tiktok', href: 'https://serp.ly/@universityofguns/tiktok', target: '_blank' },
    { ariaLabel: 'Medium', icon: 'tabler:brand-medium', href: 'https://serp.ly/@universityofguns/medium', target: '_blank' },
  ],
};
