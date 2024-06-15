import { Injectable} from '@angular/core'
import { Router } from '@angular/router'
import { BehaviorSubject } from 'rxjs'
import { EmployeeRegistationService } from '../employee-registation.service';
import { User } from './user';

//Making it as singleton and avilable throughout enitre application
@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private loggedIn = new BehaviorSubject<boolean>(false);

    get isLoggedIn() {
        return this.loggedIn.asObservable();
    }

    constructor(
        private router : Router,
        private service : EmployeeRegistationService
    ) {}

    // A method for user login
    login(user : User) {
        let resp = this.service.deLogin(user);
        resp.subscribe((data) => {
            if (data != null) {
                this.service.employee = data
                this.loggedIn.next(true);
                this.router.navigate(['/profile']);
            }
        });
        if (this.loggedIn.value === true) {
            return "Login Successful!";
        } else {
            return "Invalid usernmae / passoword";
        }
    }

    // A method for user logout
    logout() {
        this.loggedIn.next(false);
        this.router.navigate(['/logout']);
    }
}
