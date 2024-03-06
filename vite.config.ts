import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import dotenvExpand from 'dotenv-expand'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
	// Only modify process.env in development mode
	if (mode === 'development') {
		const env = loadEnv(mode, process.cwd(), '')
		dotenvExpand.expand({ parsed: env })
	}

	return {
		plugins: [react()],
		// server: {
		// 	port: 5173,
		// 	proxy: {
		// 		'/api': {
		// 			target: 'http://localhost:3000',
		// 			changeOrigin: true,
		// 			secure: false,
		// 		},
		// 	},
		// },
	}
})
