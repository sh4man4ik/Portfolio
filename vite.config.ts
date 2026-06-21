import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { vercel } from 'vite-plugin-vercel/vite';
import vike from 'vike/plugin';

export default defineConfig({
	plugins: [vike(), react(), tailwindcss(), vercel()],
	server: {
		port: 443
	}
});
