<template functional>
<section class="container">
	<img class="background" src="~assets/ayotte-software-logo-greyscale-rotated90.svg"/>
	<div>
		<img
			class="headshot"
			height="200"
			src="~assets/headshot.jpg"
			width="200"
		/>
		<h1 class="title">Richard Ayotte</h1>
		<h2 class="subtitle">Full Stack Developer</h2>
		<div class="links">
			<a
				class="button"
				href="https://www.linkedin.com/in/richayotte/"
			>LinkedIn</a>
			<a
				class="button"
				href="https://stackoverflow.com/story/richayotte"
			>Stack Exchange</a>
			<a
				class="button"
				href="https://github.com/RichAyotte"
			>Github</a>
		</div>
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
	</div>
</section>
</template>

<style lang="stylus" scoped>
@import '~assets/variables'

.background
	display none
	@media $screen-xl
		display block
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

.headshot
	border-radius 5px
	box-shadow 10px 10px 5px 0px rgba(0,0,0,0.2)
	display block
	margin 25px auto
	transform rotate(-8deg)

.title
	font-family 'Gnuolane'
	font-size responsive 40px 100px
	font-weight 400
	letter-spacing 1px
	margin-top 15px
	display inline-block

.subtitle
	font-size responsive 26px 42px
	font-weight 300
	letter-spacing responsive 4px 15px
	white-space nowrap
	clear both

.links
	margin 15px
	a
		border-radius 5px
		display inline-block
		margin 5px

.card
	background-color brand-orange
	border 5px solid darken(brand-orange, 20%)
	border-radius 5px
	color lighten(brand-orange, 50)
	display block
	font-size responsive 12px 16px
	margin 15px 0
	padding 20px
	tab-size 4
	text-align left
	strong
		text-shadow 2px 2px 4px rgba(0,0,0,0.4)
</style>
