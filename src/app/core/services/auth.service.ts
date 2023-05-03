import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { User } from 'src/app/shared/models/user';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  logout() {
    throw new Error('Method not implemented.');
  }
 private user: BehaviorSubject<User|null> = new BehaviorSubject<User|null>(null);
 readonly user$: Observable<User|null> = this.user.asObservable();
  authService: any;

 login(email: string, password: string): Observable<User|null> {
   
  return of(new User());
 }
 submit() {
  this.authService.login('John', 'Doe').subscribe((user: BehaviorSubject<User | null>) => {
   this.user = user;
   // Effectuer une autre action, avec l’utilisateur venant de s’inscrire.
  });
 }
 
  constructor(private http: HttpClient) { }
 
  register(name: string, email: string, password: string): Observable<User|null> {
    const API_KEY: string = 'AIzaSyBPAaYu4kmI71pxmjqUqc8tp-C38SfXJwQ>';
    const API_AUTH_BASEURL: string =
     `https://www.googleapis.com/identitytoolkit/v3/relyingparty`;
    const url: string = `${API_AUTH_BASEURL}/signupNewUser?key=${API_KEY}`;
      
   const data = {
    email: email,
    password: password,
    returnSecureToken: true
   };
  
   const httpOptions = {
    headers: new HttpHeaders({'Content-Type':  'application/json'})
   };
  
   return this.http.post<User>(url, data, httpOptions);
  }
}
