import { APIInfo } from '@edvinas1122/api_wrapper';

/* 
    https://developers.notion.com/reference/intro
*/

export enum NotionEndpoints {
    getPage = 'getPage',
    getBlockChildren = 'getBlockChildren',
    getBlock = 'getBlock',
    getDatabase = 'getDatabase',
    queryDatabase = 'queryDatabase',
    getPagePropertyItem = 'getPagePropertyItem',
    search = 'search',
}

export const notionAPIConfig = (
    authToken: string,
    rootPageDir: string,
): APIInfo => ({
    apiBaseUrl: 'https://api.notion.com/v1/',
    headers: {
        'Notion-Version': '2022-06-28',
        'Authorization': `Bearer ${authToken}`,
    },
    endpoints: [
        { name: NotionEndpoints.getPage, path: 'pages/:pageId', method: 'GET' },
        { name: NotionEndpoints.getBlockChildren, path: 'blocks/:blockId/children', method: 'GET' },
        { name: NotionEndpoints.getBlock, path: 'blocks/:blockId', method: 'GET' },
        { name: NotionEndpoints.getDatabase, path: 'databases/:databaseId', method: 'GET' },
        { name: NotionEndpoints.queryDatabase, path: 'databases/:databaseId/query', method: 'POST' },
        { name: NotionEndpoints.getPagePropertyItem, path: 'pages/:pageId/properties/:propertyId', method: 'GET' },
        { name: NotionEndpoints.search, path: 'search', method: 'POST' },
    ],
    defaultParams: parameters(rootPageDir),
});

export const parameters = (rootPageDir: string) => ({
    getPage: {
        params: { pageId: rootPageDir },
    },
    getBlockChildren: {
        params: { blockId: rootPageDir },
        body: { count: 200 },
    },
    getBlock: {
        params: { blockId: rootPageDir },
    },
    search: {
        body: {
            query: '',
            sort: {
                direction: 'ascending',
                timestamp: 'last_edited_time',
            },
            filter: {
                value: 'page',
                property: 'object',
            },
        },
    },
});