'use strict';

/**
 * Expose
 */

module.exports = {
  db: process.env.MONGODB_URL || 'mongodb://blockcore-vault-db:27017/LiberstadMembershipPortalTest',
  port: process.env.PORT || 4000,
  ws: process.env.PORT_WS || 5000,
  apiKey: process.env.API_KEY,
  environment: 'TEST',
  sync: {
    limit: 2
  }
};


