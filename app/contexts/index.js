'use strict';

/***********************************************************************************************************************************************
 * APPLICATION CONTEXTS
 ***********************************************************************************************************************************************
 * @description
 */

/**
 *
 */
export default {
  Public: function() { return require('./public'); },
  Private: function() { return require('./private'); }
};
