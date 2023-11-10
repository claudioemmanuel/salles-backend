import { Injectable } from '@nestjs/common';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Address } from './entities/address.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AddressService {

  constructor(
    @InjectRepository(Address)
    private readonly addressRepository: Repository<Address>
  ) { }

  async createAddress(createAddressDto: CreateAddressDto): Promise<Address> {
    const { street, number, complement, zip_code, city, state, country } = createAddressDto;

    const address = this.addressRepository.create({
      street,
      number,
      complement,
      zip_code,
      city,
      state,
      country
    });

    await this.addressRepository.save(address);

    return address;
  }

  findAll() {
    return `This action returns all address`;
  }

  findOne(id: number) {
    return `This action returns a #${id} address`;
  }

  update(id: number, updateAddressDto: UpdateAddressDto) {
    return `This action updates a #${id} address`;
  }

  remove(id: number) {
    return `This action removes a #${id} address`;
  }
}
