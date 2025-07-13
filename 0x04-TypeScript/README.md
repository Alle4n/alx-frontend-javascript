## 📘 TypeScript Curriculum Project

This project contains multiple tasks designed to help understand and practice core TypeScript concepts including interfaces, classes, type declarations, namespaces, type branding, and integration with JavaScript libraries.

---

## 📁 Project Structure

```
.
├── task_0/               # Intro to interfaces, DOM manipulation
├── task_1/               # Interfaces and extension
├── task_2/               # Class constructors, interface typing, function interfaces
├── task_3/               # Ambient declaration files and interop with JS
├── task_4/               # Namespaces, declaration merging, subject classes
├── task_5/               # Type branding with Major/Minor credits
├── package.json
├── tsconfig.json
└── webpack.config.js
```

---

## 🧩 Tasks Overview

### ✅ `task_0`: Interfaces and DOM Manipulation

* Created a `Student` interface with properties: `firstName`, `lastName`, `age`, and `location`.
* Rendered a table in vanilla JS with the student data.
* Ensured TypeScript types and ESLint configuration pass without errors.

---

### ✅ `task_1`: Building and Extending Interfaces

* Defined a `Teacher` interface with readonly fields and an index signature to allow custom properties like `contract`.
* Extended `Teacher` into a `Directors` interface with a `numberOfReports` property.

---

### ✅ `task_2`: Class Implementation and Employee Factory

* Wrote a `StudentClass` with methods `workOnHomework` and `displayName`.
* Created `TeacherInterface` and `DirectorInterface` and implemented them in `Teacher` and `Director` classes.
* Built a factory function `createEmployee(salary)` that returns either a `Teacher` or `Director`.
* Used type predicates to determine type at runtime.
* Implemented `teachClass(todayClass: Subjects)` with string literal types `"Math"` and `"History"`.

---

### ✅ `task_3`: Type Declarations and Ambient Files

* Defined `RowID` and `RowElement` in an `interface.ts` file.
* Created an ambient declaration file `crud.d.ts` for untyped JS library `crud.js`.
* Used `/// <reference path="...">` to link declaration files.
* Typed and executed `insertRow`, `updateRow`, and `deleteRow` operations in `main.ts`.

---

### ✅ `task_4`: Namespaces and Declaration Merging

* Used TypeScript `namespace` to define a `Subjects` namespace.
* Defined a `Teacher` interface and extended it with optional experience fields in Cpp, Java, and React modules.
* Built subject classes (`Cpp`, `Java`, `React`) that extend a common `Subject` base class and override methods.
* Used `main.ts` to instantiate each subject, set a teacher, and log behavior based on experience.

---

### ✅ `task_5`: Type Branding with Interfaces

* Created `MajorCredits` and `MinorCredits` interfaces with branded types using a `__brand` field.
* Implemented `sumMajorCredits()` and `sumMinorCredits()` functions to add subject credit values and return the appropriate branded types.

---

## ⚙️ Development

### 📦 Installation

```bash
npm install
```

### 🔨 Build

Use TypeScript compiler or webpack (if configured):

```bash
# Compile all tasks
npx tsc

# OR for individual tasks with webpack (if configured)
npm run build
```

---

## 📌 Requirements

* Node.js
* TypeScript (`^3.6.4`)
* ESLint with `@typescript-eslint` parser
* Webpack (optional)

---

## 📁 `.gitignore`

Place a `.gitignore` file in the root and inside each `task_X/` directory (if needed):

```
node_modules/
dist/
*.tsbuildinfo
package-lock.json
```

---

## 📚 Topics Covered

* TypeScript Interfaces & Classes
* Declaration Merging
* Type Branding & Nominal Types
* Namespaces
* Type Predicates
* Interfacing with Untyped JavaScript
* DOM Manipulation
* ESLint & tsconfig Configuration

---

## 🧑‍💻 Author

Allen Najjuma
GitHub: [@Alle4n](https://github.com/Alle4n/alx-frontend-javascript)
