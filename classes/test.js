"use strict";

describe("Test for Account", function () {

    describe("Checks the account info after create", function (){
        const account = new Account(1234);

        it("check the account number", function () {
            assert.equal("1234", account.getNumber());
        });
    
        it("check the account balance", function () {
            assert.equal("0", account.getBalance());
        });
    });

    describe("check the account info after deposit 4000", function (){
        const account = new Account(1234);
        account.deposit(4000);

        it("check the account balance", function () {
            assert.equal("4000", account.getBalance());
        });
    });

    describe("check the account info after withdraw 2000", function (){
        const account = new Account(1234);
        account.deposit(4000);
        account.withdraw(2000);

        it("check the account balance", function () {
            assert.equal("2000", account.getBalance());
        });

        it("test toString method", function () {
            assert.equal("Account 1234: balance 2000", account.toString());
        });
    });

});
describe("Test for CheckingAccount", function () {

    describe("check the account info for negative balance", function (){
        const account = new CheckingAccount(1234, 200);
        
        account.deposit(2500);
        account.withdraw(2600);

        it("check the account balance", function () {
            assert.equal("-100", account.getBalance());
        });

        it("test toString method", function () {
            assert.equal("Account 1234: balance -100: overdraft limit 200", account.toString());
        });
    });

});

describe("Test for SavingsAccount", function () {

    describe("check the account info after interest is deposited", function (){
        const account = new SavingsAccount(1234, 10);
        
        account.deposit(1000);
        account.addInterest();

        it("check the account balance", function () {
            assert.equal("1100", account.getBalance());
        });

        it("test toString method", function () {
            assert.equal("Account 1234: balance 1100: interest 10%", account.toString());
        });
    });

});


describe("Test for Bank", function () {

    describe("Add all types of bank and check the account report", function (){
        const bank = new Bank();

        const acnr = bank.addAccount();
        const savingAcnr = bank.addSavingsAccount(10);
        const checkingAcnr = bank.addCheckingAccount(2000);

        it("check account info for all accounts", function () {
            assert.equal("Account 2001: balance 5000\nAccount 2002: balance 7000: interest 10%\nAccount 2003: balance -150: overdraft limit 2000", bank.accountReport());
        });

    });

    describe("Add all types of bank and remove the saving account", function (){
        const bank = new Bank();

        const acnr = bank.addAccount();
        const savingAcnr = bank.addSavingsAccount(10);
        const checkingAcnr = bank.addCheckingAccount(2000);

        bank.closeAccount(savingAcnr);

        it("check account info for all accounts", function () {
            assert.equal("Account 2004: balance 5000\nAccount 2006: balance -150: overdraft limit 2000", bank.accountReport());
        });

    });

    describe("Add all types of bank and check end of month report", function (){
        const bank = new Bank();

        const acnr = bank.addAccount();
        const savingAcnr = bank.addSavingsAccount(10);
        const checkingAcnr = bank.addCheckingAccount(2000);

        it("check end of month report", function () {
            assert.equal("Interest added SavingsAccount 2008: balance: 7700 interest: 700\nWarning, low balance CheckingAccount 2009: balance: -150 overdraft limit: 2000", bank.endOfMonth());
        });

    });

});