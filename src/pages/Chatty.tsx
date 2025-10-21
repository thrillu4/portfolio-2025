import ProjectPageLayout from '../components/ProjectPageLayout'

const Chatty = () => {
	return (
		<ProjectPageLayout
			projectTitle='CHATTY'
			transformY={{ inputRange: [0, 0.5], outputRange: ['-770px', '0px'] }}
			transformScale={{ inputRange: [0, 0.5], outputRange: [4, 1] }}
			gitTextColor={'#fff'}
			bulletPoints={[
				'Chatty lets you connect with others through instant real-time messaging.',
				'Choose from over 35 DaisyUI themes to match your style. You can chat comfortably on both desktop and mobile.',
			]}
			mainTitle={'MODERN CHATTY WEB APP'}
			year={'2025'}
		/>
	)
}

export default Chatty
