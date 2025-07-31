import { useAnimationFrame, motion } from 'framer-motion'
import { RectangleVertical } from 'lucide-react'
import { useRef } from 'react'

const items = [
	{ icon: <RectangleVertical />, label: 'React' },
	{ icon: <RectangleVertical />, label: 'HTML5' },
	{ icon: <RectangleVertical />, label: 'CSS3' },
	{ icon: <RectangleVertical />, label: 'JavaScript' },
	{ icon: <RectangleVertical />, label: 'GitHub' },
	{ icon: <RectangleVertical />, label: 'React' },
	{ icon: <RectangleVertical />, label: 'HTML5' },
	{ icon: <RectangleVertical />, label: 'CSS3' },
	{ icon: <RectangleVertical />, label: 'JavaScript' },
	{ icon: <RectangleVertical />, label: 'GitHub' },
	{ icon: <RectangleVertical />, label: 'React' },
	{ icon: <RectangleVertical />, label: 'HTML5' },
	{ icon: <RectangleVertical />, label: 'CSS3' },
	{ icon: <RectangleVertical />, label: 'JavaScript' },
	{ icon: <RectangleVertical />, label: 'GitHub' },
]

export default function InfiniteScroll() {
	return (
		<div className='relative overflow-hidden w-full bg-black py-4'>
			<motion.div
				className='flex gap-10 whitespace-nowrap text-white text-xl'
				animate={{ x: ['0%', '-100%'] }}
				transition={{
					repeat: Infinity,
					ease: 'linear',
					duration: 20, // Чем больше — тем медленнее
				}}
			>
				{/* !!! Содержимое повторено дважды !!! */}
				{[...items, ...items].map((item, i) => (
					<div key={i} className='flex items-center gap-2 px-4 text-4xl'>
						{item.icon}
						<span>{item.label}</span>
					</div>
				))}
			</motion.div>
		</div>
	)
}
