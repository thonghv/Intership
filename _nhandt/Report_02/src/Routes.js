import React from 'react';
import Sheet from './components/sheet_js';
import Table from './components/table';

const routes = [
	{
		path : '/',
		exact : true,
		main : () => <Sheet />
	},
	{
		path : '/table',
		exact : false,
		main : () => <Table />
	}
];

export default routes;