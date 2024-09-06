import type {
  LicenseConfig,
  NavBarConfig,
  ProfileConfig,
  SiteConfig,
} from './types/config'
import { LinkPreset } from './types/config'

export const siteConfig: SiteConfig = {
  title: 'FreeGuyBD',
  subtitle: 'Premium is nothing',
  lang: 'en',         // 'en', 'zh_CN', 'zh_TW', 'ja', 'ko'
  themeColor: {
    hue: 250,         // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
    fixed: false,     // Hide the theme color picker for visitors
  },
  banner: {
    enable: false,
    src: 'assets/images/demo-banner.png',   // Relative to the /src directory. Relative to the /public directory if it starts with '/'
    position: 'center', // Equivalent to object-position, defaults center
    credit: {
      enable: false,         // Display the credit text of the banner image
      text: '',              // Credit text to be displayed
      url: ''                // (Optional) URL link to the original artwork or artist's page
    }
  },
  favicon: [    
    {
     src: 'https://i.ibb.co/27CdzT1/82abb981-74e0-43a1-813f-6fa32f8fe0a5-removebg-preview.png',    // Path of the favicon, relative to the /public directory
    theme: 'light',              // (Optional) Either 'light' or 'dark', set only if you have different favicons for light and dark mode
    sizes: '32x32',              // (Optional) Size of the favicon, set only if you have favicons of different sizes
   }
  ]
}

export const navBarConfig: NavBarConfig = {
  links: [
    LinkPreset.Home,
    LinkPreset.Archive,
    LinkPreset.About,
  
  ],
}

export const profileConfig: ProfileConfig = {
  avatar: 'https://i.ibb.co/hLVnHgF/54b93dfb-c668-406b-9ae0-b3860e5d0ce3.jpg',  // Relative to the /src directory. Relative to the /public directory if it starts with '/'
  name: 'Mahamudun Nabi',
  bio: 'Get premium resources for free.',
  links: [
    {
      name: 'Twitter',
      icon: 'fa6-brands:twitter',       // Visit https://icones.js.org/ for icon codes
                                        // You will need to install the corresponding icon set if it's not already included
                                        // `pnpm add @iconify-json/<icon-set-name>`
      url: '',
    },
    {
      name: 'Steam',
      icon: 'fa6-brands:steam',
      url: '',
    },
    {
      name: 'GitHub',
      icon: 'fa6-brands:github',
      url: '',
    },
  ],
}

export const licenseConfig: LicenseConfig = {
  enable: true,
  name: 'CC BY-NC-SA 4.0',
  url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
}
