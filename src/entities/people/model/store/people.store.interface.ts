export interface IPeopleStore {
  getPeople(page?: string): Promise<void>;
}
