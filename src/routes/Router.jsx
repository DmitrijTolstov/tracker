import { Routes, Route, BrowserRouter } from 'react-router-dom'
import NotFound from '../components/layout/screens/not-foud/NotFound'
import { useAuth } from '../hooks/useAuth'

import { routes } from './routes.data'
import Home from '../components/layout/screens/home/Home'
console.log(routes.map(route => route.path))

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				{routes.map(route => (
					<Route
						key={route.path}
						path={route.path}
						element={<route.component></route.component>}
					></Route>
				))}
				<Route path='*' element={<NotFound></NotFound>}></Route>
			</Routes>
		</BrowserRouter>
	)
}

export default Router
