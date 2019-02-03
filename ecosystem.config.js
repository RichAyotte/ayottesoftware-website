/**
 * @overview    PM2 Config
 * @author      Richard Ayotte
 * @copyright   Copyright © 2018 Richard Ayotte
 * @date        2018-10-29 16:33:42
 * @license     GNU GPL-3.0
 */

/* eslint-disable camelcase */
module.exports = {
	/**
	 * Application configuration section
	 * http://pm2.keymetrics.io/docs/usage/application-declaration/
	 */
	apps: [
		{
			name: 'ayottesoftware.com'
			, cwd: '/opt/ayottesoftware/current'
			, env: {
				NODE_APP_INSTANCE: 'production'
				, NODE_CONFIG_DIR: '/opt/ayottesoftware/current/config'
				, NODE_ENV: 'production'
				, NODE_PATH: '/opt/ayottesoftware/current'
			}
			, interpreter_args: '--harmony'
			, script: 'server/index.js'
			, watch: false
		}
	]
}
