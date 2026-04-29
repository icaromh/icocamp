/**
 * Challenge: Course Progress Tracker (Final Solution)
 * Features: Factory Functions, CRUD operations, and Getters.
 */

// 1. THE FACTORY FUNCTION
// Standardizes the creation of topic objects
const topicFactory = (title, difficulty) => {
  return {
    title, // ES6 Shorthand for title: title
    difficulty, // ES6 Shorthand for difficulty: difficulty
    isCompleted: false,
  };
};

// 2. THE BOOTCAMP OBJECT
const myBootcamp = {
  name: "PrincessCamp",
  topics: [],

  // [CREATE]
  addTopic(title, difficulty) {
    const newTopic = topicFactory(title, difficulty);
    this.topics.push(newTopic);
  },

  // [READ]
  listAll() {
    console.log(`--- ${this.name} Curriculum ---`);
    this.topics.forEach((topic) => {
      const status = topic.isCompleted ? "x" : " ";
      console.log(`- [${status}] ${topic.title} (${topic.difficulty})`);
    });
  },

  // [UPDATE]
  markAsComplete(topicTitle) {
    const topic = this.topics.find((t) => t.title === topicTitle);
    if (topic) {
      topic.isCompleted = true;
    } else {
      console.log(`Error: "${topicTitle}" not found.`);
    }
  },

  // [UPDATE]
  markAsIncomplete(topicTitle) {
    const topic = this.topics.find((t) => t.title === topicTitle);
    if (topic) {
      topic.isCompleted = false;
    }
  },

  // [DELETE]
  removeTopic(topicTitle) {
    // Re-assign the array to everything EXCEPT the matching title
    this.topics = this.topics.filter((t) => t.title !== topicTitle);
  },

  // [GETTER]
  get percentageComplete() {
    const total = this.topics.length;
    if (total === 0) return "0% complete";

    // Use .filter() to find the length of finished tasks
    const completed = this.topics.filter((t) => t.isCompleted).length;
    const percentage = (completed / total) * 100;

    return `${Math.round(percentage)}% complete`;
  },
};

// --- 3. POPULATING DATA ---

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

// Loop through the data to add it to our object
curriculum.forEach((item) => myBootcamp.addTopic(item[0], item[1]));

// --- 4. TESTING ---

// Mark some as complete
myBootcamp.markAsComplete("Welcome to Learn JavaScript");
myBootcamp.markAsComplete("Introduction");
myBootcamp.markAsComplete("Conditionals");
myBootcamp.markAsComplete("Functions");

// Remove "Next Steps" to test delete functionality
myBootcamp.removeTopic("Next Steps");

// Final Printout
myBootcamp.listAll();
console.log("\n--- Statistics ---");
console.log(myBootcamp.percentageComplete);
// Since 4 out of 9 are done, it should show: 44% complete
