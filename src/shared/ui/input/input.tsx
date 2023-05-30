import { FieldAttributes } from 'formik';
import { Styled } from './styles';

interface InputProps extends FieldAttributes<any> {}

export const Input: React.FC<InputProps> = (props) => {
	return <Styled.Input {...props} />;
};
