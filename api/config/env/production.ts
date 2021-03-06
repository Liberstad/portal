'use strict';

module.exports = {
  db: process.env.MONGODB_URL || 'mongodb://blockcore-vault-db:27017/LiberstadMembershipPortal',
  port: process.env.PORT || 3001,
  ws: process.env.PORT_WS || 9001,
  apiKey: process.env.API_KEY,
  environment: 'PRD',
  sync: {
    limit: 2
  }
};