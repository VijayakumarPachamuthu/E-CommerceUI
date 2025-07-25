import { Component } from '@angular/core';
import { Mobile } from '../mobile';
import { MobileService } from '../mobile-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-mobiles',
  templateUrl: './get-mobiles.component.html',
  styleUrls: ['./get-mobiles.component.css']
})
export class GetMobilesComponent {
  mobiles: Mobile[] = [];
  searchBrand: string = '';

  constructor(private mobileService: MobileService, private router: Router) { }

  ngOnInit(): void {
    this.getAllMobiles();
  }

  getAllMobiles(): void {
    this.mobileService.getAllMobiles().subscribe(data => {
      this.mobiles = data;
    });
  }

  filterByBrand(): void {
    if (this.searchBrand.trim() === '') {
      this.getAllMobiles();
      return;
    }

    this.mobileService.getMobilesByBrand(this.searchBrand.trim()).subscribe({
      next: (mobiles) => {
        this.mobiles = mobiles;
      },
      error: (err) => {
        console.error('Error fetching mobiles by brand:', err);
      }
    });
  }
  updateMobile(mobile: Mobile) {
    this.router.navigate(['/update', mobile.id]);
  }

  deleteMobile(mobile: Mobile) {
    this.mobileService.deleteMobileById(mobile.id!).subscribe(() => {
      this.getAllMobiles();
    });
  }
}
