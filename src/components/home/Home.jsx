import { Advice, CardContainer, StyledAdvice, StyledButton } from './styled';
import { useNewAge } from '../../hooks/useNewDate';

const Home = () => {
	const { data, changeAdvice, setChangeAdvice } = useNewAge();
	if (data) {
		return (
			<CardContainer>
				<Advice>
					ADVICE #<span> {data.id}</span>
				</Advice>
				<StyledAdvice>{data.advice}</StyledAdvice>
				<div>
					<img src='images/pattern-divider-mobile.svg' alt='' />
				</div>
				<StyledButton onClick={() => setChangeAdvice(!changeAdvice)}>
					<img src='images/icon-dice.svg' alt='' />
				</StyledButton>
			</CardContainer>
		);
	} else {
		<p>loading...</p>;
	}
};

export default Home;
