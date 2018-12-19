import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { BlogHttpService } from "../blog-http.service";
import { Location } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css'],
  providers: [Location]
})
export class BlogViewComponent implements OnInit {

  public currentBlog;
  constructor(private toastr: ToastrService,private _route: ActivatedRoute, private router: Router, private blogHttpService: BlogHttpService, private location: Location) {

  }


  ngOnInit() {
    let myBlogId = this._route.snapshot.paramMap.get('blogId'); //this route snapshot brings data from route component where we can access data in recevier component i.e here
    console.log(myBlogId) //parammap is used for getting id from url snapshot is used to read route parameter
    this.blogHttpService.getSingleBlog(myBlogId).subscribe(

      data => {
        console.log(data);
        this.currentBlog = data["data"];
        return this.currentBlog;
      },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage)
      }
    )
  }

  deleteThisBlog(): any {

    this.blogHttpService.deleteBlog(this.currentBlog.blogId).subscribe(

      data => {
        console.log(data);
        this.toastr.success('Blog Deleted successfully', 'Success!');
        setTimeout(() => {
          this.router.navigate(['/home']);
        }, 1000)

      },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage);
        this.toastr.error('Some error occured', 'Error');
      }


    )




  }// end delete this blog 

  goBackToPreviousPage(): any {

    this.location.back();

  }

}