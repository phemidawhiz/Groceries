import { Component } from "@angular/core";

@Component({
    selector: "gr-main",
    template: `
        <StackLayout>
            <TextField hint="Email Address" keyboardType="email"
            autocorrect="false" 
            autocapitalisationType="none"></TextField>

            <Button text="Sign In"></Button>
            <Button text="Sign Up For Groceries"></Button>
        </StackLayout>
    `
})
export class AppComponent { }
