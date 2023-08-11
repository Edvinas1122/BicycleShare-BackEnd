import { Injectable } from '@nestjs/common';
import BicycleShareContentService from './content-service/content.service';

@Injectable()
export class AppService {
	constructor(
		private content: BicycleShareContentService,
	) {}

	async getContent(content: string): Promise<any> {
		return this.content.map(content);
	}
}
