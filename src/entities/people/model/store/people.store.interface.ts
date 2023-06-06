export interface IPeopleStore {
	getPeople(page: number, search: string): Promise<void>;
}
