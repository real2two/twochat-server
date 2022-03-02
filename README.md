# twochat.pages.dev server.
A scuffed chat server.

## Links

Website: https://twochat.pages.dev/

Frontend repository: https://github.com/real2two/twochat

## Setup

Download all the node modules using:
```
yarn install
```

Make a file called `.env` with:
```
PORT=80

WS_IDLE_TIMEOUT=60
WS_MAX_BACKPRESSURE=1024
WS_MAX_PAYLOAD_LENGTH=512
```

Start up the server using:
```
node .
```
