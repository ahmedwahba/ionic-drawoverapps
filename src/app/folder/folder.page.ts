import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

  onClick() {
    (<any>window).overApps.checkPermission(function(msg){
          console.log(msg);
          var options = {
            path: "test.html",          // file path to display as view content.
            hasHead: true,              // display over app head image which open the view up on click.
            dragToSide: false,          // enable auto move of head to screen side after dragging stop. 
            enableBackBtn: false,       // enable hardware back button to close view.
            enableCloseBtn: true,      //  whether to show native close btn or to hide it.
            verticalPosition: "top",    // set vertical alignment of view.
            horizontalPosition: "left"  // set horizontal alignment of view. 
      };
      
      (<any>window).overApps.startOverApp(options,function (success){
            console.log(success);
      },function (err){
            console.log(err);
      });
    });
   
  }

}
