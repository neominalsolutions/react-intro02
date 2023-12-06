import { useNavigate } from 'react-router-dom';

function HomePage() {
	// ts ile buttona basıldığı durumlarda yada api save işlemi sonrası redirect etmek için kullanılan bir hook.
	const navigate = useNavigate();

	return (
		<>
			<h1>Home Page</h1>
			<button
				onClick={() => {
					// ts dosyası üzerinde kontrollü bir yönledirme yapmamızı sağlar.
					const result = window.confirm(
						'Sayfadan ayrılmak istediğinize emin misiniz?'
					);

					if (result) navigate('/about');
				}}
			>
				Redirect To About Page
			</button>
		</>
	);
}

export default HomePage;
