import { ArgsProps } from 'antd/es/notification/interface';

export interface INotificationService {
	show(config: ArgsProps): void;
	showSuccess(config: ArgsProps): void;
}
