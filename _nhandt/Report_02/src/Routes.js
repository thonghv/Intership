import React from 'react';
import SheetContainer from './containers/sheetContainer';
import Table from './components/table';

const routes = [
	{
		path : '/',
		exact : true,
		main : () => <SheetContainer />
	},
	{
		path : '/table',
		exact : false,
		main : () => <Table />
	}
];

export default routes;