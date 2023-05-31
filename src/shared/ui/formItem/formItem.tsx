import { FormItemProps } from './formItem.props';
import { Styled } from './styles';

export const FormItem: React.FC<FormItemProps> = ({ label, error, children }) => {
	return (
		<div>
			<Styled.Label>{label}</Styled.Label>
			<div>{children}</div>
			{error && <Styled.Error>{error}</Styled.Error>}
		</div>
	);
};
