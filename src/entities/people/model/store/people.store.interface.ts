export interface IPeopleStore {
	getPeople(page: number, search: string): Promise<void>;
	getPreviousPage(): Promise<void>;
	getNextPage(): Promise<void>;
	searchPeople(search: string): void;
}
