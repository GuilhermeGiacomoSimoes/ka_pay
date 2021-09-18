import { EstablishmentRepository } from './establishment.repository';

export const establishmentRepositoryProvider = {
  useClass: EstablishmentRepository,
  provide: 'EstablishmentRepositoryProvider',
};
