export interface SearchFormProps {
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	value: string;
	onSubmit: () => void;
}
