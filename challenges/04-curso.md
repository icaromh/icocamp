# 🎓 Challenge: Course Progress Tracker

### The Scenario

You are building the logic for a learning platform. You need an object that stores course topics, tracks completion, and calculates the overall progress percentage dynamically. To keep your code clean, you will use a **Factory Function** to generate your topic objects.

## 🏗️ Learning Objectives

- Implementing **Factory Functions** to standardize object creation.
- Manipulating **Arrays of Objects** (CRUD operations).
- Understanding **Object References** (updating values by reference).
- Using **Getters** for dynamic data calculation.

## 📝 Tasks

### 1. The Factory Function

Create a function `topicFactory(title, difficulty)` that returns an object with:

- `title`: The name of the topic.
- `difficulty`: The level (Beginner, Intermediate, or Advanced).
- `isCompleted`: Set to `false` by default.

### 2. The Data Structure

Create an object `myBootcamp`. It should have:

- `name`: (String). Eg: `"PrincessCamp"`
- `topics`: An array to hold the objects created by your factory.

### 3. The Methods

- **`addTopic(title, difficulty)`**: **[CREATE]** Calls the factory function and pushes the new object to the `topics` array.
- **`listAll()`**: **[READ]** Iterates through the array and prints:

  - `- [x] Topic Name (Difficulty)`
  - `- [ ] Topic Name (Difficulty)`

- **`markAsComplete(topicTitle)`**: **[UPDATE]** Finds the topic by title and sets `isCompleted` to `true`.
- **`removeTopic(topicTitle)`**: **[DELETE]** Removes the topic from the array.

### 4. The Getter

- **`percentageComplete`**: Calculates: `(Count of Completed / Total Topics) * 100`.
- _Output Example:_ `40% complete`

## 📊 Data to Populate

Use your `addTopic` method to add the following curriculum:

| Topic Name                  | Difficulty   |
| --------------------------- | ------------ |
| Welcome to Learn JavaScript | Beginner     |
| Introduction                | Beginner     |
| Conditionals                | Intermediate |
| Functions                   | Intermediate |
| Scope                       | Advanced     |
| Arrays                      | Intermediate |
| Loops                       | Intermediate |
| Iterators                   | Advanced     |
| Objects                     | Advanced     |
| Next Steps                  | Beginner     |

## 💡 Hints & Logic (Click to expand)

<details>
<summary>View Logic Hints</summary>

### The Factory Function

Using ES6 property shorthand makes the factory very concise:

```javascript
const topicFactory = (title, difficulty) => ({
  title,
  difficulty,
  isCompleted: false,
});
```

### Finding vs. Filtering

- Use **`.find()`** when you want to **Update** a specific object (it returns a reference).
- Use **`.filter()`** when you want to **Delete** or **Count** (it returns a new array).

### The Getter Logic

Always check if the array is empty first to avoid `NaN` errors:

```javascript
if (this.topics.length === 0) return "0% complete";
```

</details>

## 🚀 Testing Your Code

```javascript
// 1. Setup
myBootcamp.addTopic("Functions", "Intermediate");
myBootcamp.addTopic("Scope", "Advanced");

// 2. Interact
myBootcamp.markAsComplete("Functions");

// 3. Verify
myBootcamp.listAll();
// Should show: - [x] Functions (Intermediate)
//              - [ ] Scope (Advanced)

console.log(myBootcamp.percentageComplete); // Should show: "50% complete"
```
