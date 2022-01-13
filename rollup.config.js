import svelte from 'rollup-plugin-svelte'
import typescript from '@rollup/plugin-typescript'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import livereload from 'rollup-plugin-livereload'
import { terser } from 'rollup-plugin-terser'
import css from 'rollup-plugin-css-only'

import child from 'child_process'

import { configureSvelte } from './svelte.config.js'
import { configureTypescript } from './typescript.config.js'
import { configureCommonJS } from './commonjs.config.js'

const production = !process.env.ROLLUP_WATCH

function serve() {
	let server

	function toExit() {
		if (server) server.kill(0)
	}

	return {
		writeBundle() {
			if (server) return
			server = child.spawn('npm', ['run', 'start', '--', '--dev'], {
				stdio: ['ignore', 'inherit', 'inherit'],
				shell: true
			})

			process.on('SIGTERM', toExit)
			process.on('exit', toExit)
		}
	};
}

export default {
	input: 'src/main.ts',

	output: {
		sourcemap: !production,
		format: 'iife',
		name: 'app',
		file: 'public/build/bundle.js'
	},

	plugins: [
		svelte(configureSvelte(production)),
		typescript(configureTypescript(production)),
		commonjs(configureCommonJS(production)),

		css({
			output: 'bundle.css',
		}),

		resolve({
			browser: true,
			dedupe: ['svelte'],
		}),

		!production && serve(),
		!production && livereload('public'),
		
		production && terser(),
	],
	watch: {
		clearScreen: false,
	},
}
