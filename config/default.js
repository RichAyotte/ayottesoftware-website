/**
 * @overview    Default config
 * @author      Richard Ayotte
 * @copyright   Copyright © 2018 Richard Ayotte
 * @date        2018-11-01 22:24:46
 * @license     GNU GPL-3.0
 */

const domain = ''

const config = {
	isDebug: false
	, location: {
		hostname: domain
		, port: null
		, protocol: 'http'
		, get url() {
			return `${this.protocol}://${this.hostname}:${this.port}`
		}
	}
}

module.exports = config
