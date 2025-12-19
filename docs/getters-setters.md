Here is a comparison table to help you distinguish between the declaration and the usage of **Getters** and **Setters**.

It’s important to remember that while they look like functions when you write them, they behave like **properties** when you use them (meaning no parentheses `()` are needed).

### Getters and Setters: Declaration vs. Usage

| Feature    | How to Declare (Inside Object)  | How to Use (Outside Object)      | Description                                                                     |
| ---------- | ------------------------------- | -------------------------------- | ------------------------------------------------------------------------------- |
| **Getter** | `get propertyName() { ... }`    | `console.log(obj.propertyName);` | **Reads** a value. It computes or formats data before returning it.             |
| **Setter** | `set propertyName(val) { ... }` | `obj.propertyName = value;`      | **Writes** a value. It allows you to validate or change data before storing it. |

---

### Practical Code Example

Using the logic from your **Meal Maker** and **Course Tracker** challenges:

```javascript
const course = {
  _status: "Incomplete", // The "hidden" backing property

  // DECLARING the Getter
  get status() {
    return `The course is currently: ${this._status}`;
  },

  // DECLARING the Setter
  set status(newStatus) {
    if (typeof newStatus === "string") {
      this._status = newStatus;
    } else {
      console.log("Error: Status must be a string!");
    }
  },
};

// USING the Setter (Assignment)
course.status = "Complete"; // Note: No parentheses used here

// USING the Getter (Accessing)
console.log(course.status); // Output: "The course is currently: Complete"
```

---

### Key Differences to Remember

- **Syntax:** Use the `get` and `set` keywords before the method name.
- **Property Access:** You **assign** a value to a setter using the equals sign (`=`), and you **access** a getter like a regular variable. If you try to call them like functions (e.g., `course.status()`), JavaScript will throw an error.
- **The Underscore (`_`):** We use `_status` inside the object to prevent an "infinite loop." If the setter tried to set `this.status`, it would call itself again and again! The underscore tells other developers: "Please don't touch this directly; use the getter/setter instead."
