module.exports = {
    apps: [
      {
        name: "Inventario",
        script: "server.js",
        instances: 1,
        autorestart: true,
        watch: false,
        env: {
          NODE_ENV: "development",
          PORT: 3002
        },
        env_production: {
          NODE_ENV: "production",
          PORT: 3002
        }
      }
    ]
  };
  