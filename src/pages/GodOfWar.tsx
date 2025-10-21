import ProjectPageLayout from '../components/ProjectPageLayout'

const GodOfWar = () => {
	return (
		<ProjectPageLayout
			projectTitle='GOD OF WAR: RAGNARÖK'
			transformY={{ inputRange: [0, 0.5], outputRange: ['-550px', '0px'] }}
			transformScale={{ inputRange: [0, 0.5], outputRange: [6, 1] }}
			gitTextColor={'#fff'}
			bulletPoints={[
				'STUNNING VISUALS AND IMPRESSIVE SCALE',

				'BEAUTIFUL MOVING GAME LAYOUT',
			]}
			mainTitle={'GOD OF WAR  Ragnarök'}
			year={'2023'}
		/>
	)
}

export default GodOfWar
