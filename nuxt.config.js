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
const pkg = require('./package')

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
		title: `Richard Ayotte`
		, meta: [
			{
				charset: 'utf-8'
			}
			, {
				name: 'viewport'
				, content: 'width=device-width, initial-scale=1'
			}
			, {
				name: 'description'
				, hid: 'description'
				, content: pkg.description
			}
			, {
				name: 'msapplication-TileColor'
				, content: '#e36f1e'
			}
			, {
				name: 'theme-color'
				, content: '#e36f1e'
			}

		]
		, link: [
			/**
			 * Icons
			 */
			{
				href: '/apple-touch-icon.png'
				, rel: 'apple-touch-icon'
				, sizes: '180x180'
			}
			, {
				href: '/favicon-16x16.png'
				, rel: 'icon'
				, sizes: '16x16'
				, type: 'image/png'
			}
			, {
				href: '/favicon-32x32.png'
				, rel: 'icon'
				, sizes: '32x32'
				, type: 'image/png'
			}
			, {
				href: '/site.webmanifest'
				, rel: 'manifest'
			}
			, {
				color: '#e36f1e'
				, href: '/safari-pinned-tab.svg'
				, rel: 'mask-icon'
			}
		]
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
