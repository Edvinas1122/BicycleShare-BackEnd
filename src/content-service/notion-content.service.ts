import { BadRequestException, Injectable } from "@nestjs/common";
import NotionService from "@src/notion-api/api.service";

/*
	Provides a service for mapping content that requires
	paraller requests to Notion's API.
*/

interface NotionBlock {
	object: string;
	id: string;
	type: string;
	has_children: boolean;
	children?: NotionBlock[];
	numbered_list_item?: any;
}

enum NestedBlocks {
	// page = "page",
	bulleted_list_item = "bulleted_list_item",
	numbered_list_item = "numbered_list_item",
	// to_do = "to_do",
	// quote = "quote",
	// callout = "callout",
}

@Injectable()
export default class NotionContentService {
	constructor(
		private notion: NotionService,
	) {}

	async getPageContent(pageId: string): Promise<NotionBlock[]> {
		const list = await this.notion.getBlockChildren(pageId);
		if (!list.results) throw new BadRequestException("No results found");
		const updatedList = await Promise.all(list.results.map(async (block: NotionBlock) => {
			return this.handleNestedBlocks(block);
		}));
		list.results = updatedList;
		return list;
	}

	private async handleNestedBlocks(block: NotionBlock): Promise<NotionBlock> {
		switch (block.type) {
			case NestedBlocks.numbered_list_item:
				if (block.has_children === true) {
					const children = await this.notion.getBlockChildren(block.id);
					block.children = children;
				};
				break;
		}
		return block;
	}
}
