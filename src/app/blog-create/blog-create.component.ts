import { Component, OnInit,ViewContainerRef } from '@angular/core';
import {BlogHttpService } from '../blog-http.service';
import {ActivatedRoute,Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css']
})
export class BlogCreateComponent implements OnInit {

  constructor(private toastr: ToastrService,private blogHttpService:BlogHttpService ,private _route:ActivatedRoute,private router:Router, vcr:ViewContainerRef)
    { 
   
    }
    public blogTitle:string="this is default";
    public blogBodyHtml:string;
    public blogDescription:string;
    public blogCategory:string;
    public possibleCategories = ["comedy","Drama","Action","Technology"]
  

  ngOnInit() {
  }
  public createBlog(): any{
    let blogData ={
      title:this.blogTitle,
      description:this.blogDescription,
      blogBody:this.blogBodyHtml,
      category:this.blogCategory
    }
    console.log(blogData)
  
  this.blogHttpService.createBlog(blogData).subscribe(
    data =>{
        console.log("blog created");
        console.log(data);
       this.toastr.success('blog Posted successfully','Success!');
       setTimeout(()=>{
         this.router.navigate(['/blog',data.data.blogId]);
       },1000)
    },
    error =>{
        console.log("some error occured");
        console.log(error.errorMessage)
        this.toastr.error('error message','Error');
    }
)  
  }
}