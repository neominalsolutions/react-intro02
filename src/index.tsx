import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import Layout from './layout/Layout';
import Footer from './layout/Footer';
import Divider from './layout/Divider';
import Navbar from './layout/Navbar';
import UsersPage from './pages/UsersPage';

// Uygulama ilk yüklenirken uygulama için clientside routing yapısını uygulama tanıyoruz.

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<>
		<BrowserRouter>
			<Routes>
				{/* aşağıdaki react jsx elementler layoutda children olarak işaretlediğimiz yere gelecek */}
				<Route
					path=""
					element={
						<Layout>
							<Divider />
							<Footer />
						</Layout>
					}
				>
					<Route path="/" Component={HomePage}></Route>
					{/* homepage ile karşılama yapacağız. */}
					<Route path="/about" Component={AboutPage}></Route>
					<Route path="/users" Component={UsersPage}></Route>
				</Route>
				{/* nested routing yapısı */}
				<Route
					path="admin"
					element={
						<>
							<h1>Admin Layout</h1>
							<Outlet />
						</>
					}
				>
					<Route
						path="users"
						element={
							<>
								<p>Admin users</p>
							</>
						}
					></Route>
				</Route>
			</Routes>
		</BrowserRouter>
	</>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
