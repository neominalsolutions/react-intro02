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
						<span key={index} style={{ padding: '2px' }}>
							<Link to={item.url}>{item.text}</Link>
						</span>
					);
				})}
			</nav>
		</>
	);
}
