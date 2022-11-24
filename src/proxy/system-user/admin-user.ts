import { SystemUserAddressProtocol, SystemUserProtocol } from "./system-user-protocol";

export class AdminUser implements SystemUserProtocol {
  public firstNamne: string;
  public userName: string;

  constructor(firstName: string, userName: string) {
    this.firstNamne = firstName;
    this.userName = userName;
  }

  // APENAS PARA SIMULAR UMA "DEMORA"
  async getAddress(): Promise<SystemUserAddressProtocol[]> {
    return new Promise((resolve, resject) => {
      return setTimeout(() => {
        return resolve([
          {street: 'Rua Suvaco da cobra', number: 515},
          {street: 'Av. Gogó da Ema', number: 99}
        ])
      }, 2000)
    })
  }
}