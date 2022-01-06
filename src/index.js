import React from 'react';
import ReactDOM from 'react-dom';
import { SWRConfig } from 'swr';
import App from './App';

const Root = () => {
	return (
		<SWRConfig
			value={{
				shouldRetryOnError: false,
				revalidateOnFocus: false,
				revalidateOnMount: true
			}}
		>
			<App />
		</SWRConfig>
	);
};

ReactDOM.render(<Root />, document.getElementById('root'));
