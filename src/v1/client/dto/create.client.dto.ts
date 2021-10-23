export class CreateClientDTO {
  uuid: string;
  name: string;
  birthDate: number;
  cpfCnpj: string;
  addressStreet: string;
  addressNumber: number;
  addressNeighborhood: string;
  addressCity: string;
  fraudster: boolean;
  addressState: string;
}
