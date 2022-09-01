import crypto from 'crypto';

export class Core {
  private address!: string;
  private port!: number;
  private path!: string;

  constructor(public apiKey: string, public publicKey: string, public ssl: boolean) {}

  setAddress(address: string) {
    this.address = address;
  }

  setPort(port: number) {
    this.port = port;
  }

  setPath(path: string) {
    this.path = path;
  }

  url(): string {
    if (this.ssl) return `https://${this.address}:${this.port}${this.path}`;
    return `http://${this.address}:${this.port}${this.path}`;
  }

  createToken(): string {
    const publicKey = this.toString(this.publicKey);
    const apiKey = Buffer.from(this.apiKey);

    const encryptedKey = crypto.publicEncrypt(
      {
        key: publicKey,
        padding: crypto.constants.RSA_PKCS1_PADDING,
      },
      apiKey,
    );

    return encryptedKey.toString('base64');
  }

  toString(publicKey: string): string {
    const header = '-----BEGIN PUBLIC KEY-----';
    const footer = '-----END PUBLIC KEY-----';
    return `${header}\n${publicKey}\n${footer}`;
  }
}
