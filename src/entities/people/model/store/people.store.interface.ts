export interface IPeopleStore {
	getPeople(page: number): Promise<void>;
	getPreviousPage(): Promise<void>;
	getNextPage(): Promise<void>;
	searchPeople(search: string): void;
}
