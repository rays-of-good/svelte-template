import child from 'child_process'

import svelte from 'rollup-plugin-svelte'
import typescript from '@rollup/plugin-typescript'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import livereload from 'rollup-plugin-livereload'
import { terser } from 'rollup-plugin-terser'
import css from 'rollup-plugin-css-only'

import { configureSvelte } from './svelte.config.js'
import { configureTypescript } from './typescript.config.js'
import { configureCommonJS } from './commonjs.config.js'

const serve = () => {
	let server

	const toExit = () => {
		if (server) server.kill(0)
	}

	return {
		writeBundle: () => {
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

export function configureRollup(develop) {
	if (develop) {
		develop = true
	}

	return {
		input: 'src/main.ts',

		output: {
			sourcemap: develop,
			format: 'iife',
			name: 'app',
			file: 'public/build/bundle.js'
		},

		plugins: [
			svelte(configureSvelte(develop)),
			typescript(configureTypescript(develop)),
			commonjs(configureCommonJS(develop)),

			css({
				output: 'bundle.css',
			}),

			resolve({
				browser: true,
				dedupe: ['svelte'],
			}),

			develop && serve(),
			develop && livereload('public'),
			
			!develop && terser(),
		],
		watch: {
			clearScreen: false,
		},
	}
}

let r = configureRollup(process.env.ROLLUP_WATCH)

export default r