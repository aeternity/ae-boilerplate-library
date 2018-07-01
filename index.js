/**
 * Polyfill
 * Babel runtime compilation
 * Babel ES6 polyfill
 */
require('babel-register');
require('babel-polyfill');

/**
 * Propagating Environment Variables
 */
require('dotenv').config();

/**
 * source
 */
require('./src');
