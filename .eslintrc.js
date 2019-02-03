module.exports = {
	root: true
	, env: {
		browser: true
		, node: true
	}
	, parserOptions: {
		parser: 'babel-eslint'
	}
	, extends: [
		'plugin:vue/essential'
		, 'ayotte'
	]
	, plugins: [
		'vue'
	]
	, rules: {
		'import/no-unresolved': 0
		, 'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off'
		, 'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
	}
}
