'use strict';

module.exports = {
  db: process.env.MONGODB_URL || 'mongodb://localhost:27017/LiberstadMembershipPortalDev',
  port: process.env.PORT || 3000,
  ws: process.env.PORT_WS || 9000,
  apiKey: process.env.API_KEY,
  environment: 'DEV',
  sync: {
    limit: 2
  }
};