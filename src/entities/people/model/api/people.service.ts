import { PeopleResponseDTO } from '../dto';
import { INetworkService, NetworkService } from 'src/shared/services';
import { IPeopleService } from './people.service.interface';
import { PersonResponseDTO } from '../dto/person.response.dto';

export class PeopleService implements IPeopleService {
	private networkService: INetworkService = new NetworkService();

	public async getPeople(page: string): Promise<PeopleResponseDTO | null> {
		const response = await this.networkService.request<PeopleResponseDTO>({
			url: `${process.env.REACT_APP_API_URL}/people`,
			params: { page },
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
