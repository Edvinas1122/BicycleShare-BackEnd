import NotionAPI from "./api";
import { Injectable } from "@nestjs/common";

@Injectable()
export default class NotionService {
	constructor(
		private api: NotionAPI,
	) {}

	async getPage(pageId?: string) {
		return this.api.getPage({
			params: pageId ? { pageId: pageId } : undefined,
		});
	}

	async getDatabase(databaseId?: string) {
		return this.api.getDatabase({
			params: databaseId ? { databaseId: databaseId } : undefined,
		});
	}

	async getBlockChildren(blockId?: string) {
		return this.api.getBlockChildren({
			params: blockId ? { blockId: blockId } : undefined,
		});
	}

	async getBlock(blockId?: string) {
		return this.api.getBlockChildren({
			params: blockId ? { blockId: blockId } : undefined,
		});
	}

	async queryDatabase(databaseId?: string) {
		return this.api.queryDatabase({
			params: databaseId ? { databaseId: databaseId } : undefined,
		});
	}

	async search(query: string) {
		return this.api.search({
			body: {
				query: query,
			},
		});
	}
}