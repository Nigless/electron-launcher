module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	plugins: [
		'@typescript-eslint',
		'prettier',
		'jsdoc',
		'unicorn',
		'import',
		'svelte3',
	],
	extends: [
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended',
		'plugin:jsdoc/recommended',
		'plugin:unicorn/recommended',
		'plugin:import/recommended',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 12,
		sourceType: 'module',
	},
	overrides: [
		{
			files: ['*.svelte'],
			processor: 'svelte3/svelte3',
		},
	],
	settings: {
		'svelte3/typescript': require('typescript'),
	},
	rules: {
		'prefer-arrow-callback': 2,
		'arrow-parens': 2,
		'lines-around-comment': [2, { beforeBlockComment: true }],

		// prettier plugin
		'prettier/prettier': [
			'error',
			{},
			{
				usePrettierrc: true,
			},
		],

		// jsdoc plugin
		'jsdoc/require-param-type': 0,
		'jsdoc/require-returns-type': 0,
		'jsdoc/no-types': 2,
		'jsdoc/check-param-names': 2,

		// typescript plugin
		'@typescript-eslint/explicit-function-return-type': 0,
		'@typescript-eslint/explicit-module-boundary-types': 2,

		// import plugin
		'import/no-unresolved': 0,
	},
};
