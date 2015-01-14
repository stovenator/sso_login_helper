var config = {};

// URLS (wildcards supported) of URLS we want to inject basic auth headers in
config.remote_login_urls = [
  "*://query.glgroup.com/*",
  "*://mosaic.glgroup.com/*",
  "*://baristagram.glgroup.com/*",
  "*://*.glgresearch.com/*"
];

// The logout URL of the SSO portal
config.sso_logout_url = "https://my.glgroup.com/LogoutServlet";
