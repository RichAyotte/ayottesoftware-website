<template functional>
<section class="container">
	<img class="background" src="~assets/ayotte-software-logo-greyscale-rotated90.svg"/>
	<div>
		<h1 class="title">Richard Ayotte</h1>
		<h2 class="subtitle">Web Software Artist</h2>
<pre class="card"><code>const i = {
	paints: [<strong>
		`JavaScript`
		, `HTML`
		, `CSS`
		, `Vue.js`
		, `GraphQL`
		, `SQL`
	</strong>]
	, brushes: [<strong>
		`Debian GNU/Linux`
		, `Git`
		, `Intern`
		, `Sublime Text`
	</strong>]
	, surfaces: [<strong>
		`Node.js`
		, `Browsers`
	</strong>]
	, cleaners: [<strong>
		`Running`
		, `Chess`
		, `Philosophy`
	</strong>]
}
</code></pre>
		<div class="links">
			<a
				class="button"
				href="https://stackoverflow.com/story/richayotte"
			>Stack Exchange</a>
			<a
				class="button"
				href="https://github.com/RichAyotte"
			>Github</a>
			<a
				class="button"
				href="https://www.linkedin.com/in/richayotte/"
			>LinkedIn</a>
		</div>
	</div>
</section>
</template>

<style lang="stylus" scoped>
@import '~assets/variables'

.background
	height 100vh
	opacity 0.8
	position fixed
	right 0
	top 0
	z-index -100

.container
	align-items center
	display flex
	justify-content center
	min-height 100vh
	text-align center

.title
	font-family 'Gnuolane'
	font-size responsive 40px 100px
	font-weight 400
	letter-spacing 1px
	margin-top 15px

.subtitle
	font-size responsive 26px 42px
	font-weight 300
	letter-spacing responsive 4px 15px

.links
	display inline-block
	margin 15px 0

.card
	background-color brand-orange
	border 20px solid darken(brand-orange, 20%)
	color lighten(brand-orange, 50)
	display block
	font-size responsive 12px 16px
	margin 15px 0
	padding 20px
	-moz-tab-size 4
	-o-tab-size 4
	tab-size 4
	text-align left
	strong
		text-shadow 2px 2px 4px rgba(0,0,0,0.4)
</style>
