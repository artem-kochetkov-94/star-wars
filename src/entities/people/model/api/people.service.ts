import { INetworkService, NetworkService } from 'src/shared/services';
import { PeopleResponseDTO, PersonResponseDTO } from '../dto';
import { IPeopleService } from './people.service.interface';

export class PeopleService implements IPeopleService {
	private networkService: INetworkService = new NetworkService();

	public async getPeople(page = 1, search = ''): Promise<PeopleResponseDTO | null> {
		const response = await this.networkService.request<PeopleResponseDTO>({
			url: `${process.env.REACT_APP_API_URL}/people`,
			params: {
				page,
				search,
			},
		});

		if (!response) {
			return null;
		}

		return response.data;
	}

	public async getPersonById(id: string): Promise<PersonResponseDTO | null> {
		const response = await this.networkService.request<PersonResponseDTO>({
			url: `${process.env.REACT_APP_API_URL}/people/${id}`,
		});

		if (!response) {
			return null;
		}

		return response.data;
	}

	public async updatePerson(): Promise<PersonResponseDTO | null> {
		return null;
	}
}
