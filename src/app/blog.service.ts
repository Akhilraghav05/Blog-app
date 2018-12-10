import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {


   public allBlogs = [
    {
        "blogId": "1",
        "lastModified": "2018-10-3",
        "created": "2018-10-2",
        "tags": [],
        "author": "admin",
        "category": "comedy",
        "isPublished ": true,
        "views": 0,
        "bodyHtml": "this is a blog",
        "description": "blog bhai",
        "title": "1st blog"
    },
    {
        "blogId": "2",
        "lastModified": "2018-10-3",
        "created": "2018-10-2",
        "tags": [],
        "author": "admin",
        "category": "comedy",
        "isPublished ": true,
        "views": 0,
        "bodyHtml": "this is a blog",
        "description": "blog bhai",
        "title": "2nd blog"
    },
    {
        "blogId": "3",
        "lastModified": "2018-10-3",
        "created": "2018-10-2",
        "tags": [],
        "author": "admin",
        "category": "comedy",
        "isPublished ": true,
        "views": 0,
        "bodyHtml": "this is a blog",
        "description": "blog bhai",
        "title": "3rd blog"
    }
];
public currentBlog:any;
  
  

  constructor() { 
    console.log("blog service constructor is called")
  }
  
  //method to return all blogs
  public getAllBlogs():any{
    //var blogList=this.getAllBlogs;
    //console.log(blogList);
    return this.getAllBlogs;
  }
  
//method to return a particular blog
  public getSingleBlogInformation(currentBlogId): any{
      for(let blog of this.allBlogs){
      if(blog.blogId == currentBlogId){
        this.currentBlog=blog;
      }
      return this.currentBlog;
    } 
   //console.log(this.currentBlog);
  }




}
