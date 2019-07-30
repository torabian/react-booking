module.exports.apps = [
  {
    name: 'react-booking',
    script: '/var/www/react-booking/server.js',
    cwd: '/var/www/react-booking',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env_production: {
      NODE_ENV: 'production',
      PORT: 5020
    }
  }
];

