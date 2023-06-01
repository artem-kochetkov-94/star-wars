import { makeAutoObservable } from 'mobx';
import { delay } from 'src/shared/lib/delay';
import { INotificationService, NotificationService } from 'src/shared/services/notification';
import { PeopleService } from '../api/people.service';
import { IPeopleService } from '../api/people.service.interface';
import { PersonUpdateRequestDTO } from '../dto';
import { PersonResponseDTO } from '../dto/personResponseDTO';
import { IPersonStore } from './person.store.interface';

class PersonStore implements IPersonStore {
	data: PersonResponseDTO | null = null;
	peopleService: IPeopleService = new PeopleService();
	notificationsService: INotificationService = new NotificationService();
	isFetching: boolean;

	constructor() {
		makeAutoObservable(this, {}, { autoBind: true });
	}

	async getPersonById(id: string): Promise<void> {
		try {
			this.isFetching = true;
			const data = await this.peopleService.getPersonById(id);
			this.data = data;
		} catch (e) {
		} finally {
			this.isFetching = false;
		}
	}

	async updatePerson(body: PersonUpdateRequestDTO): Promise<void> {
		try {
			this.isFetching = true;
			await this.peopleService.updatePerson(body);
			await delay(2000);
			this.notificationsService.showSuccess({ message: 'some message' });
		} catch (e) {
		} finally {
			this.isFetching = false;
		}
	}
}

export const personStore = new PersonStore();
