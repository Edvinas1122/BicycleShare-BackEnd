import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
	constructor(private readonly appService: AppService) {}

	@Get('content/:content')
	async getHello(
		@Param('content') content: string,
	): Promise<string> {
		return this.appService.getContent(content);
	}
}
