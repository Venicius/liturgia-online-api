'use strict';

/**
 * laude service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::laude.laude');
