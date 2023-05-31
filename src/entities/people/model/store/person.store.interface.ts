export interface IPersonStore {
	getPersonById(id: string): Promise<void>;
}
