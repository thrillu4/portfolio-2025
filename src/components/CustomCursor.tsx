import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect } from 'react'

interface Props {
	visible: number | null
}

const CustomCursor = ({ visible }: Props) => {
	const cursorX = useMotionValue(0)
	const cursorY = useMotionValue(0)

	const springX = useSpring(cursorX, { stiffness: 500, damping: 50 })
	const springY = useSpring(cursorY, { stiffness: 500, damping: 50 })

	useEffect(() => {
		const moveCursor = (e: MouseEvent) => {
			cursorX.set(e.clientX - 90)
			cursorY.set(e.clientY - 550)
		}
		window.addEventListener('mousemove', moveCursor)
		return () => window.removeEventListener('mousemove', moveCursor)
	}, [cursorX, cursorY])
	if (visible === null) return
	return (
		<motion.div
			className='fixed z-50 pointer-events-none'
			style={{
				x: springX,
				y: springY,
			}}
			initial={{ opacity: 0, scale: 0.5 }}
			animate={{
				opacity: visible + 1 ? 1 : 0,
				scale: visible + 1 ? 1 : 0.5,
			}}
			transition={{ type: 'spring', stiffness: 300, damping: 20 }}
		>
			<div className='w-30 h-30 rounded-full bg-black text-white flex items-center justify-center text-2xl uppercase'>
				VIEW
			</div>
		</motion.div>
	)
}

export default CustomCursor
