import clsx from 'clsx'
import { useAnimationFrame } from 'motion/react'
import { useRef } from 'react'

export default function AnimatedCube() {
	const ref = useRef<HTMLDivElement>(null)

	useAnimationFrame((t) => {
		if (!ref.current) return

		const rotate = Math.sin(t / 10000) * 200
		const y = (1 + Math.sin(t / 1000)) * -50
		ref.current.style.transform = `translateY(${y}px) rotateX(${rotate}deg) rotateY(${rotate}deg)`
	})

	const sideCommon = 'absolute w-full h-full opacity-60'

	return (
		<div className=' w-[200px] h-[200px] perspective-[800px]'>
			<div
				ref={ref}
				className='relative w-full h-full [transform-style:preserve-3d]'
			>
				<div
					className={clsx(sideCommon, 'bg-red-500 border-white border-2')}
					style={{ transform: 'rotateY(0deg) translateZ(100px)' }}
				/>
				<div
					className={clsx(sideCommon, 'bg-orange-500 border-white border-2')}
					style={{ transform: 'rotateY(90deg) translateZ(100px)' }}
				/>
				<div
					className={clsx(sideCommon, 'bg-yellow-500 border-white border-2')}
					style={{ transform: 'rotateY(180deg) translateZ(100px)' }}
				/>
				<div
					className={clsx(sideCommon, 'bg-green-500 border-white border-2')}
					style={{ transform: 'rotateY(-90deg) translateZ(100px)' }}
				/>
				<div
					className={clsx(sideCommon, 'bg-blue-500 border-white border-2')}
					style={{ transform: 'rotateX(90deg) translateZ(100px)' }}
				/>
				<div
					className={clsx(sideCommon, 'bg-purple-500 border-white border-2')}
					style={{ transform: 'rotateX(-90deg) translateZ(100px)' }}
				/>
			</div>
		</div>
	)
}
