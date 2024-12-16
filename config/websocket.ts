interface WebSocketProps {
  url: string;
}

class Websocket {
  url: string;

  constructor({ url }: WebSocketProps) {
    this.url = url;
  }

  init() {}
}
