import { SearchFormProps } from './searchForm.props';

export const SearchForm: React.FC<SearchFormProps> = ({ onChange, value, onSubmit }) => {
	return (
		<>
			<input value={value} onChange={onChange} />
			<button onClick={onSubmit}>search</button>
		</>
	);
};
