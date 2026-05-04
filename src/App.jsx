import { useState } from 'react'
import './App.css'
import Layout from './components/layout/Layout'

function App() {
	return (
		<>
			<Layout>
				<div></div>
				<h1>Vite + React</h1>
				<div className='card'>
					<p>
						Edit <code>src/App.jsx</code> and save to test HMR
					</p>
				</div>
				<p className='read-the-docs'>
					Click on the Vite and React logos to learn more
				</p>
			</Layout>
		</>
	)
}

export default App
