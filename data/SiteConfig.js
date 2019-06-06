const config = {
  siteTitle: "Projektmanagementblog", // Site title.
  siteTitleShort: "Projektmanagementblog", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "Projektmanagementblog. Klassisch, agil, hybrid.", // Alternative site title for SEO.
  siteLogo: "/favicon.png", // Logo used for SEO and manifest.
  siteUrl: "https://projektmanagementblog.de", // Domain of your website without pathPrefix.
  pathPrefix: "", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: "Gedanken über Projektmanagement. Klassisch, agil, hybrid.", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  googleAnalyticsID: "UA-74431055-2", // GA tracking ID.
  postDefaultCategoryID: "Projektmanagement", // Default category for posts.
  dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
  dateFormat: "DD.MM.YYYY", // Date format for display.
  userName: "Stephan Weinhold", // Username to display in the author segment.
  userEmail: "stephan.weinhold@projektmanagementblog.de", // Email used for RSS feed's author segment
  userTwitter: "StephanWeinhold", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Salzburg, Austria", // User location to display in the author segment.
  userAvatar: "/stephan-weinhold.png", // User avatar to display in the author segment.
  userDescription:
    "Stephan Weinhold ist ein Projektmanager mit über 15 Jahren Erfahrung im hybriden Projektmanagement, einer Vorliebe für Technologie, und ohne Scheu, anzupacken und Neues auf die Beine zu stellen.", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/StephanWeinhold",
      iconClassName: "fa fa-github"
    },
    {
      label: "Twitter",
      url: "https://twitter.com/StephanWeinhold",
      iconClassName: "fa fa-twitter"
    },
    {
      label: "Email",
      url: "mailto:stephan.weinhold@projektmanagementblog.de",
      iconClassName: "fa fa-envelope"
    }
  ],
  copyright: "Copyright © 2019. Stephan Weinhold", // Copyright string for the footer of the website and RSS feed.
  themeColor: "#0065bd", // Used for setting manifest and progress theme colors.
  backgroundColor: "#0065bd" // Used for setting manifest background color.
};

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === "/") {
  config.pathPrefix = "";
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/")
  config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== "/")
  config.siteRss = `/${config.siteRss}`;

module.exports = config;
