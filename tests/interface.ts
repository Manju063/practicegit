//Interface is a way to define the structure of an object in TypeScript. It allows you to specify the properties and methods that an object should have, without providing an implementation. Interfaces are useful for defining contracts in your code, ensuring that certain objects adhere to a specific shape.

//Here is an example of an interface in TypeScript:
interface playwright {
    OpenBrowser(): void;
    CloseBrowser(): void;
    NavigateToUrl(): void;
    ClickElement(): void;
    EnterText(): void;
}

interface selenium {
    OpenBrowser(): void;
    CloseBrowser(): void;
    NavigateToUrl(): void;
    ClickElement(): void;
    EnterText(): void;
}

class tester1_Chrome implements playwright, selenium {
    OpenBrowser(): void {
        console.log("Opening Chrome browser");
    }
    CloseBrowser(): void {
        console.log("Closing Chrome browser");
    }
    NavigateToUrl(): void {
        console.log("Navigating to URL");
    }
    ClickElement(): void {
        console.log("Clicking element");
    }
    EnterText(): void {
        console.log("Entering text");
    }
}