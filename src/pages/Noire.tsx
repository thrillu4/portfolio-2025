import ProjectPageLayout from '../components/ProjectPageLayout'

const Noire = () => {
	return (
		<ProjectPageLayout
			projectTitle='Noiré Pearl Shop'
			transformY={{ inputRange: [0, 0.4], outputRange: ['-770px', '0px'] }}
			transformScale={{ inputRange: [0, 0.5], outputRange: [4, 1] }}
			gitTextColor={'#fff'}
			bulletPoints={[
				'A modern full-stack e-commerce application built with Next.js, Prisma, and Tailwind CSS.',
				'Explore modern web development practices, combining server-side rendering, database management with Prisma, and clean UI design.',
			]}
			year={'2025'}
		/>
	)
}

export default Noire
