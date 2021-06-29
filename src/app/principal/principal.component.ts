import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { SaleDetailComponent } from '../sale-detail/sale-detail.component';
const routes: Routes = [
  { path: 'home', component: HomeComponent, outlet: "aux" },
  { path: 'second-component', component: SaleDetailComponent },
];
@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
        this.router.navigate(['home'], {relativeTo:this.route});
  }

}
