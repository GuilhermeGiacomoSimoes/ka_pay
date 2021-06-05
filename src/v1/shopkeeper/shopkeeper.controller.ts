import { Controller, Get, Post, Put, Res, HttpStatus, Body, Delete, Param } from '@nestjs/common';
import { Response } from "express";
import { CreateShopkeeperDTO } from './dto/create.shopkeeper.dto';

@Controller('shopkeeper')
export class ShopkeeperController {
    @Post()
    create(@Res() res: Response, @Body() createShopkeeper: CreateShopkeeperDTO) {
        res.status(HttpStatus.CREATED).send({ error: 0, message: 'Has been created'});
    }

    @Get()
    findAll(@Res() res: Response): any {
        res.status(HttpStatus.OK).json([
            {
                uuid: 'da39a3ee5e6b4b0d3255bfef95601890afd80709',
                name: 'User Test',
                email: 'user@test.com.br',
                document: '123.456.789-00',
                token: 'da39a3ee5e6b4b0d3255bfef95601890afd80709',
                phone: '5519912345678',
                account_type: 'JURIDIC',
            }
        ])
    }
    
    @Get(':id')
    findOne(@Param() uuid: string, @Res() res: Response): any {
        res.status(HttpStatus.OK).json({
                uuid: 'da39a3ee5e6b4b0d3255bfef95601890afd80709',
                name: 'User Test',
                email: 'user@test.com.br',
                document: '123.456.789-00',
                token: 'da39a3ee5e6b4b0d3255bfef95601890afd80709',
                phone: '5519912345678',
                account_type: 'JURIDIC',
        })
    }

    @Put(':id')
    update(@Param() uuid: string, @Res() res: Response, @Body() createShopkeeper: CreateShopkeeperDTO) {
        res.status(HttpStatus.PARTIAL_CONTENT).send({ error: 0, message: 'Has been updated'});
    }

    @Delete(':id')
    remove(@Param() uuid: string, @Res() res: Response) {
        res.status(HttpStatus.NO_CONTENT).send();
    }
}
