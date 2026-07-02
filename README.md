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
│   └── spring-learn/
│       ├── pom.xml
│       └── src/ (Spring Web initialization project with SLF4J logging)
│
└── .gitignore
```

---

## 🛠️ Technology Stack & Tooling

To run and verify the exercises in this repository, you will need:
* **Java Development Kit (JDK 11 or higher)** (Java 11 or 17 recommended)
* **Apache Maven 3.6+** (for building Week 2 Spring projects)
* **Oracle Database (11g/12c/19c/21c Express Edition)** or an Oracle SQL-compliant interpreter (for PL/SQL exercises)
* **H2 Database engine** (embedded automatically in the Spring Data JPA project)

---

## 📌 Module Highlights & Implementation Details

### ⚡ Week 1: Algorithms, Design Patterns, and PL/SQL

#### 1. Algorithms & Data Structures
* **Exercise 2: E-Commerce Platform Search Optimization** ([EcommercePlatformSearch.java](file:///c:/storage/cognizant-nurture/Week1/Algorithms_Data_Structure/Exercise2_EcommercePlatformSearch/EcommercePlatformSearch.java))
  * **Objective**: Contrast Linear Search and Binary Search performance.
  * **Implementation**: Uses a custom `Product` class with `id`, `name`, `category`, and `price`. Includes a case-insensitive name-based linear search ($O(n)$) and an iterative ID-based binary search ($O(\log n)$) on sorted copies of the array. Handles empty/null inputs gracefully.
* **Exercise 7: Financial Forecasting** ([FinancialForecasting.java](file:///c:/storage/cognizant-nurture/Week1/Algorithms_Data_Structure/Exercise7_FinancialForecasting/FinancialForecasting.java))
  * **Objective**: Compound-interest growth calculations using recursion and memoization.
  * **Implementation**: Implements plain recursion, memoized recursion using a `HashMap` cache to eliminate overlapping sub-problems, and a flat iterative approach to avoid stack overflow risks for large time horizons.

#### 2. Design Patterns & Principles
* **Exercise 1: Singleton Pattern Logger** ([SingletonPatternDemo.java](file:///c:/storage/cognizant-nurture/Week1/Design_Patterns_and_Principles/Exercise1_SingletonPattern/SingletonPatternDemo.java))
  * **Objective**: Implement a globally accessible, thread-safe logger service.
  * **Implementation**: Built a thread-safe `Logger` using **Double-Checked Locking (DCL)** and a `volatile` instance variable to guarantee memory visibility and prevent JVM instruction reordering. Validated thread-safety via concurrent worker thread simulation (`Thread.join()`).
* **Exercise 2: Factory Method Document System** ([FactoryMethodPatternDemo.java](file:///c:/storage/cognizant-nurture/Week1/Design_Patterns_and_Principles/Exercise2_FactoryMethodPattern/FactoryMethodPatternDemo.java))
  * **Objective**: Create a polymorphic Document Management System conforming to the Open/Closed Principle (OCP).
  * **Implementation**: Defined abstract `Document` products (`Word`, `Pdf`, `Excel`) and matching `DocumentCreator` classes. Shows how new formats (like `XmlDocument`) are added seamlessly without modifying any existing system classes.

#### 3. PL/SQL Database Programming
* **Exercise 1: Control Structures** ([ControlStructures.sql](file:///c:/storage/cognizant-nurture/Week1/PLSQL_Exercises/Exercise1_ControlStructures/ControlStructures.sql))
  * **Objective**: Implement conditional routing and looping patterns in PL/SQL.
  * **Implementation**: 
    * `IF-ELSIF-ELSE`: Dynamic age categorization (Young/Middle-Aged/Senior) and preferred interest rate assignment.
    * `CASE`: Credit score checks (Bands: $\ge 750$, $700\text{-}749$, etc.) to determine loan eligibility.
    * `LOOP` & `WHILE LOOP`: Iterative product discount scaling and compound growth balance doubling simulations.
* **Exercise 3: Stored Procedures** ([StoredProcedures.sql](file:///c:/storage/cognizant-nurture/Week1/PLSQL_Exercises/Exercise3_StoredProcedures/StoredProcedures.sql))
  * **Objective**: Build robust stored procedures handling transactions, cursors, and custom exceptions.
  * **Implementation**:
    * `ProcessMonthlyInterest`: Auto-credits monthly interest on accounts; validates freezing limits.
    * `UpdateEmployeeBonus`: Adjusts salaries by department percentage caps using `FOR UPDATE` cursor locking.
    * `TransferFunds`: Fully ACID-compliant money transfer between accounts. Implements balance checks, regulatory minimums, double debits/credits, custom exception auditing, and log tables.

---

### 🌱 Week 2: Spring Framework & Data JPA

#### 1. Spring Core & Maven
* **Exercise 1: XML Basic Wiring** ([pom.xml](file:///c:/storage/cognizant-nurture/Week2/Spring_Core_Maven/Exercise1_ConfiguringBasicSpringApp/pom.xml))
  * Uses XML-based Spring ApplicationContext config to wire `BookRepositoryImpl` and `BookServiceImpl` using Setter Injection.
* **Exercise 2: Dependency Injection Models** ([pom.xml](file:///c:/storage/cognizant-nurture/Week2/Spring_Core_Maven/Exercise2_ImplementingDependencyInjection/pom.xml))
  * Demonstrates the structural differences between Setter-based injection and Constructor-based injection in Spring Core.
* **Exercise 4: Java Configuration Bean Wiring** ([pom.xml](file:///c:/storage/cognizant-nurture/Week2/Spring_Core_Maven/Exercise4_CreatingConfiguringMavenProject/pom.xml))
  * Migrates from XML namespaces to type-safe Java configuration using `@Configuration` and `@Bean` definitions in an application context.

#### 2. Spring Data JPA
* **Exercise 1: Bootstrapped CRUD Demo** ([pom.xml](file:///c:/storage/cognizant-nurture/Week2/Spring_Data_JPA/Exercise1_SpringDataJPA_QuickExample/pom.xml))
  * **Objective**: Rapid database development using Spring Boot and JPA repository interfaces.
  * **Implementation**: Configures an in-memory H2 database populated by `data.sql` on startup. Implements derived queries (e.g. `findByDepartment`, `findByFirstNameContainingIgnoreCase`) and custom JPQL queries using `@Query`. Runs a complete lifecycle sequence (Save, Read, Filter, Update, Delete) via a `CommandLineRunner` hook.
* **Exercise 2: JPA vs. Hibernate vs. Spring Data JPA** ([JPA_vs_Hibernate_vs_SpringDataJPA.java](file:///c:/storage/cognizant-nurture/Week2/Spring_Data_JPA/Exercise2_JPA_Hibernate_SpringDataJPA_Differences/JPA_vs_Hibernate_vs_SpringDataJPA.java))
  * **Objective**: Demystify differences between Specification (JPA), Provider (Hibernate), and Abstraction Layer (Spring Data JPA).
  * **Implementation**: Offers side-by-side working code blocks of raw JPA API (`EntityManager`), Hibernate Native API (`Session`), and Spring Data JPA (`JpaRepository`) mapping the same entity. Accompanied by a detailed conceptual overview [README](file:///c:/storage/cognizant-nurture/Week2/Spring_Data_JPA/Exercise2_JPA_Hibernate_SpringDataJPA_Differences/README.md).

---

## 🕸️ Week 3: Spring Web

#### 1. Spring Web Basics
* **Exercise 1: Spring Web Project using Maven** ([pom.xml](file:///c:/storage/cognizant-nurture/Week3/spring-learn/pom.xml))
  * **Objective**: Configure and bootstrap a Spring Boot application with Spring Web MVC dependencies using Maven.
  * **Implementation**: Initialized a Spring Boot application (`spring-learn`) utilizing Java 17, including `spring-boot-starter-webmvc` and devtools. Configured SLF4J `LOGGER` in [SpringLearnApplication.java](file:///c:/storage/cognizant-nurture/Week3/spring-learn/src/main/java/com/cognizant/spring_learn/SpringLearnApplication.java) to log application startup lifecycle phases ("Application Started" and "Application Finished Starting"). Verified build lifecycle and successful context load tests.

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
*Note: Make sure your console has server output enabled (`SET SERVEROUTPUT ON SIZE UNLIMITED;` is already included at the top of both files).*

### Building and Running Spring Boot Maven Applications (Week 2 & 3)
Run Maven commands inside the specific project folder:

```bash
# Example: Building and running the Spring Data JPA Quick Example
cd Week2/Spring_Data_JPA/Exercise1_SpringDataJPA_QuickExample
mvn clean compile
mvn spring-boot:run

# Example: Running the Week 3 Spring Web Application
cd Week3/spring-learn
./mvnw spring-boot:run
```

Once running, you can connect to the H2 console to view database schemas and rows:
* **H2 Console URL**: `http://localhost:8080/h2-console`
* **JDBC URL**: `jdbc:h2:mem:employeedb`
* **Username**: `sa`
* **Password**: *(leave blank)*

---

## 📈 Learning Outcomes & Takeaways

1. **Algorithm Tradeoffs**: Understood the necessity of ordering keys for binary searches and cache layouts for scaling recursive sub-problems.
2. **Object Lifecycle Management**: Learned how to construct robust, thread-safe global managers (Singleton) and delegate initialization choices to dynamic sub-factories.
3. **Database Consistency**: Written ACID-compliant PL/SQL procedures, emphasizing transaction checkpoints (`ROLLBACK`/`COMMIT`) and active entity row-locking (`FOR UPDATE`).
4. **Spring Core Principles**: Understood the transition of Dependency Injection styles from strict XML beans, to constructor requirements, and finally to programmatic configuration.
5. **Modern ORM Architecture**: Learned to write clean database layers using Spring Data JPA, reducing structural boilerplate while recognizing Hibernate persistence caches underneath.
6. **Spring Web Bootstrapping**: Configured and initialized a Spring Boot Web MVC application utilizing Maven wrappers, handling custom packages and application lifecycle logging with SLF4J.

*Solutions submitted as part of the Cognizant Digital Nurture Java FSE program.*