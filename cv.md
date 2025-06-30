# 🧑‍💻 Maxim Zabaluev

## 📨 Contacts:

- [telegram](https://t.me/maksberve)
- [email](maxim_zabaluev@icloud.com)

## 🧑‍💻 Short Personal Introduction (for RSSchool Stage 0)

I'm a passionate and self-motivated person who is actively learning software development with a focus on fullstack web technologies. My main areas of interest are Angular for frontend and NestJS for backend development. I'm currently deepening my knowledge in JavaScript, TypeScript, REST APIs, databases, and modern frameworks to become a well-rounded developer.

My goal is to become a skilled fullstack developer capable of building scalable and efficient web applications from scratch. I aim to gain hands-on experience working in real projects, collaborating with other developers, and constantly improving my technical and soft skills.

### My priorities:

- Mastering core concepts of both frontend and backend development.
- Writing clean, maintainable, and testable code.
- Learning how to read documentation effectively and solve complex problems.
- Participating in team projects and learning how to work in a professional environment.

### My strengths:

- Strong desire to learn and improve every day.
- Disciplined and responsible.
- Analytical thinking and problem-solving mindset.
- Patient and persistent when facing challenges.
- Comfortable with self-study and online learning platforms.

Although I don't have official work experience in IT yet, I've been consistently practicing programming through personal projects, coding exercises, and online courses. I'm confident that my dedication, enthusiasm, and ability to learn quickly will help me grow into a valuable member of any development team in the future.

## 💼 Skills

### 🧠 Programming Languages:

- JavaScript (ES6+) – Confident use in development; understand closures, this, prototypes, asynchronous programming.
- TypeScript – Experience using in Angular projects; familiar with type system, interfaces, decorators.
- HTML5 / CSS3 / SCSS – Can create semantic, accessible, and cross-browser compatible layouts.

### ⚙️ Frameworks & Libraries:

- Angular – Experience building SPA applications; familiar with reactive programming (RxJS), directives, pipes, forms, routing, services.
- NestJS – Learning backend development; familiar with modules, controllers, providers, DTOs, Swagger, and REST API creation.
- Node.js – Understand core concepts of server-side development; experience with file systems, Express, and npm.
- PrimeNG – Using UI components in Angular apps.

### 🗄 Databases:

- MongoDB – Familiar with NoSQL approach; working with Mongoose.
- PostgreSQL / MySQL – Basic level; understanding of SQL queries, relations, transactions.
- Prisma ORM – Actively used in NestJS projects for database interactions.

### 🛠 Development Tools:

- Git / GitHub – Confident with branches, commits, pull requests; follow best practices for clean commit history.
- VS Code – Primary code editor.
- Webpack / npm / Node.js CLI – Understanding of bundlers and package management.
- Docker – Basic knowledge of running and configuring containers.
- HTTP / REST / Postman / Swagger – Know how to test APIs and understand request/response structure.

### 📐 Methodologies & Practices:

- Responsive Web Design – Capable of creating adaptive layouts.
- BEM – Follow naming conventions for structured CSS classes.
- Clean Code / DRY / KISS – Strive to write readable and maintainable code.
- OOP / FP – Understanding of object-oriented and functional programming principles.

### 🧪 Testing:

- Jest / Supertest / Unit Testing – Familiar with testing backend logic.
- E2E Testing – Beginner level.

### 📦 Other:

- Agile / Scrum – Basic understanding of methodology and terminology.
- Figma – Able to read design mockups and implement them in code.

## 💻 Code Example

```ts
const createIterator = (array = []) => {
  let index = 0;

  return {
    next() {
      return {
        value: array[index],
        done:
          index >= array.length
            ? ((index = array.length), true)
            : (index++, false),
      };
    },
    get index() {
      return index;
    },
  };
};
```
