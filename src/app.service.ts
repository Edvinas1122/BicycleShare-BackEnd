import { Injectable } from '@nestjs/common';
import NotionService from './notion-api/api.service';

@Injectable()
export class AppService {
	constructor(
		private api: NotionService,
	) {}

	getHello(): string {
		return 'Hello Worlda!';
	}

	async getTermsAndConditions(): Promise<any> {
		return this.api.getBlock();
	}

}
