import NotionAPI from "./api";
import { NotionEndpoints } from "./api.conf";
import { Injectable } from "@nestjs/common";

@Injectable()
export default class NotionService {
	constructor(
		private api: NotionAPI,
	) {}

	async getPage(pageId?: string) {
		return this.api.interact({
			endpoint_name: NotionEndpoints.getPage,
			params: pageId ? { pageId: pageId } : undefined,
		});
	}

	async getDatabase(databaseId?: string) {
		return this.api.interact({
			endpoint_name: NotionEndpoints.getDatabase,
			params: databaseId ? { databaseId: databaseId } : undefined,
		});
	}

	async getBlockChildren(blockId?: string) {
		return this.api.interact({
			endpoint_name: NotionEndpoints.getBlockChildren,
			params: blockId ? { blockId: blockId } : undefined,
		});
	}

	async getBlock(blockId?: string) {
		return this.api.interact({
			endpoint_name: NotionEndpoints.getBlock,
			params: blockId ? { blockId: blockId } : undefined,
		});
	}

	async search(query: string) {
		return this.api.interact({
			endpoint_name: NotionEndpoints.search,
			body: {
				query: query,
			},
		});
	}
}