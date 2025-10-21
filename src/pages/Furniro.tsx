import ProjectPageLayout from '../components/ProjectPageLayout'

const Furniro = () => {
	return (
		<ProjectPageLayout
			projectTitle='FURNIRO WEB SITE'
			transformY={{ inputRange: [0, 0.4], outputRange: ['-820px', '0px'] }}
			transformScale={{ inputRange: [0, 0.5], outputRange: [4, 1] }}
			gitTextColor={'#000'}
			bulletPoints={[
				'Browse The Range Where exquisite furnishings await your discerning eye',
				'Unveil a realm of captivating creations, where every piece tells a story of grace and allure.',
			]}
			mainTitle={'FURNIRO BEAUTIFUL ROOMS INSPIRATION'}
			year={'2023'}
		/>
	)
}

export default Furniro
