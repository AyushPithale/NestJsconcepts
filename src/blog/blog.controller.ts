import { Controller, Get, Param } from '@nestjs/common';
import { BlogService } from './blog.service';

//  /blog ->> findAll method from blog.service.ts
//  /blog/:id ->> findOne method from blog.service.ts
//  /blog/:id/:uniquekey ->> findByUniquekey method from blog.service.ts

@Controller('blog')
export class BlogController {
    constructor(private readonly blogService: BlogService) { }

    @Get()
    findAll() {
        return this.blogService.findAll()
    }

    @Get(':id')
    findbyId(@Param('id') id: string) {
        return this.blogService.findOne(+id)
    }

    @Get('/uniquekey/:uniquekey')

    findByUniquekey(@Param('uniquekey') uniquekey: string) {
        return this.blogService.findByUniquekey(uniquekey)
    }

}
