import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MobileService } from '../mobile-service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  mobileId!: number;
  model = '';
  brand = '';
  price!: number;
  quantity!: number;
  selectedFile?: File;

   constructor(
    private route: ActivatedRoute,
    private mobileService: MobileService,
    private router: Router
  ) {}

   ngOnInit(): void {
    this.mobileId = +this.route.snapshot.paramMap.get('id')!;
    this.mobileService.getMobileById(this.mobileId).subscribe({
      next: (mobile) => {
        this.model = mobile.model;
        this.brand = mobile.brand;
        this.price = mobile.price;
        this.quantity = mobile.quantity;
      },
      error: (err) => console.error('Failed to load mobile', err)
    });
  }

  onFileChange(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  submitUpdate(): void {
    const formData = new FormData();
    formData.append('model', this.model);
    formData.append('brand', this.brand);
    formData.append('price', this.price.toString());
    formData.append('quantity', this.quantity.toString());
    if (this.selectedFile) {
      formData.append('image', this.selectedFile);
    }

    this.mobileService.updateMobile(this.mobileId, formData).subscribe({
      next: (response) => {
        console.log('Update successful', response);
        this.router.navigate(['/get-mobiles']);
      },
      error: (err) => {
        console.error('Update failed', err);  
      }
    });
  }
}
