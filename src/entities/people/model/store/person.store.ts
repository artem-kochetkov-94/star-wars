import { makeAutoObservable } from 'mobx';
import { IPersonStore } from './person.store.interface';
import { IPeopleService } from '../api/people.service.interface';
import { PeopleService } from '../api/people.service';
import { PersonResponseDTO } from '../dto/personResponseDTO';
import { PersonUpdateRequestDTO } from '../dto';

class PersonStore implements IPersonStore {
	data: PersonResponseDTO | null = null;
	peopleService: IPeopleService = new PeopleService();
	isFetching: boolean;

	constructor() {
		makeAutoObservable(this, {}, { autoBind: true });
	}

	async getPersonById(id: string): Promise<void> {
		try {
			this.isFetching = true;
			const data = await this.peopleService.getPersonById(id);
			this.data = data;
		} finally {
			this.isFetching = false;
		}
	}

	async updatePerson(body: PersonUpdateRequestDTO): Promise<void> {
		try {
			this.isFetching = true;
			await this.peopleService.updatePerson(body);
		} finally {
			this.isFetching = false;
		}
	}
}

export const personStore = new PersonStore();
