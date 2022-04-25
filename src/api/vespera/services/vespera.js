'use strict';

/**
 * vespera service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::vespera.vespera');
