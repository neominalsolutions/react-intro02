import { useEffect, useState } from 'react';
import axios, { AxiosHeaders, AxiosError } from 'axios';
import { Todo } from './models/Todo';

// Page Componentler sayfaları tasarladığımız componentler olması sebebi ile bu component içerisinde diğer UI kit child componentleri çağıraraz sayfa tasarımı yaptığımızdan page componentlere props'a ihtiyaç kalmıyor.
export default function TodosPage() {
	const [todos, setTodos] = useState<Todo[]>();
	const [selectedTodo, setSelectedTodo] = useState<Todo>();

	// global tanım
	const axiosInstance = axios.create({
		timeout: 60 * 1000, // 1 minute.
		baseURL: 'https://jsonplaceholder.typicode.com',
	});

	axiosInstance.interceptors.request.use(
		function (config) {
			// Do something before request is sent
			console.log('request düşmeden önce araya girdik', config);

			config.headers = config.headers.set('Authorization Bearer', 'cxfsfsf');
			return config;
		},
		function (error: AxiosError<any>) {
			// Do something with request error
			// request hata varsa request hata durumlarını merkezi olarak yakalar.
			console.log('error-status', error.code);

			return Promise.reject(error);
		}
	);

	// loading başlat
	axiosInstance.interceptors.response.use(
		function (config) {
			// Do something before request is sent
			console.log(
				'request düştükten cevap geldikten sonray araya girdik',
				config
			);

			// data transformation işlemleri için kullanılabilir.
			// showMessage toastr fırlatabilir
			// if(config.status === 200 || config.status === 201) {
			// 	// showMessage
			// 	// openToastr();
			// }
			// config.data.map()

			// loading false
			return config;
		},
		function (error: AxiosError<any>) {
			// Do something with request error
			// response sonrası hata varsa response hata durumlarını merkezi olarak yakalar.

			console.log('error', error);

			return Promise.reject(error);
		}
	);

	const loadPosts = () => {
		axiosInstance.get('posts').then((response) => {
			console.log('posts', response.data);
		});
	};

	const loadTodos = () => {
		axiosInstance
			.get('todos', {
				headers: new AxiosHeaders().set('Authorization Bearer', 'token'),
			})
			.then((response) => {
				console.log('response', response);
				console.log('data', response.data);
				console.log('headers', response.headers);
				setTodos([...response.data]);
			});
	};

	useEffect(() => {
		loadTodos();
	}, []);

	const selectTodo = (item: Todo) => {
		setSelectedTodo(item);
		// 1.yöntem loadPosts();
	};

	useEffect(() => {
		if (selectedTodo) {
			loadPosts(); // bir seçim yapıldı yeni postları getir.
		}
	}, [selectedTodo]);

	return (
		<>
			Selected: {selectedTodo?.title}
			{todos &&
				todos.map((item: Todo) => {
					return (
						<div key={item.id}>
							{item.title}
							<button onClick={() => selectTodo(item)}>Seç</button>
						</div>
					);
				})}
			<button onClick={loadPosts}>Load Post</button>
		</>
	);
}
