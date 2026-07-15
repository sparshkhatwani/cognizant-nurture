# Cognizant Digital Nurture – Java Full Stack Engineer (FSE) Program

This repository houses the hands-on coding exercises, project implementations, and architectural summaries completed as part of the **Cognizant Digital Nurture – Java FSE Program**. 

> **Name:** Sparsh Khatwani  
> **Program:** Cognizant Digital Nurture – Full Stack Engineering (Java)  
> **Duration:** 5 Weeks

The program covers advanced Java engineering concepts including:
* **Data Structures & Algorithms (DSA)**: Search optimization, memoization, and recurrence models.
* **Design Patterns & Principles**: Creational and structural patterns conforming to SOLID principles.
* **Database Programming (PL/SQL)**: Stored procedures, cursor control, ACID transaction processing, and logic routing.
* **Spring Core & Maven**: Dependency Injection (DI), Inversion of Control (IoC), XML/Java configuration models, and Maven dependency management.
* **Spring Data JPA & Hibernate**: Object-Relational Mapping (ORM), repository pattern abstractions, custom query derivations (`@Query`), and JPA spec comparisons.
* **Spring Security & RESTful Services**: Building authenticated REST APIs using Spring Boot, Spring Security, Basic Authentication, and JSON Web Tokens (JWT).
* **Microservices with Spring Boot**: Decoupled, production-ready, domain-focused RESTful API services configured on independent network ports.
* **Frontend Development with React**: Component-based UI development, JSX, event handling, lifecycle concepts, and modern React app setup.

---

## 📂 Repository Structure

The project is structured logically by training weeks and module domains:

```text
cognizant-nurture/
│
├── Week1/
│   ├── Algorithms_Data_Structure/
│   │   ├── Exercise2_EcommercePlatformSearch/
│   │   │   └── EcommercePlatformSearch.java (Linear vs Binary search optimization)
│   │   └── Exercise7_FinancialForecasting/
│   │       └── FinancialForecasting.java (Recursive & memoized future-value forecasting)
│   │
│   ├── Design_Patterns_and_Principles/
│   │   ├── Exercise1_SingletonPattern/
│   │   │   └── SingletonPatternDemo.java (Thread-safe Double-Checked Locking Logger)
│   │   └── Exercise2_FactoryMethodPattern/
│   │       └── FactoryMethodPatternDemo.java (Polymorphic Document Management System)
│   │
│   └── PLSQL_Exercises/
│       ├── Exercise1_ControlStructures/
│       │   └── ControlStructures.sql (Age categories, loan criteria, loops & compound interest)
│       └── Exercise3_StoredProcedures/
│           └── StoredProcedures.sql (Monthly interest credits, batch updates, and transfer funds)
│
├── Week2/
│   ├── Spring_Core_Maven/
│   │   ├── Exercise1_ConfiguringBasicSpringApp/
│   │   │   ├── pom.xml
│   │   │   └── src/ (Setter Injection wired via XML Context)
│   │   ├── Exercise2_ImplementingDependencyInjection/
│   │   │   ├── pom.xml
│   │   │   └── src/ (Constructor vs Setter Dependency Injection)
│   │   └── Exercise4_CreatingConfiguringMavenProject/
│   │       ├── pom.xml
│   │       └── src/ (Java-based @Configuration and @Bean definitions)
│   │
│   └── Spring_Data_JPA/
│       ├── Exercise1_SpringDataJPA_QuickExample/
│       │   ├── pom.xml
│       │   └── src/ (Bootstrapped CRUD demo with Spring Boot, JPA, & H2)
│       └── Exercise2_JPA_Hibernate_SpringDataJPA_Differences/
│           ├── JPA_vs_Hibernate_vs_SpringDataJPA.java (Multi-layered code comparison)
│           └── README.md (Comprehensive architectural concept analysis)
│
├── Week3/
│   ├── handson1-Create-Spring-Web-Project/
│   │   └── spring-learn/ (Basic Spring Boot Web MVC configuration & SLF4J setup)
│   ├── handson4-Load-Country-From-XML/
│   │   └── spring-learn/ (XML context bean loading with ClassPathXmlApplicationContext)
│   ├── handson5-Hello-World-REST-Service/
│   │   └── spring-learn/ (Spring REST Controller exposing /hello)
│   ├── handson6-REST-Country-Web-Service/
│   │   └── spring-learn/ (Exposing country bean loaded via country.xml under /country)
│   ├── handson7-REST-Get-Country-By-Code/
│   │   └── spring-learn/ (Path variable mapping under /countries/{code} via CountryService)
│   ├── handson8-Create-Authentication-Service-Returns-JWT/
│   │   └── spring-learn/ (Token generation using io.jsonwebtoken on endpoint /authenticate)
│   ├── handson9-Read-Authorization-Header/
│   │   └── spring-learn/ (Integrating Basic Auth SecurityConfig for accessing /authenticate)
│   └── handson10-Generate-JWT-Token/
│       └── spring-learn/ (Complete secure country service utilizing basic auth and JWT token utilities)
│
├── Week4/
│   └── Creating-Microservices-for-account-and-loan/
│       ├── account/
│       │   ├── pom.xml
│       │   └── src/ (Spring Boot account microservice with GET /accounts/{number})
│       └── loan/
│           ├── pom.xml
│           └── src/ (Spring Boot loan microservice on port 8081 with GET /loans/{number})
│
├── Week5/
│   ├── HandsOn-01-React-Setup/
│   ├── HandsOn-02-React-Components/
│   ├── HandsOn-03-Function-Component/
│   ├── HandsOn-04-Component-Lifecycle/
│   ├── HandsOn-09-ES6/
│   ├── HandsOn-10-React-JSX/
│   ├── HandsOn-11-React-Event-Handling/
│   ├── HandsOn-12-React-ticketbookingapp/
│   │   └── ticketbookingapp/ (React 19 ticket booking app)
│   ├── HandsOn-13-React-bloggerapp/
│   └── HandsOn-5-React/
│       └── cohort-tracker/ (React practice app)
│
└── .gitignore
```

---

## 🛠️ Technology Stack & Tooling

To run and verify the exercises in this repository, you will need:
* **Java Development Kit (JDK 11 or higher)** (Java 11 or 17 recommended)
* **Apache Maven 3.6+** (for building Spring/Spring Boot projects)
* **Node.js and npm** (for the React exercises in Week 5)
* **Oracle Database** or an Oracle SQL-compliant interpreter (for PL/SQL exercises)
* **H2 Database engine** (embedded automatically in the Spring Data JPA project)
* **JSON Web Tokens (JWT) Dependency**: `io.jsonwebtoken` library (used in Week 3 JWT hands-on)

---

## 📌 Module Highlights & Implementation Details

### ⚡ Week 1: Algorithms, Design Patterns, and PL/SQL

#### 1. Algorithms & Data Structures
* **Exercise 2: E-Commerce Search** ([EcommercePlatformSearch.java](file:///c:/storage/cognizant-nurture/Week1/Algorithms_Data_Structure/Exercise2_EcommercePlatformSearch/EcommercePlatformSearch.java))
  * Uses a custom `Product` class with `id`, `name`, `category`, and `price`. Contrasts case-insensitive name-based linear search ($O(n)$) and sorted ID-based binary search ($O(\log n)$).
* **Exercise 7: Financial Forecasting** ([FinancialForecasting.java](file:///c:/storage/cognizant-nurture/Week1/Algorithms_Data_Structure/Exercise7_FinancialForecasting/FinancialForecasting.java))
  * Implements future-value calculations using plain recursion, memoization cache via `HashMap` to speed up sub-problems, and a flat iterative approach to avoid stack overflows.

#### 2. Design Patterns & Principles
* **Exercise 1: Singleton Logger** ([SingletonPatternDemo.java](file:///c:/storage/cognizant-nurture/Week1/Design_Patterns_and_Principles/Exercise1_SingletonPattern/SingletonPatternDemo.java))
  * Built a thread-safe `Logger` using **Double-Checked Locking (DCL)** and a `volatile` instance variable to guarantee visibility.
* **Exercise 2: Factory Method Document System** ([FactoryMethodPatternDemo.java](file:///c:/storage/cognizant-nurture/Week1/Design_Patterns_and_Principles/Exercise2_FactoryMethodPattern/FactoryMethodPatternDemo.java))
  * Implemented polymorphic creators (`WordCreator`, `PdfCreator`, etc.) defining document interfaces, matching SOLID's Open/Closed Principle.

#### 3. PL/SQL Database Programming
* **Exercise 1: Control Structures** ([ControlStructures.sql](file:///c:/storage/cognizant-nurture/Week1/PLSQL_Exercises/Exercise1_ControlStructures/ControlStructures.sql))
  * Implemented age categorization, credit score evaluations, loan approvals, and loop constructs.
* **Exercise 3: Stored Procedures** ([StoredProcedures.sql](file:///c:/storage/cognizant-nurture/Week1/PLSQL_Exercises/Exercise3_StoredProcedures/StoredProcedures.sql))
  * Implemented transaction boundaries (`TransferFunds`), batch updates with row-locking (`UpdateEmployeeBonus`), and interest crediting procedures.

---

### 🌱 Week 2: Spring Framework & Data JPA

#### 1. Spring Core & Maven
* **Exercise 1: XML Basic Wiring** ([pom.xml](file:///c:/storage/cognizant-nurture/Week2/Spring_Core_Maven/Exercise1_ConfiguringBasicSpringApp/pom.xml))
  * Demonstrates XML bean declaration inside application contexts to resolve dependency mappings via setter injection.
* **Exercise 2: Dependency Injection Models** ([pom.xml](file:///c:/storage/cognizant-nurture/Week2/Spring_Core_Maven/Exercise2_ImplementingDependencyInjection/pom.xml))
  * Compares XML-configured constructor injection vs setter injection models.
* **Exercise 4: Java Configuration Bean Wiring** ([pom.xml](file:///c:/storage/cognizant-nurture/Week2/Spring_Core_Maven/Exercise4_CreatingConfiguringMavenProject/pom.xml))
  * Migrates XML namespace declarations to type-safe Java configuration using `@Configuration` and `@Bean` definitions.

#### 2. Spring Data JPA
* **Exercise 1: Bootstrapped CRUD Demo** ([pom.xml](file:///c:/storage/cognizant-nurture/Week2/Spring_Data_JPA/Exercise1_SpringDataJPA_QuickExample/pom.xml))
  * Implements custom JPQL and derived query patterns (`findByDepartment`, `@Query` annotations) with Spring Boot, Spring Data JPA, and in-memory H2.
* **Exercise 2: JPA vs. Hibernate vs. Spring Data JPA** ([JPA_vs_Hibernate_vs_SpringDataJPA.java](file:///c:/storage/cognizant-nurture/Week2/Spring_Data_JPA/Exercise2_JPA_Hibernate_SpringDataJPA_Differences/JPA_vs_Hibernate_vs_SpringDataJPA.java))
  * Side-by-side working comparison of raw JPA API (`EntityManager`), Hibernate API (`Session`), and Spring Data JPA (`JpaRepository`) mapping the same entity.

---

### 🕸️ Week 3: Spring Web & Core Integration

This week focuses on building RESTful Web Services using Spring Boot, integrating XML Bean Contexts, and securing endpoints using Spring Security with JWT.

* **handson1-Create-Spring-Web-Project** ([spring-learn](file:///c:/storage/cognizant-nurture/Week3/handson1-Create-Spring-Web-Project/spring-learn)):
  * Configures a basic Spring Boot web application, verifies configuration using `@SpringBootApplication`, and adds SLF4J logging.
* **handson4-Load-Country-From-XML** ([spring-learn](file:///c:/storage/cognizant-nurture/Week3/handson4-Load-Country-From-XML/spring-learn)):
  * Uses `ClassPathXmlApplicationContext` inside the application main to load standard bean definition files (`country.xml`) representing country properties (`code`, `name`).
* **handson5-Hello-World-REST-Service** ([spring-learn](file:///c:/storage/cognizant-nurture/Week3/handson5-Hello-World-REST-Service/spring-learn)):
  * Implements the first REST endpoint `/hello` returning standard text using `@RestController` and `@GetMapping`.
* **handson6-REST-Country-Web-Service** ([spring-learn](file:///c:/storage/cognizant-nurture/Week3/handson6-REST-Country-Web-Service/spring-learn)):
  * Connects XML parsing with REST APIs: Exposes a `/country` endpoint that retrieves the bean mapped from `country.xml` and returns it as a JSON payload.
* **handson7-REST-Get-Country-By-Code** ([spring-learn](file:///c:/storage/cognizant-nurture/Week3/handson7-REST-Get-Country-By-Code/spring-learn)):
  * Adds `CountryService` which extracts a list of countries from XML. Implements dynamic parameter lookup: `GET /countries/{code}` queries the list to locate matches.
* **handson8-Create-Authentication-Service-Returns-JWT** ([spring-learn](file:///c:/storage/cognizant-nurture/Week3/handson8-Create-Authentication-Service-Returns-JWT/spring-learn)):
  * Sets up JWT utilities (`JwtUtil`) using the `io.jsonwebtoken` library. Exposes `GET /authenticate` which decodes Basic Credentials and generates a signed JWT payload.
* **handson9-Read-Authorization-Header** ([spring-learn](file:///c:/storage/cognizant-nurture/Week3/handson9-Read-Authorization-Header/spring-learn)):
  * Introduces Spring Security configuration (`SecurityConfig`) to restrict access. Endpoint `/authenticate` is accessible to users with roles `USER` and `ADMIN`, while `/countries/**` is locked down to `USER` roles.
* **handson10-Generate-JWT-Token** ([spring-learn](file:///c:/storage/cognizant-nurture/Week3/handson10-Generate-JWT-Token/spring-learn)):
  * Consolidates authentication, authorization roles, logging, and token generation into a secure, production-like REST API.

---

### ☁️ Week 4: Microservices with Spring Boot

* **Project Location**: [Creating-Microservices-for-account-and-loan](file:///c:/storage/cognizant-nurture/Week4/Creating-Microservices-for-account-and-loan)
* **Objective**: Design and run multiple decoupled RESTful microservices representing separate banking domains (Accounts & Loans) on isolated network ports.
* **Account Microservice** ([account](file:///c:/storage/cognizant-nurture/Week4/Creating-Microservices-for-account-and-loan/account)):
  * **Configuration**: Runs on default port `8080` with application name `account`.
  * **Model**: `Account` model consisting of properties: `number` (String), `type` (String), and `balance` (double).
  * **Endpoint**: Exposes `GET /accounts/{number}` through [AccountController.java](file:///c:/storage/cognizant-nurture/Week4/Creating-Microservices-for-account-and-loan/account/src/main/java/com/cognizant/account/controller/AccountController.java) returning a mock savings account.
* **Loan Microservice** ([loan](file:///c:/storage/cognizant-nurture/Week4/Creating-Microservices-for-account-and-loan/loan)):
  * **Configuration**: Runs on custom port `8081` with application name `loan` to avoid conflict.
  * **Model**: `Loan` model consisting of properties: `number` (String), `type` (String), `loan` (double), `emi` (double), and `tenure` (int).
  * **Endpoint**: Exposes `GET /loans/{number}` through [LoanController.java](file:///c:/storage/cognizant-nurture/Week4/Creating-Microservices-for-account-and-loan/loan/src/main/java/com/cognizant/loan/controller/LoanController.java) returning a mock car loan.

---

### ⚛️ Week 5: React Frontend Hands-On

This week introduces modern frontend development using React, covering core concepts such as components, JSX, event handling, lifecycle behavior, and component-based UI design.

* **Ticket Booking App** ([ticketbookingapp](Week5/HandsOn-12-React-ticketbookingapp/ticketbookingapp))
  * A React-based booking experience built with `react-scripts` and React 19.
  * Run from the app folder using `npm install` and `npm start`.
* **Cohort Tracker** ([cohort-tracker](Week5/HandsOn-5-React/cohort-tracker))
  * A practice React app for component-based UI development and state-driven views.
* **Additional React Exercises**
  * Includes setup, component, lifecycle, ES6, JSX, and event-handling hands-on projects under [Week5](Week5).

---

## 🚀 Execution & Verification Instructions

### Running Java Console Applications (Week 1 DSA & Patterns)
Compile and execute directly using your terminal:

```bash
# Example: Running the Singleton Logger Demo
cd Week1/Design_Patterns_and_Principles/Exercise1_SingletonPattern
javac SingletonPatternDemo.java
java SingletonPatternDemo

# Example: Running the E-Commerce Search Demo
cd ../../Algorithms_Data_Structure/Exercise2_EcommercePlatformSearch
javac EcommercePlatformSearch.java
java EcommercePlatformSearch
```

### Running PL/SQL Script Files
Load the `.sql` scripts into your SQL Developer, SQLPlus, or Oracle CLI client:

```sql
-- Connect to your Oracle database instance and execute the script
@c:/storage/cognizant-nurture/Week1/PLSQL_Exercises/Exercise1_ControlStructures/ControlStructures.sql
@c:/storage/cognizant-nurture/Week1/PLSQL_Exercises/Exercise3_StoredProcedures/StoredProcedures.sql
```
*Note: Make sure server output is enabled using `SET SERVEROUTPUT ON SIZE UNLIMITED;` before execution.*

### Running Week 2 Spring Boot Applications
Run Maven commands inside the specific project folder:

```bash
# Example: Building and running the Spring Data JPA Quick Example
cd Week2/Spring_Data_JPA/Exercise1_SpringDataJPA_QuickExample
mvn clean compile
mvn spring-boot:run
```

### Running Week 3 Spring Boot REST & JWT Services
Each project runs on port `8083` (configured via `application.properties`). To run any project:

```bash
# Navigate to the chosen handson folder
cd "Week3/handson10-Generate-JWT-Token/spring-learn"
./mvnw spring-boot:run
```

#### Verification Endpoints (Week 3, Port 8083):
* **Hello World**: `GET http://localhost:8083/hello`
* **Get Country India**: `GET http://localhost:8083/country`
* **Get Country by Code**: `GET http://localhost:8083/countries/IN`
* **JWT Authenticate**: `GET http://localhost:8083/authenticate`
  * *Authentication requires Basic Auth headers. Header value format: `Authorization: Basic dXNlcjpwd2Q=` (Base64 encoding of `user:pwd` or `admin:pwd`).*

### Running Week 4 Spring Boot Microservices
Run each service in a separate terminal window:

```bash
# Run Account Microservice (runs on port 8080)
cd "Week4/Creating-Microservices-for-account-and-loan/account"
./mvnw spring-boot:run

# Run Loan Microservice (runs on port 8081)
cd "Week4/Creating-Microservices-for-account-and-loan/loan"
./mvnw spring-boot:run
```

#### Verification Endpoints (Week 4):
* **Account Info**: `GET http://localhost:8080/accounts/12345`
* **Loan Info**: `GET http://localhost:8081/loans/98765`

### Running Week 5 React Applications
Navigate into the app folder before starting it:

```bash
# Ticket Booking App
cd "Week5/HandsOn-12-React-ticketbookingapp/ticketbookingapp"
npm install
npm start

# Cohort Tracker App
cd "Week5/HandsOn-5-React/cohort-tracker"
npm install
npm start
```

> If you run the command from the parent folder, make sure to target the correct subfolder because the React app’s `package.json` is inside the project directory.

---

## 📈 Learning Outcomes & Takeaways

1. **Algorithm Tradeoffs**: Understood the necessity of ordering keys for binary searches and cache layouts for scaling recursive sub-problems.
2. **Object Lifecycle Management**: Learned how to construct robust, thread-safe global managers (Singleton) and delegate initialization choices to dynamic sub-factories.
3. **Database Consistency**: Written ACID-compliant PL/SQL procedures, emphasizing transaction checkpoints (`ROLLBACK`/`COMMIT`) and active entity row-locking (`FOR UPDATE`).
4. **Spring Core Principles**: Understood the transition of Dependency Injection styles from strict XML beans, to constructor requirements, and finally to programmatic configuration.
5. **Modern ORM Architecture**: Learned to write clean database layers using Spring Data JPA, reducing structural boilerplate while recognizing Hibernate persistence caches underneath.
6. **Spring XML Configuration & Web**: Configured and initialized a Spring Boot application utilizing Maven, loaded XML bean configurations via `ClassPathXmlApplicationContext`, and integrated application lifecycle logging using SLF4J.
7. **API Security (JWT & Basic Auth)**: Gained proficiency in encoding credentials, generating signed cryptographic tokens (JWT), and using Spring Security Filters to authenticate API endpoints and enforce role authorization.
8. **Microservices & Decoupled Architecture**: Designed and built independent RESTful microservices with Spring Boot, configuring custom service ports to isolate business domains and prevent port collisions in a localized dev environment.

*Solutions submitted as part of the Cognizant Digital Nurture Java FSE program.*