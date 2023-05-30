import { makeAutoObservable } from 'mobx';
import { PeopleResponseDTO } from '../dto';
import { IPeopleStore } from './people.store.interface';
import { IPeopleService } from '../api/people.service.interface';
import { PeopleService } from '../api/people.service';

class PeopleStore implements IPeopleStore {
	data: PeopleResponseDTO | null = null;
	peopleService: IPeopleService = new PeopleService();
	isFetching: boolean;

	constructor() {
		makeAutoObservable(this, {}, { autoBind: true });
	}

	async getPeople(page?: string): Promise<void> {
		try {
			this.isFetching = true;
			const data = await this.peopleService.getPeople(page);
			this.data = data;
		} finally {
			this.isFetching = false;
		}
	}

	private getPageFromUrl(url: string): string | null {
		const searchParams = new URLSearchParams(url.substring(url.indexOf('?')));
		return searchParams.get('page');
	}

	async getPreviousPage(): Promise<void> {
		if (!this.data?.previous) {
			return;
		}

		this.getPeopleByPage(this.data.previous);
	}

	async getNextPage(): Promise<void> {
		if (!this?.data?.next) {
			return;
		}

		this.getPeopleByPage(this.data.next);
	}

	async getPeopleByPage(url: string): Promise<void> {
		const page = this.getPageFromUrl(url);

		if (!page) {
			return;
		}

		this.getPeople(page);
	}
}

export const peopleStore = new PeopleStore();
