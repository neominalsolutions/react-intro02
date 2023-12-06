import { Link } from 'react-router-dom';

export default function AboutPage() {
	return (
		<>
			<h1>About Page</h1>
			<div style={{ padding: '5px' }}>
				<Link to="/">Home Page</Link> {' '}
				{/* uygulama içi linklerde yönlendirme yaparken tercih ederiz. */}
				<a href="/">Home Page With Href</a>
			</div>
		</>
	);
}
