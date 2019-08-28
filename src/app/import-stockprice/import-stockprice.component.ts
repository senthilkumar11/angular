import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { UploadService } from '../service/upload.service';

@Component({
  selector: 'app-import-stockprice',
  templateUrl: './import-stockprice.component.html',
  styleUrls: ['./import-stockprice.component.css']
})
export class ImportStockpriceComponent implements OnInit {

  selectedFiles: FileList;
  currentFileUpload: File;
   constructor(private uploadService: UploadService) {}
 selectFile(event) {
   this.selectedFiles = event.target.files;
 }

  ngOnInit() {
  }
  upload() {
    this.currentFileUpload = this.selectedFiles.item(0);
    this.uploadService.pushFileToStorage(this.currentFileUpload).subscribe(event => {
     if (event instanceof HttpResponse) {
        console.log('File is completely uploaded!');
      }
    });
    this.selectedFiles = undefined;
  }
}
