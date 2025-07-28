import { Component } from '@angular/core';
import { Mobile } from '../mobile';
import { MobileService } from '../mobile-service';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-get-mobiles',
  templateUrl: './get-mobiles.component.html',
  styleUrls: ['./get-mobiles.component.css']
})
export class GetMobilesComponent {
  mobiles: Mobile[] = [];
  searchBrand: string = '';
  private searchSubject: Subject<string> = new Subject<string>();

  constructor(private mobileService: MobileService, private router: Router) {}

  ngOnInit(): void {
    this.getAllMobiles();

    // Debounced search listener
    this.searchSubject.pipe(
      debounceTime(300),
      distinctUntilChanged()
    ).subscribe(searchTerm => {
      if (searchTerm.trim() === '') {
        this.getAllMobiles();
      } else {
        this.mobileService.getMobilesByBrand(searchTerm.trim()).subscribe({
          next: (mobiles) => {
            this.mobiles = mobiles;
          },
          error: (err) => {
            console.error('Error fetching mobiles by brand:', err);
          }
        });
      }
    });
  }

  filterByBrand(): void {
    this.searchSubject.next(this.searchBrand);
  }

  getAllMobiles(): void {
    this.mobileService.getAllMobiles().subscribe(data => {
      this.mobiles = data;
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
