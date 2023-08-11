import API from '@edvinas1122/api_wrapper';
import { notionAPIConfig, NotionEndpoints } from './api.conf';

export default class NotionAPI extends API<NotionEndpoints> {
	constructor() {
		const config = notionAPIConfig(
			process.env.NOTION_API_TOKEN,
			process.env.ROOT_PAGE_ID,
		);
		super(config);
	}
}