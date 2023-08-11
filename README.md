# BicycleShare-BackEnd

Back End Server for a journaling application

## Description

This application a micro service of the application built.
It provides interfaces with a service architecture

### Notion Interactions

It provides an interface to interact with a notion page template called (Bicycle Share Template).
It provides page contents:

- Terms & Conditions
- How to use

And Database interface

- Bicycles
- Timestamps of bicycle use

### ESP32 bicycle locker controller socket gateway

It provides a socket for ESP32 and interface for it.

It should give an ability to:

- Start count down procedure - await for response of wether device has dispatched a key.
- Read if a device is available/online.

## Use

### Env

![Screen Shot 2023-08-11 at 1.21.49 PM.png](https://raw.githubusercontent.com/Edvinas1122/Edvinas1122/main/tutorials/bicycle-backend-env.png)

The application demands following environment variables

```
NOTION_API_TOKEN=secter_YOURTOKENHERE235324ntn43t
ROOT_PAGE_ID=
... more in development
```

To acquire notion api key you must obtain it here: [LINK](https://www.notion.so/my-integrations), you can read more about notion integrations [here](https://developers.notion.com/docs/create-a-notion-integration).

## Development

Any new interface features shall be documented.

### NPM packets

This project use api_wrapper, to define notion api and notion service, which could be therefore also migrated as modules.

[npm: @edvinas1122/api_wrapper](https://www.npmjs.com/package/@edvinas1122/api_wrapper)

So far developing [notion api](https://github.com/Edvinas1122/BicycleShare-BackEnd/tree/main/src/notion-api), is directly applicable only for express.