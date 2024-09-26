import axios from 'axios';
import styled from 'styled-components';
import usePromise from '../lib/usePromise';

import NewsItem from './NewsItem';

const NewsListBlock = styled.div`
	box-sizing: border-box;
	padding-bottom: 3rem;
	width: 768px;
	margin: 2rem auto 0;

	@media screen and (max-width: 768px) {
		width: 100%;
		padding: 0 1rem;
	}
`;

const API_KEY = 'a3b7a2f7f8b245439aaa7dcceeb6f115';

function NewsList({ category }) {
	const [loading, response, error] = usePromise(() => {
		const query = category === 'all' ? '' : `&category=${category}`;
		return axios.get(
			`https://newsapi.org/v2/top-headlines?country=us${query}&apiKey=${API_KEY}`
		);
	}, [category]);

	// 대기 중일 경우
	if (loading) {
		return <NewsListBlock>대기 중...</NewsListBlock>;
	}

	// 아직 response 값이 설정되지 않았을 때
	if (!response) {
		return null;
	}

	if (error) {
		return <NewsListBlock>에러 발생!</NewsListBlock>;
	}

	// response 값이 유효할 때
	const { articles } = response.data;
	return (
		<NewsListBlock>
			{articles.map((article) => (
				<NewsItem key={article.url} article={article} />
			))}
		</NewsListBlock>
	);
}

export default NewsList;
