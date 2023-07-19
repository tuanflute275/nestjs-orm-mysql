/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { UserDto } from "./user.dto";
import { UserService } from "./user.service";

@Controller('users')
export class UserController {
    constructor(
        private readonly userService: UserService
    ) { }

    @Post()
    createUser(@Body() user: UserDto): Promise<UserDto> {
        return this.userService.save(user);
    }

    @Put(':id')
    updateUserById(@Param('id') id: string, @Body() user: UserDto): Promise<{ result: string }> {
        return this.userService.update(id, user);
    }

    @Get(':id')
    getUserById(@Param('id') id: string) {
        return this.userService.findOne(id);
    }

    // @Get()
    // getAllUser() {
    //     return this.userService.findAll()
    // }

    @Delete(':id')
    deleteUser(@Param('id') id: string) {
        return this.userService.deleteById(id);
    }

}