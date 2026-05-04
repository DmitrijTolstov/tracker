import Auth from '../components/layout/screens/auth/Auth'
import Home from '../components/layout/screens/home/Home'
import NewWorkout from '../components/layout/screens/new-workout/NewWorkout'
import Profile from '../components/layout/screens/profile/Profile'

export const routes = [
	{
		path: '/',
		component: Home,
		auth: false
	},
	{
		path: '/auth',
		component: Auth,
		auth: false
	},
	{
		path: '/new-workout',
		component: NewWorkout,
		auth: true
	},
	{
		path: '/profile',
		component: Profile,
		auth: true
	}
]
