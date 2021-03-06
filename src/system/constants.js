'use strict';

/***********************************************************************************************************************************************
 * SUCCOTASH - SYSTEM - CONSTANTS
 ***********************************************************************************************************************************************
 * @description
 */
const path = require('path');

/**
 * [HOME_DIR description]
 * @type {Object}
 */
export default {
  HOME_DIR: {
    win32: 'USERPROFILE',
    darwin: 'HOME',
    default: 'HOME'
  },
  SETTINGS_FILE: '.succotashrc',
  HARVEST_API: 'https://api.harvestapp.com/v2',
  SUCCOTASH_API: 'http://127.0.0.1:27922',
  ROUTING: {
    NO_AUTH: '#/login',
    NO_ACCESS: '#/'
  }
}
