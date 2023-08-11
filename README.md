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

## Development

Any new interface features shall be documented.

### NPM packets

This project use api_wrapper, to define notion api and notion service, which could be therefore also migrated as modules.

[npm: @edvinas1122/api_wrapper](https://www.npmjs.com/package/@edvinas1122/api_wrapper)

So far developing [notion api](https://github.com/Edvinas1122/BicycleShare-BackEnd/tree/main/src/notion-api), is directly applicable only for express.