import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sale-detail-principal',
  templateUrl: './sale-detail-principal.component.html',
  styleUrls: ['./sale-detail-principal.component.css']
})
export class SaleDetailPrincipalComponent implements OnInit {

  
  
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.router.navigate(['saleDetail'], {relativeTo:this.route});
  }
  

}
