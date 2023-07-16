// eslint-disable-next-line no-undef
module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ['eslint:recommended', 'plugin:react/recommended'],
	overrides: [],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react', 'simple-import-sort'],
	rules: {
		'no-mixed-spaces-and-tabs': 0,
		'simple-import-sort/imports': [
			'error',
			{
				groups: [['^react'], ['^antd'], ['^@?\\w'], ['@/(.*)'], ['^[./]']],
			},
		],
	},
};
