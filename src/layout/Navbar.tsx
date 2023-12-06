import { Link } from 'react-router-dom';

export interface NavbarItem {
	url: string;
	text: string;
}
type NavbarProps = {
	items: NavbarItem[];
}; // <Navbar />
export default function Navbar({ items }: NavbarProps) {
	return (
		<>
			<nav>
				{items.map((item: NavbarItem, index: number) => {
					return (
						<span style={{ padding: '2px' }}>
							<Link key={index} to={item.url}>
								{item.text}
							</Link>
						</span>
					);
				})}
			</nav>
		</>
	);
}
