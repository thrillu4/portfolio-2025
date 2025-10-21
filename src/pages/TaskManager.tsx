import ProjectPageLayout from '../components/ProjectPageLayout'

const TaskManager = () => {
	return (
		<ProjectPageLayout
			projectTitle='TASK MASTER'
			transformY={{ inputRange: [0, 0.5], outputRange: ['-540px', '0px'] }}
			transformScale={{ inputRange: [0, 0.5], outputRange: [6.5, 1] }}
			gitTextColor={'#fff'}
			bulletPoints={[
				'“Organize your chaos, one task at a time.” — TaskMaster Philosophy',
				'“Efficiently Elegant, Elegantly Efficient”',
			]}
			mainTitle={'TASK MASTER MANAGER'}
			year={'2025'}
		/>
	)
}

export default TaskManager
