import { useEffect, useState } from 'react';

export const useNewAge = () => {
	const [data, setData] = useState();
	const [changeAdvice, setChangeAdvice] = useState(false);

	useEffect(() => {
		fetchData('https://api.adviceslip.com/advice', setData);
	}, [changeAdvice]);

	return {
		data,
		changeAdvice,
		setChangeAdvice
	};
};

const fetchData = async (url, setData) => {
	const request = await fetch(url);
	const data = await request.json();
	console.log(data.slip.advice);
	setData(data.slip);
};
