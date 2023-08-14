import { Injectable, NotFoundException } from "@nestjs/common";
import NotionService from "@src/notion-api/api.service";
import NotionContentService from "./notion-content.service";

/*
	Provides RAW data from Expected (Bicycle Share Template) notion templated page

*/

enum Content {
	TERMS_CONDITIONS = "terms-and-conditions",
	HOW_TO_USE = "how-to-use",
	BICYCLES = "bicycles",
	TIMESTAMPS = "timestamps",
}

@Injectable()
export default class BicycleShareContentService {
	constructor(
		private apiService: NotionService,
		private notionContentService: NotionContentService,
	) {}

	async map(content: string): Promise<any> {
		switch (content) {
			case Content.TERMS_CONDITIONS:
				return this.getTermsAndConditions();
			case Content.HOW_TO_USE:
				return this.getHowToUse();
			case Content.BICYCLES:
				return this.getBicycles();
			case Content.TIMESTAMPS:
				return this.getTimeStamps();
			default:
				return "No content found";
		}
	}

	async getTermsAndConditions() {
		return await this.getContent(process.env.TERMS_CONDITIONS_PAGE_ID);
	}

	async getHowToUse() {
		return await this.getContent(process.env.TUTORIAL_PAGE_ID);
	}

	async getBicycles() {
		return await this.getDatabase(process.env.BICYCLES_DATABASE);
	}

	async getTimeStamps() {
		return await this.getDatabase(process.env.TIMESTAMPS_DATABASE);
	}

	private async getContent(id?: string): Promise<any> {
		if (!id) throw new NotFoundException("No page found");
		// return this.apiService.getBlockChildren(id);
		return this.notionContentService.getPageContent(id);
	}

	private async getDatabase(id?: string): Promise<any> {
		if (!id) throw new NotFoundException("No database found");
		return this.apiService.queryDatabase(id);
	}
}
