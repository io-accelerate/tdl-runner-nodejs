const SumSolution = require('./solutions/SUM/sum_solution');
const HelloSolution = require('./solutions/HLO/hello_solution');
const FizzBuzzSolution = require('./solutions/FIZ/fizz_buzz_solution');
const CheckoutSolution = require('./solutions/CHK/checkout_solution');
const DemoRound1Solution = require('./solutions/DMO/demo_round1_solution');
const DemoRound2Solution = require('./solutions/DMO/demo_round2_solution');
const DemoRound3Solution = require('./solutions/DMO/demo_round3_solution');
const DemoRound4n5Solution = require('./solutions/DMO/demo_round4n5_solution');
const InventoryItem = require('./solutions/DMO/inventory_item');

class EntryPointMapping {
    constructor() {
        this.sumSolution = new SumSolution();
        this.helloSolution = new HelloSolution();
        this.fizzBuzzSolution = new FizzBuzzSolution();
        this.checkoutSolution = new CheckoutSolution();
        this.demoRound1Solution = new DemoRound1Solution();
        this.demoRound2Solution = new DemoRound2Solution();
        this.demoRound3Solution = new DemoRound3Solution();
        this.demoRound4n5Solution = new DemoRound4n5Solution();
    }

    sum(...args) {
        return this.sumSolution.compute(...args);
    }

    hello(...args) {
        return this.helloSolution.hello(...args);
    }

    fizz_buzz(...args) {
        return this.fizzBuzzSolution.fizzBuzz(...args);
    }

    checkout(...args) {
        return this.checkoutSolution.checkout(...args);
    }

    increment(...args) {
        return this.demoRound1Solution.increment(...args);
    }

    to_uppercase(...args) {
        return this.demoRound1Solution.toUppercase(...args);
    }

    letter_to_santa() {
        return this.demoRound1Solution.letterToSanta();
    }

    count_lines(...args) {
        return this.demoRound1Solution.countLines(...args);
    }

    array_sum(...args) {
        return this.demoRound2Solution.arraySum(...args);
    }

    int_range(...args) {
        return this.demoRound2Solution.intRange(...args);
    }

    filter_pass(...args) {
        return this.demoRound2Solution.filterPass(...args);
    }

    inventory_add(inventoryItem, number) {
        const item = new InventoryItem(inventoryItem);
        return this.demoRound3Solution.inventoryAdd(item, number);
    }

    inventory_size() {
        return this.demoRound3Solution.inventorySize();
    }

    inventory_get(...args) {
        const response = this.demoRound3Solution.inventoryGet(...args);
        if (response && typeof response === 'object' && !(response instanceof Array)) {
            return { ...response }; // mimic asdict behavior
        }
        return response;
    }

    waves(...args) {
        return this.demoRound4n5Solution.waves(...args);
    }
}

module.exports = EntryPointMapping;
