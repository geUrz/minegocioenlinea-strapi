module.exports = [
  'strapi::errors',

  {
    name: 'strapi::cors',
    settings: {
      cors: {
        enabled: true,
        origin: ['*'],
        headers: ['Content-Type', 'Authorization', 'X-Frame-Options'],
        methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
        credentials: true,
      },
    }
  },

  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': [
            "'self'",
            'data:',
            'blob:',
            'market-assets.strapi.io',
            'https://minegocioenlinea-strapi.s3.us-east-2.amazonaws.com/',
          ],
          'media-src': [
            "'self'",
            'data:',
            'blob:',
            'market-assets.strapi.io',
            'https://minegocioenlinea-strapi.s3.us-east-2.amazonaws.com/',
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
];
