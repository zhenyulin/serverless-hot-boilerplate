module.exports = {
	projects: [
		{
			runner: 'jest-runner-eslint',
			displayName: 'lint',
		},
		{
			displayName: 'test',
			modulePaths: ['node_modules', './src'],
			testPathIgnorePatterns: ['node_modules', '/__fixtures__/', 'helpers'],
			testEnvironment: 'node',
		},
	],
};
