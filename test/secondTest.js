const {Builder, By, Key} = require("selenium-webdriver");
var should = require("chai").should();

// describe block
describe("add another todo tests", function(){

    // it block
    it("successfully add a another todo to application", async function(){
        // launch the browser
        let driver = await new Builder().forBrowser("firefox").build();

        // navigate to application
        await driver.get("https://lambdatest.github.io/sample-todo-app/");

        // add a todo
        await driver.findElement(By.id("sampletodotext"))
            .sendKeys("Learn Selenium", Key.RETURN);

        // assert
        let todoText = await driver.findElement(By.xpath("//li[last()]")).getText().then(function(value){
            return value;
        })

        // assert using chai should
        todoText.should.equal("Learn Selenium");

        // close the browser
        await driver.quit();            
    });

    it("Adding a new test for reporting", async function(){
        // launch the browser
        let driver = await new Builder().forBrowser("firefox").build();

        // navigate to application
        await driver.get("https://lambdatest.github.io/sample-todo-app/");

        // add a todo
        await driver.findElement(By.id("sampletodotext"))
            .sendKeys("Learn Selenium", Key.RETURN);

        // assert
        let todoText = await driver.findElement(By.xpath("//li[last()]")).getText().then(function(value){
            return value;
        })

        // assert using chai should
        todoText.should.equal("Learn JavaScript");

        // close the browser
        await driver.quit();            
    });

});