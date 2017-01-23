function Bank() {

    var name = '';
    var account = '';
    var amount = '';

    this.getName = function () {
        return name;
    };

    this.setName = function (_name) {
        name = _name;
    };

    this.getAccount = function () {
        return account;
    };

    this.setAccount = function (_account) {
        account = _account;
    };

    this.getAmount = function () {
        return amount;
    };

    this.setAmount = function (_amount) {
        amount = _amount;
    };
};

function BankStrategy(strategy, bank) {
    this.strategy = strategy;
    this.bank = bank;

}

BankStrategy.prototype.doStrategy = function () {
    return this.strategy();
}

var deposit = function (bank,value) {

    var amount = bank.getAmount() + value;
    console.log('Deposit strategy -> ', amount);
}

var withDraw = function (bank,value) {

    var amount = bank.getAmount() - value;
    console.log('withDraw strategy -> ', amount);
}

function Main() {
    var name = window.prompt('whats is your bank name?');
    var account = window.prompt('whats is your account?');
    var amount = parseInt(window.prompt('how much you have?'));
    var bank = new Bank();
    bank.setName(name);
    bank.setAccount(account);
    bank.setAmount(amount);

    var option = parseInt(window.prompt('1- Deposit \n 2- Withdraw'));
    var value = 0;

    while(option !== 0){
        value = parseInt(window.prompt('Enter amount :'));
        if(option === 1){
            return new BankStrategy(deposit(bank,value));
        }
        if(option === 2){
            return new BankStrategy(withDraw(bank,value));
        }
    }

    console.log(bank.getName(),bank.getAccount(),bank.getAmount());

}
Main();


