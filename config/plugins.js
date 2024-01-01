module.exports = ({ env }) => ({
  // ...
  "vercel-deploy": {
    enabled: true,
    config: {
      deployHook: process.env.VERCEL_DEPLOY_PLUGIN_HOOK,
      apiToken: process.env.VERCEL_DEPLOY_PLUGIN_API_TOKEN,
      appFilter: process.env.VERCEL_DEPLOY_PLUGIN_APP_FILTER,
      teamFilter: process.env.VERCEL_DEPLOY_PLUGIN_TEAM_FILTER,
      // teamFilter: "your-team-id-on-vercel",
      roles: ["strapi-super-admin", "strapi-editor", "strapi-author"],
    },
  },
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: 'dzqmbc3vx',
        api_key: '871789467874979',
        api_secret: 'ABazSLcHQ94SFEqGe7PwewmAIw8',
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
  // ...
});