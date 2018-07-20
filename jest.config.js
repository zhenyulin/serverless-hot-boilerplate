require('dotenv').config();

const path = require('path');

const integrationTestConfig = {
	testMatch: ['**/__integrations__/**/*.js?(x)'],
};

module.exports = {
	modulePaths: [path.resolve('./src'), 'node_modules'],
	...(process.env.INTEGRATION_TEST ? integrationTestConfig : {}),
};
