import { Injectable } from '@nestjs/common';

@Injectable()
export class BlogService {
    private readonly blogs = [
        {
            id: 1,
            blogTitle: "test blog",

            blogUniqueKey: "1"
        },
        {
            id: 2,
            blogTitle: "test blog 2",

            blogUniqueKey: "2"
        },
        {
            id: 3,
            blogTitle: "test blog 3",
            blogUniqueKey: "3"
        }
    ];


    findAll() {
        return this.blogs
    }

    findOne(id: number) {
        return this.blogs.find((blog) => blog.id === id);
    }


    findByUniquekey(id: string) {
        return this.blogs.find((blog) => blog.blogUniqueKey === id);
    }
}