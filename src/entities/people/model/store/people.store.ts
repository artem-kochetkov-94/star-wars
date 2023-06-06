import { makeAutoObservable } from 'mobx';
import { PeopleService } from '../api/people.service';
import { IPeopleService } from '../api/people.service.interface';
import { PeopleResponseDTO } from '../dto';
import { IPeopleStore } from './people.store.interface';

class PeopleStore implements IPeopleStore {
	data: PeopleResponseDTO | null = null;
	peopleService: IPeopleService = new PeopleService();
	isFetching: boolean;
	search = '';

	constructor() {
		makeAutoObservable(this, {}, { autoBind: true });
	}

	async getPeople(page?: number, search?: string): Promise<void> {
		try {
			this.isFetching = true;
			const data = await this.peopleService.getPeople(page ?? 1, search ?? '');
			this.data = data;
		} catch (e) {
		} finally {
			this.isFetching = false;
		}
	}

	private getPageFromUrl(url: string): string | null {
		const searchParams = new URLSearchParams(url.substring(url.indexOf('?')));
		return searchParams.get('page');
	}

	public async getPreviousPage(): Promise<void> {
		if (!this.data?.previous) {
			return;
		}

		this.getPeopleByPage(this.data.previous);
	}

	public async getNextPage(): Promise<void> {
		if (!this?.data?.next) {
			return;
		}

		this.getPeopleByPage(this.data.next);
	}

	private async getPeopleByPage(url: string): Promise<void> {
		const page = this.getPageFromUrl(url);

		if (!page) {
			return;
		}

		this.getPeople(Number(page));
	}

	public searchPeople(): void {
		this.getPeople(1, this.search);
	}

	public handleSearchChange(e: React.ChangeEvent<HTMLInputElement>): void {
		this.search = e.target.value;
	}
}

export const peopleStore = new PeopleStore();
