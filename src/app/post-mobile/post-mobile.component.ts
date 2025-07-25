import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MobileService } from '../mobile-service';

@Component({
  selector: 'app-post-mobile',
  templateUrl: './post-mobile.component.html',
  styleUrls: ['./post-mobile.component.css']
})
export class PostMobileComponent {
  model!: string;
  brand!: string;
  price!: number;
  quantity!: number;
  selectedFile!: File;

  constructor(private http: HttpClient,private mobileService: MobileService) { }

  

  onFileChange(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  submitProduct(): void {
    const formData = new FormData();
    formData.append('model', this.model);
    formData.append('brand', this.brand);
    formData.append('price', this.price.toString());
    formData.append('quantity', this.quantity.toString());
    formData.append('image', this.selectedFile);

    this.mobileService.postMobile(formData).subscribe({
      next: (res) => console.log('Product uploaded successfully:', res),
      error: (err) => console.error('Upload failed:', err)
    });
  }
}
