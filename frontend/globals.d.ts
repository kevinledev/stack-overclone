declare global {
  interface Window {
    currentUser?: {
      id: number;
      [key: string]: any;
    };
    getState?: () => any;
    loginLogo: string;
    logoTransparent: string;
    searchIcon: string;
    qBubble: string;
    voteIcon: string;
    tagIcon: string;
    trophyIcon: string;
    globe: string;
    homepageSaturn: string;
    teamsfree: string;
    homepageSearch: string;
    reactLogo: string;
    reduxLogo: string;
    rubyLogo: string;
    postgresLogo: string;
    orgImg: string;
    homeGlobe: string;
  }
}
export {};
