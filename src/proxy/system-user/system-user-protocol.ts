export type SystemUserAddressProtocol = {
  street: string;
  number: number;
}

export interface SystemUserProtocol {
  firstNamne: string;
  userName: string;

  getAddress(): Promise<SystemUserAddressProtocol[]>;
}