interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  keywords: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const getBasePath = () => {
  const baseUrl = import.meta.env.BASE_URL;
  return baseUrl === '/' ? '' : baseUrl;
};

const data: ISiteMetadataResult = {
  siteTitle: 'ZJQ\'s Workouts Map',
  siteUrl: 'https://workouts.jqz3.tech',
  logo: 'https://avatars.githubusercontent.com/u/15013685',
  description: 'Personal Workouts Page',
  keywords: 'workouts, running, cycling, riding',
  navLinks: [
    {
      name: 'Summary',
      url: `${getBasePath()}/summary`,
    },
    {
      name: 'Blog',
      url: 'https://jqz3.tech',
    }
  ],
};

export default data;
