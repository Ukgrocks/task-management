import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormsModule , NgForm} from '@angular/forms'; 
import { HttpClient } from '@angular/common/http';
import { NgClass, NgFor,NgIf} from '@angular/common';
import { Observable } from 'rxjs';
import { ChangeDetectorRef } from '@angular/core';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NgFor,NgIf,NgClass,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
 
})
export class AppComponent implements OnInit {
  formData = {
    title: '',
    description:  '',
    status: 'to-do'
  };
 data:any;
 data2:any;
 data3:any;
 data4:any;
 isAuthenticated=false;
 isAuthenticated1=false;
 isAuthenticated2=false;
private urladd: string ='http://localhost:6500/tasks/newtasks'
private url1: string='http://localhost:6500/tasks/fetchalldata';
private url2: string='http://localhost:6500/tasks/deletetasks';
private url3: string='http://localhost:6500/tasks/fetchdonetask';
private url4: string='http://localhost:6500/tasks/fetchtodo';
private url5: string='http://localhost:6500/tasks/fetchinprogress';
private url6: string='http://localhost:6500/tasks/api/export';
constructor(private httpClient: HttpClient,private cdRef: ChangeDetectorRef) {}
ngOnInit(): void {
  fetch(this.url1)
    .then((response) => response.json())
    .then((quotesData) => (this.data = quotesData));

fetch(this.url3)
.then((response) => response.json())
.then((quotesData) => (this.data2 = quotesData));

fetch(this.url4)
.then((response) => response.json())
.then((quotesData) => (this.data3 = quotesData));

fetch(this.url5)
.then((response) => response.json())
.then((quotesData) => (this.data4 = quotesData));
}

onCheckboxChange(event: Event) {
  const checkbox = event.target as HTMLInputElement;
  this.isAuthenticated = checkbox.checked;
  console.log('Checkbox is checked:', this.isAuthenticated);
}

onCheckboxChange1(event: Event) {
  const checkbox = event.target as HTMLInputElement;
  this.isAuthenticated1 = checkbox.checked;
  console.log('Checkbox is checked:', this.isAuthenticated1);
}

onCheckboxChange2(event: Event) {
  const checkbox = event.target as HTMLInputElement;
  this.isAuthenticated2 = checkbox.checked;
  console.log('Checkbox is checked:', this.isAuthenticated2);
}

deleteItem(_id: string) {
  window.location.reload()
  return this.httpClient.delete(this.url2+"/"+_id).subscribe(() => console.log(`deleted item with id + ${_id}`))
}

// addplus(){
//   const data = {title: "Mera Dost", description:"OK", status: "done"};
// console.log(data);
// return this.httpClient.post(this.urladd, data).subscribe(() => console.log('added item'))
// }

exportData() {
  const apiUrl = 'http://localhost:6500/tasks/api/export'; 
   
 this.httpClient.get(apiUrl).subscribe(() => console.log(`deleted item with id`));

}


onSubmit(form: NgForm) {
  window.location.reload()
console.log('Your form data:', form.value);
return this.httpClient.post(this.urladd, form.value).subscribe(() => console.log('added item'))
}



// profileForm = new FormGroup({
//   title: new FormControl(''),
//   description: new FormControl(''),
//   status:new FormControl('done'),
// });

// onSubmit() {
//   // Log the form data to the console (for demonstration purposes)
//   console.log('Form Data:', this.formData);

//   // Optional: Send the data to a server (e.g., via an HTTP POST request)
//   this.httpClient.post(this.urladd, this.formData).subscribe(
//     response => {
//       console.log('Form submitted successfully', response);
//     },
//     error => {
//       console.error('There was an error!', error);
//     }
//   );
// }
// const form = document.getElementById("forms");
// form.addEventListener('submit', function(event:Event) {  
//   event.preventDefault(); // Prevents the default form submission behavior  
//   const a = document.getElementById("title")?.innerText;
//   const b = document.getElementById("description")?.innerText;
//   const c = document.getElementById("status")?.innerText;
//   const data = {title: a, description: b, status: c};
//   console.log(data);
//   return this.httpClient.post(this.urladd, data).subscribe(() => console.log('added item'))
// }); 

}

