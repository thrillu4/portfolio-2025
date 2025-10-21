import ProjectPageLayout from '../components/ProjectPageLayout'

const Dashboard = () => {
	return (
		<ProjectPageLayout
			projectTitle='Finance Tracker Dashboard'
			transformY={{ inputRange: [0, 0.5], outputRange: ['-800px', '0px'] }}
			transformScale={{ inputRange: [0, 0.5], outputRange: [4, 1] }}
			gitTextColor={'#fff'}
			bulletPoints={[
				'A personal finance dashboard that lets users track expenses, set budgets, and analyze spending habits through clean visual reports.',
				'A modern web app designed to simplify money management — monitor your income, expenses, and goals all in one intuitive dashboard.',
			]}
			mainTitle={'Finance Tracker Dashboard'}
			year={'2025'}
		/>
	)
}

export default Dashboard
