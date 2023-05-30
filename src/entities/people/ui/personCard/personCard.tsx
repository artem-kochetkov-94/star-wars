import { Typography } from 'antd';
import { PersonProps } from './personCard.props';
import { Styled } from './styles';

export const PersonCard: React.FC<PersonProps> = ({ data, controlsSlot }) => {
	const { name, birth_year, height } = data;

	return (
		<Styled.Wrapper>
			<Typography.Paragraph>Name: {name}</Typography.Paragraph>
			<Typography.Paragraph>Birth_year: {birth_year}</Typography.Paragraph>
			<Typography.Paragraph>Height {height}</Typography.Paragraph>
			<Typography.Paragraph>More props...</Typography.Paragraph>

			{controlsSlot && controlsSlot}
		</Styled.Wrapper>
	);
};
