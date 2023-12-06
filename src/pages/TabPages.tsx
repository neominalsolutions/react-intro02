// import { TabPanel, Tab, TabList, Tabs } from '@mui/joy';
import { useEffect, useState } from 'react';

import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Box } from '@mui/material';
import axios from 'axios';
import { getTodos } from './services/TodoApi';
import { getPosts } from './services/PostApi';

type TodoProps = {
	items: any[];
};

const TodoTab = ({ items }: TodoProps) => {
	useEffect(() => {
		console.log('TodoTab', items);

		// axiosInstance.get('todos').then((response) => {
		// 	console.log('todos-data', response.data);
		// });

		return () => { // componentwiilunmount lifecyle hook
			// clean up function domdan çıkınca yakalandı
			// componentwillunmount
			console.log('TodoTab domdan çıktı');
		};
	}, []);

	return <>User Tab</>;
};

type PostProps = {
	items: any[];
};
const PostTab = ({ items }: PostProps) => {
	useEffect(() => {
		console.log('postTab', items);

		// axiosInstance.get('posts').then((response) => {
		// 	console.log('posts-data', response.data);
		// });

		return () => {
			// clean up function domdan çıkınca yakalandı
			// componentwillunmount
			console.log('PostTab domdan çıktı');
		};
	}, []);

	return (
		<>
			<div>Post Tab</div>
		</>
	);
};

export default function TabsPage() {
	const [tabIndex, setTabindex] = useState<string>('1');
	const [todos, setTodos] = useState<any[]>([]);
	const [posts, setPosts] = useState<any[]>([]);

	const handleChange = (event: React.SyntheticEvent, newValue: string) => {
		setTabindex(newValue);
	};

	const loadTodos = async () => {
		// axiosInstance.get('todos').then((response) => {
		// 	console.log('todos-data', response.data);
		// 	setTodos(response.data);
		// });

		let response = await getTodos('todos');
		setTodos(response.data);
		console.log('...todos api call');
	};

	const loadPosts = async () => {
		// axiosInstance.get('posts').then((response) => {
		// 	console.log('posts-data', response.data);
		// 	setPosts(response.data);
		// });
		let response = await getPosts('posts');
		setPosts(response.data);
		console.log('...post api call');
	};

	// const axiosInstance = axios.create({
	// 	timeout: 60 * 1000, // 1 minute.
	// 	baseURL: 'https://jsonplaceholder.typicode.com',
	// });

	useEffect(() => {
		loadTodos();
		loadPosts();
	}, []);

	return (
		<>
			<TabContext value={tabIndex}>
				<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
					<TabList onChange={handleChange} aria-label="lab API tabs example">
						<Tab label="Item One" value="1" />
						<Tab label="Item Two" value="2" />
					</TabList>
				</Box>
				<TabPanel value="1">
					<TodoTab items={todos} />
				</TabPanel>
				<TabPanel value="2">
					<PostTab items={posts} />
				</TabPanel>
			</TabContext>
		</>
	);
}
