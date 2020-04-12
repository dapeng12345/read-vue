module.exports = {
	root: true,
	env: {
		node: true
	},
	extends: [
		'plugin:vue/essential',
		'@vue/standard'
	],
	parserOptions: {
		parser: 'babel-eslint'
	},
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'vue/no-unused-components': 0,
		'quotes': 0,
		'indent': 0,
		'no-trailing-spaces': 0,
		'no-tabs': 0,
		'eol-last': 0,
		'space-before-function-paren': 0,
		'spakey-spacing': 0,
		'comma-spacing': 0,
		'key-spacing': 0,
		'comma-spacing': 0,
		'semi': 0
	}
}
