import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserEntity } from "./user.entity";
import { Repository } from "typeorm";
import { UserDto } from "./user.dto";
import { plainToInstance } from "class-transformer";

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>
    ) {}

    async save(userDto: UserDto): Promise<UserDto> {
        const saveUser = await this.userRepository.save(userDto);
        return plainToInstance(UserDto, saveUser, {excludeExtraneousValues: true});
    }

    async update(id: string, userDto: UserDto): Promise<{result: string}> {
        await this.userRepository.update(id, userDto);
        return {
            result: "update success"
        }
    }

    async findOne(id: string): Promise<UserDto> {
        const foundUser = await this.userRepository.findOne({
            where: {
                id: id
            }
        });
        if(foundUser === null) {
            // return {};
        }
        return plainToInstance(UserDto, foundUser, {excludeExtraneousValues: true});
    }

     findAll() {
        const allUser =  this.userRepository.find();
        return allUser;
    }

    async deleteById(id: string):Promise<{result: string}> {
        await this.userRepository.softDelete(id);
        return {result: 'delete success'}
    }
}