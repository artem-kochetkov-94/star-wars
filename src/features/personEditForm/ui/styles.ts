import styled from 'styled-components';

const Wrapper = styled.div`
	position: relative;
	max-width: 500px;
	margin: 0 auto;
`;

const Loader = styled.div`
	z-index: 1;
	position: absolute;
	top: 0;
	left: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	background-color: rgba(255, 255, 255, 0.5);
`;

export const Styled = {
	Wrapper,
	Loader,
};
