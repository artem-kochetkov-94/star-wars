import { ArgsProps } from 'antd/es/notification/interface';
import { INotificationService } from './notification.service.interface';
import { notification } from 'antd';

export class NotificationService implements INotificationService {
	show(config: ArgsProps) {
		notification.open(config);
	}

	showSuccess(config: ArgsProps) {
		notification.success(config);
	}
}
