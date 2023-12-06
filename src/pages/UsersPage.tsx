import { useEffect, useLayoutEffect, useState } from 'react';

export default function UsersPage() {
	const [bgColor, setBgColor] = useState('purple');
	const randomColor = ['purple', 'red', 'green', 'blue'];

	useEffect(() => {
		// componentdidMount lifecyle hook denkgelir
		// component doma ilk yükleme anında asenkron işlemleri yaptığımız hook.
		console.log('useEffect');

		fetch('https://jsonplaceholder.typicode.com/users', {
			method: 'GET',
			headers: {},
		})
			.then((response) => {
				console.log('response', response);
				// response stream olarak verilir.
				return response.json(); // stream data json çevirdi.
			})
			.then((data) => {
				console.log('data', data);
			});
	}, []); // bgColor state değişiminde tekrar tetiklen.

	useEffect(() => {
		// componentdidUpdate life cycle method denk gelir
		console.log('color değişti');
	}, [bgColor]);

	useLayoutEffect(() => {
		// senkron çalışır.
		// dom üzerinde daha component doma basılmadan önceki dom style işlemlerini yaptığımız hook.
		console.log('useLayoutEffect');

		setInterval(() => {
			console.log('Math.random()', Math.random());
			const randomIndex = Math.round(Math.random() * (randomColor.length - 1));
			console.log('randomIndex', randomIndex);
			// document.body.style.backgroundColor = randomColor[randomIndex];
			setBgColor(randomColor[randomIndex]);
			document.body.style.backgroundColor = bgColor;
		}, 2000);
	}, []);

	return (
		<>
			<div
				style={{ width: '100vw', height: '100vh', backgroundColor: bgColor }}
			>
				Box
			</div>
		</>
	);
}
