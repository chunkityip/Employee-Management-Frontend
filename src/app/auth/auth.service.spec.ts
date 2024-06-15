import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';

/*
 auth.service.spec.ts is to ensure the AuthService can be successfully created by 
 the Angular dependency injection system.
 */


describe('AuthService' , () => {
    //Configures the test module and inject AuthService
    beforeEach(() => TestBed.configureTestingModule({
    providers: [AuthService]
}));

    it('should be created' , () => {
        //Retrieves the service from AuthService
        const service : AuthService = TestBed.inject(AuthService);
            expect(service).toBeTruthy();
    });
});






