export class CreateClientDTO {
  uuid: string;
  name: string;
  birthDate: number;
  cpfCnpj: number;
  addressStreet: string;
  addressNumber: number;
  addressNeighborhood: string;
  addressCity: string;
  fraudster: boolean;
  addressState: string;
}
