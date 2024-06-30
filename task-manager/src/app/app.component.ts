import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgClass, NgFor,NgIf } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NgFor,NgIf,NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
 
})
export class AppComponent implements OnInit {
 data:any;
private url1: string='http://localhost:6500/tasks/fetchalldata';
private url2: string='http://localhost:6500/tasks/deletetasks';
constructor(private httpClient: HttpClient) {}
ngOnInit(): void {
  fetch(this.url1)
    .then((response) => response.json())
    .then((quotesData) => (this.data = quotesData));
}
deleteItem(_id: string) {
  return this.httpClient.delete(this.url2+"/"+_id).subscribe(() => console.log(`deleted item with id + ${_id}`))
  }
}


