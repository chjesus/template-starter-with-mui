import { resolve } from 'node:path'
import babel from '@rolldown/plugin-babel'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'

// https://vite.dev/config/

export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd(), '')

	return {
		server: {
			open: true,
			strictPort: true,
			port: env.APP_PORT ? Number(env.APP_PORT) : 5173,
		},
		define: {
			global: 'window',
		},
		resolve: {
			alias: [
				{
					find: '@app',
					replacement: resolve(import.meta.dirname, '/src/app'),
				},
				{
					find: '@pages',
					replacement: resolve(import.meta.dirname, '/src/pages'),
				},
				{
					find: '@shared',
					replacement: resolve(import.meta.dirname, '/src/shared'),
				},
				{
					find: '@widgets',
					replacement: resolve(import.meta.dirname, '/src/widgets'),
				},
				{
					find: '@entities',
					replacement: resolve(import.meta.dirname, '/src/entities'),
				},
			],
		},
		plugins: [
			react(),
			babel({
				presets: [
					reactCompilerPreset(),
				],
			}),
		],
	}
})
