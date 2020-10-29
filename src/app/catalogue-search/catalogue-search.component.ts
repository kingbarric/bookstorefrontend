
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';

@Component({
  selector: 'app-catalogue-search',
  templateUrl: './catalogue-search.component.html',
  styleUrls: ['./catalogue-search.component.css']
})
export class CatalogueSearchComponent implements OnInit {
  form: FormGroup;
  constructor(private router: ActivatedRoute, private route: Router) { }

  ngOnInit(): void {
    this.init();
  }
  init() {
    this.form = new FormGroup({
      lowerPrice: new FormControl('', [Validators.required]),
      upperPrice: new FormControl('', [Validators.required]),
      category: new FormControl('', [Validators.required]),
      publisher: new FormControl('', [Validators.required])
    }, {
      // validator: this.MustMatch('password', 'confirmPassword')
    });
  }

  search(){
    const data = this.form.value;
    console.log(data);
    this.route.navigate(['/search-result'],
       { queryParams: { lowerPrice: data.lowerPrice, upperPrice: data.upperPrice, category: data.category, publisher: data.publisher} });

  }
}
