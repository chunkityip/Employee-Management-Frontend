//A class for unit testing

/*
- TestBed: To create and configure an Angular testing module.
- async: To handle asynchronous code in tests.
- inject: To inject dependencies into the test functions.
- AuthGuard: To protect certain routes in your application.

*/
import { TestBed , async , inject } from "@angular/core/testing";

import { AuthGuard } from './auth.guard';


// describe: A Jasmine function: Creates a test suite for the AuthGuard. 
// It's a container for related tests.

// TestBed.configureTestingModule: Configures the test module by specifying the providers. 
// In this case, it registers the AuthGuard as a provider so it can be injected into the tests.
describe('AuthGuard' , () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AuthGuard]
        });
    });

    it('should ...' , inject([AuthGuard] , (guard: AuthGuard) => {
        expect(guard).toBeTruthy();
    }));
})