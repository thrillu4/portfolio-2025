import { AnimatePresence } from 'motion/react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import App from './App.tsx'
import ScrollToTop from './components/ScrollToTop.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<BrowserRouter>
			<ScrollToTop />
			<AnimatePresence mode='wait'>
				<App />
			</AnimatePresence>
		</BrowserRouter>
	</StrictMode>
)
