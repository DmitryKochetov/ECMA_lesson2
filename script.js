// Задание 1: ""Управление библиотекой книг""

// Реализуйте класс Book, представляющий книгу, со следующими свойствами и методами:

// Свойство title (название) - строка, название книги.
// Свойство author (автор) - строка, имя автора книги.
// Свойство pages (количество страниц) - число, количество страниц в книге.
// Метод displayInfo() - выводит информацию о книге (название, автор и количество страниц).

class Book {
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }

  displayInfo() {
    console.log(
      `книга: ${this.title}, автор: ${this.author}, страниц: ${this.pages}.`
    );
  }
}

const newBook = new Book(`Незнайка на Луне`, "Н.Носов", 576);

newBook.displayInfo();

// Задание 2: ""Управление списком студентов""
// Реализуйте класс Student, представляющий студента, со следующими свойствами и методами:

// Свойство name (имя) - строка, имя студента.
// Свойство age (возраст) - число, возраст студента.
// Свойство grade (класс) - строка, класс, в котором учится студент.
// Метод displayInfo() - выводит информацию о студенте (имя, возраст и класс).
// javascript

// // Пример использования класса
// const student1 = new Student(""John Smith"", 16, ""10th grade"");
// student1.displayInfo();
// // Вывод:
// // Name: John Smith
// // Age: 16
// // Grade: 10th grade

// const student2 = new Student(""Jane Doe"", 17, ""11th grade"");
// student2.displayInfo();
// // Вывод:
// // Name: Jane Doe
// // Age: 17
// // Grade: 11th grade"

class Student {
  constructor(name, age, grade) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }
  displayInfo() {
    console.log(`Name: ${this.name}\nAge: ${this.age}\nGrade: ${this.grade}`);
  }
}

const student1 = new Student("John Smith", 16, "10th grade");
student1.displayInfo();
const student2 = new Student("Jane Doe", 17, "11th grade");
student2.displayInfo();

// ****** Задача необязательная для выполнения:

// Это расширенная версия задачи с банком, которую мы решлали на семинаре:

// Создайте класс "Банк", который будет иметь следующие свойства: название банка, список клиентов и список счетов. Класс должен иметь методы для добавления нового клиента,
// открытия нового счета для клиента, пополнения счета, снятия денег со счета и проверки баланса.

// Пример работы:

// const bank = new Bank("Мой Банк");

// const client1 = new Client("Иван", 25);
// const client2 = new Client("Мария", 30);

// bank.addClient(client1);
// bank.addClient(client2);

// bank.openAccount(client1, 1000);
// bank.openAccount(client2, 500);

// bank.deposit(123456789, 200);
// bank.withdraw(987654321, 100);
// bank.checkBalance(123456789);
// bank.checkBalance(987654321);

class Bank {
  constructor(bankName) {
    this.bankName = bankName;
  }
  clientList = [];
  accountsList = [];

  addClient(client){
    this.clientList.push(client);
  }

  openAccount(client, accountNumber, balance) {
    const account = new BankAccount(accountNumber, balance)
    this.accountsList.push({client, account});
  }

  checkBalance(accountNum) {
    console.log(`На счете ${accountNum} средств: ${this.accountsList.find(x => x.account.accountNumber === accountNum).account.balance}`);
  }

  deposit(accountnumb, amount){
    this.accountsList.find(x => x.account.accountNumber === accountnumb).account.balance += amount;
    console.log(`На счет ${accountnumb} внесено: ${amount}`);
  }
  withdraw(accountnumb, amount) {
    let bal = this.accountsList.find(x => x.account.accountNumber === accountnumb).account.balance;
    if (amount > bal) {
      console.log(`Недостаточно средств`);
    } else {
      this.accountsList.find(x => x.account.accountNumber === accountnumb).account.balance -= amount;
      console.log(`Со счета ${accountnumb} списано: ${amount}`);
    }
  }

}

class Client {
    constructor(clientName, clientAge){
        this.clientName = clientName;
        this.clientAge = clientAge
    }
}

class BankAccount {
  constructor(accountNumber, balance) {
    this.accountNumber = accountNumber;
    this.balance = balance;
  }
}

const bank = new Bank("Мой Банк");

const client1 = new Client("Иван", 25);
const client2 = new Client("Мария", 30);

bank.addClient(client1);
bank.addClient(client2);

bank.openAccount(client1, 123456789, 1000);
bank.openAccount(client2, 987654321, 500);

console.log(bank);

console.log(`----------------`);
bank.checkBalance(123456789);
bank.deposit(123456789, 200);
bank.checkBalance(123456789);
console.log(`----------------`);
bank.checkBalance(987654321);
bank.withdraw(987654321, 100);
bank.checkBalance(987654321);

