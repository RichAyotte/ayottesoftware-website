/**
 * @overview    Nuxt config
 * @author      Richard Ayotte
 * @copyright   Copyright © 2019 Richard Ayotte
 * @date        2018-11-05 08:00:06
 * @license     MIT License
 */

const imageminMozjpeg = require('imagemin-mozjpeg')
const ImageminPlugin = require('imagemin-webpack-plugin').default
const rucksackCss = require('rucksack-css')

const getBuildPlugins = () => {
	if (process.env.NODE_ENV !== 'production') {
		return []
	}

	return [
		new ImageminPlugin({
			plugins: [
				imageminMozjpeg({
					quality: 75
					, progressive: false
				})
			]
			, test: /\.(jpg|svg)$/
		})
	]
}

module.exports = {
	mode: 'universal'

	/*
	 ** Headers of the page
	 */
	, head: {
		title: `Richard Ayotte - Full Stack Software Engineer`
	}

	/**
	 * Icon
	 * @type {Object}
	 */
	, icon: {
		iconSrc: 'assets/power-button 971x971.png'
	}

	/*
	 ** Customize the progress-bar color
	 */
	, loading: {
		// brand orange
		color: '#e36f1e'
	}

	/**
	 * Server
	 * @type {Object}
	 */
	, server: {
		host: '0.0.0.0'
		, port: 3000
	}

	/*
	 ** Global CSS
	 */
	, css: [
		{
			lang: 'stylus'
			, src: 'assets/global.styl'
		}
	]

	/**
	 * Modules
	 * @type {Array}
	 */
	, modules: [
		'@nuxtjs/pwa'
	]

	/*
	 ** Build configuration
	 */
	, build: {
		/*
		 ** You can extend webpack config here
		 */
		extend(config, ctx) {
			// Run ESLint on save
			if (ctx.isDev && ctx.isClient) {
				config.module.rules.push({
					enforce: 'pre'
					, test: /\.(js|vue)$/
					, loader: 'eslint-loader'
					, exclude: /(node_modules)/
				})
			}
		}
		, plugins: getBuildPlugins()
		, parallel: true
		, postcss: [
			rucksackCss
		]
	}
}
