In the world of software development, **Seeding** is a crucial step for setting up an application's environment. Here is a breakdown of what it is and how your code implements it.

---

## What is Data Seeding?

<img src="/docs/images/data-seeding.png" width="350px">

**Seeding** is the process of providing an initial set of data to a program or a database. Think of it like "planting seeds" in a garden so that there is something to look at and work with as soon as the application starts.

Without seeding, a developer would have to manually input data through the user interface every single time they refresh their browser or restart their server.

### Why do we use Seeding?

1. **Testing:** It allows you to test features (like your `percentageComplete` getter) with realistic data.
2. **Development:** It helps you design the layout of your website without having to manually type in 10 topics every time.
3. **Demonstration:** When showing your project to an interviewer, you want the app to look "full" and functional immediately.

---

## How it works in your code

In your JavaScript project, you are using a **Bulk Loading** technique to seed your `myBootcamp` object.

Instead of writing `myBootcamp.addTopic(...)` ten different times, you store your data in an array (the "Seed Data") and use a loop to "plant" that data into your object.

### The Example

```javascript
/** * SEED DATA:
 * An array of arrays containing the initial information for the program.
 */
const curriculum = [
  ["Welcome to Learn JavaScript", "Beginner"],
  ["Introduction", "Beginner"],
  ["Conditionals", "Intermediate"],
  ["Functions", "Intermediate"],
  ["Scope", "Advanced"],
  ["Arrays", "Intermediate"],
  ["Loops", "Intermediate"],
  ["Iterators", "Advanced"],
  ["Objects", "Advanced"],
  ["Next Steps", "Beginner"],
];

/**
 * THE SEEDING PROCESS:
 * We iterate through the curriculum array. For each 'item' (which is an inner array),
 * we call the addTopic method using the index [0] for the title and [1] for difficulty.
 */
curriculum.forEach((item) => myBootcamp.addTopic(item[0], item[1]));
```

---

## Terminology Check

| Term          | Analogy              | Meaning in Code                |
| ------------- | -------------------- | ------------------------------ |
| **Seed Data** | The physical seeds.  | The `curriculum` array.        |
| **Seeder**    | The person planting. | The `.forEach()` loop logic.   |
| **Target**    | The soil.            | The `myBootcamp.topics` array. |

### Pro-Tip for your Interview

If an interviewer asks how you handled the initial data, you can say:

> _"I created a **seed array** containing the curriculum topics and then used a **forEach loop** to **bulk-load** that data into my bootcamp object. This kept my initialization logic **DRY** (Don't Repeat Yourself) and easy to maintain."_

---
