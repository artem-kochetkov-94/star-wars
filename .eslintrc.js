// eslint-disable-next-line no-undef
module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint'],
	rules: {
		semi: 'off',
		'@typescript-eslint/semi': ['warn'],
		'@typescript-eslint/no-empty-interface': [
			'error',
			{
				allowSingleExtends: true,
			},
		],
		'no-empty': 'off',
		// feature-sliced/import-order
		'import/order': 'error', // ~ 1,
		// feature-sliced/public-api
		'import/no-internal-modules': 'error', // ~ 1,
		// feature-sliced/layers-slices
		'boundaries/element-types': 'error', // ~ 1,
	},
	ignorePatterns: ['**/*.css', '**/*.scss'],
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react-hooks/recommended',
		'@feature-sliced/eslint-config/rules/import-order',
		'@feature-sliced/eslint-config/rules/public-api',
		'@feature-sliced/eslint-config/rules/layers-slices',
	],
};
