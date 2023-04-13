import styled from 'styled-components';

const CardContainer = styled.div`
	width: 345px;
	height: 315px;
	background: #313a48;
	box-shadow: 30px 50px 80px rgba(0, 0, 0, 0.100202);
	border-radius: 10px;
	text-align: center;
	padding: 1rem;
	margin-right: auto;
	margin-left: auto;
	margin-top: 2rem;
	display: flex;
	flex-direction: column;
	gap: 2rem;
	justify-content: center;
	align-items: center;
`;
const Advice = styled.p`
	color: #53ffaa;
	font-weight: 800;
	font-size: 11px;
	letter-spacing: 3.45714px;
`;
const StyledAdvice = styled.div`
	color: white;
	font-weight: bold;
	letter-spacing: 3px;
`;
const StyledButton = styled.button`
	background: #53ffaa;
	width: 65px;
	height: 65px;
	border-radius: 100%;
	border-color: transparent;
	&:hover {
		box-shadow: 0px 0px 40px #53ffaa;
		cursor: pointer;
	}
`;
export { CardContainer, StyledButton, Advice, StyledAdvice };
