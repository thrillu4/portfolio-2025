import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'

const Marquee = () => {
	const greetings = [
		'こんにちは',
		'HELLO',
		'BONJOUR',
		'Hola',
		'안녕',
		'Hallo',
		'你好',
		'ПРИВІТ',
		'OLÁ',
		'ПРИВЕТ',
		'السلام عليكم',
	]

	const container = useRef(null)

	const { scrollYProgress } = useScroll({
		target: container,
	})

	const borderBottomLeftRadius = useTransform(
		scrollYProgress,
		[0, 1],
		['50px', '0px']
	)
	const borderBottomRightRadius = useTransform(
		scrollYProgress,
		[0, 1],
		['50px', '0px']
	)
	return (
		<div ref={container} className='bg-neutral-200  w-full'>
			<motion.div
				style={{ borderBottomLeftRadius, borderBottomRightRadius }}
				className='bg-black'
			>
				<div className='overflow-hidden text-[270px] font-["Anton"] tracking-tight font-bold pt-30 pb-40'>
					<motion.div
						className='whitespace-nowrap flex gap-10'
						animate={{ x: [0, -12000] }}
						transition={{
							duration: 40,
							repeat: Infinity,
							ease: 'linear',
						}}
					>
						{greetings.map((word) => (
							<div key={word} className=' flex gap-5'>
								<span
									style={{
										WebkitTextStroke: '3px #fff',
										color: '#000',
									}}
									className='font-medium'
								>
									SAY
								</span>
								{word}!
							</div>
						))}
					</motion.div>
				</div>
			</motion.div>
		</div>
	)
}

export default Marquee
