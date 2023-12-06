import React from 'react';
import Navbar, { NavbarItem } from './Navbar';
import { Outlet } from 'react-router-dom';

type LayoutProps = {
	children?: React.ReactNode;
};

// <Layout><Navbar /><Content /></Layout>

export default function Layout({ children }: LayoutProps) {
	const items: NavbarItem[] = [
		{
			text: 'Anasayfa',
			url: '/',
		},
		{ text: 'Hakkımızda', url: '/about' },
	];

	return (
		<>
			<div style={{ padding: '1rem' }}>
				<Navbar items={items} />
				<hr></hr>
				{/* dinamik içerik kısmı */}
				<div>
					{/* HomePage, AboutPage outler içerisine girecek */}
					{/* c# daki renderBody benzer bir kullanım*/}
					<Outlet />
				</div>
				{/* altaki children footer olarak kullanacağız. */}
				<div>{children}</div>
			</div>
		</>
	);
}
