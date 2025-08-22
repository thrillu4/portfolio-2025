import z from 'zod'

export interface ITechStack {
	label: string
	icon: string
}

export interface IProjects {
	title: string
	src: string
	link: string
	type: string
	techStack: string[]
	gitHub: string
	logos: string[]
	color: string
	screenshots: string[]
	bg: string
	route: string
}

export const formSchema = z.object({
	name: z.string().min(3, 'Enter at least 3 characters!'),
	email: z.email('Incorrect email address!'),
	phone: z
		.string()
		.optional()
		.refine((val) => !val || /^[0-9+\-()\s]+$/.test(val), {
			message: 'Incorrect phone number',
		}),
	message: z.string().min(4, 'Please enter at least 4 characters!'),
})

export type FormData = z.infer<typeof formSchema>
