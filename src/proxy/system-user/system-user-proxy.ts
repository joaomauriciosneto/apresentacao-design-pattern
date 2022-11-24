import { AdminUser } from "./admin-user";
import { SystemUserAddressProtocol, SystemUserProtocol } from "./system-user-protocol";

// VAI IMPLEMENTAR A MEMSA CLASSE, POIS, ESTÁ "FIGINDO" QUE É UM USUÁRIO DO SISTEMA
export class SystemUserProxy implements SystemUserProtocol {
  // sem instância nenhuma, por enqunto!!
  private realUser: SystemUserProtocol | null = null;
  // para salvar o endereço
  private realUserAddress: SystemUserAddressProtocol[] | null = null;

  public firstNamne: string;
  public userName: string;

  constructor(firstName: string, userName: string) {
    this.firstNamne = firstName;
    this.userName = userName;
  }

  // método criado para retorno no método getAddress()
  private createUser(): SystemUserProtocol {
    if(this.realUser === null) {
      this.realUser = new AdminUser(this.firstNamne, this.userName);
    }
    return this.realUser;
  }

  // APENAS PARA SIMULAR UMA "DEMORA"
  async getAddress(): Promise<SystemUserAddressProtocol[]> {
    // garantir que o usuário seja criado
    this.realUser = this.createUser();

    return this.realUser.getAddress();

    //  RETORNO COM O CACHE
    // if(this.realUserAddress === null) {
    //   this.realUserAddress = await this.realUser.getAddress();
    // }

    // return this.realUserAddress;
  }
}