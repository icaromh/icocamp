/*You are building the logic for a learning platform. You need an object that stores course 
topics, tracks completion, and calculates the overall progress percentage dynamically. 
To keep your code clean, you will use a Factory Function to generate your topic objects.
 */

/* PART 1: FACTORY FUNCTIONS
Create a function topicFactory(title, difficulty) that returns an object with: 
    - title: The name of the topic.
    - difficulty: The level (Beginner, Intermediate, or Advanced).
    - isCompleted: Set to false by default.
*/

function topicFactory(title, difficulty) {
    return {
        title: title,
        difficulty: difficulty,
        isCompleted: false
    };
}

const myBootcamp = {
    name: 'PrincessCamp',
    topics: [], //An array to hold the objects created by your factory.
    //METHODS
    addTopic: function (tittle, difficulty) {
        this.topics.push(topicFactory(tittle, difficulty));
    },
    listAll: function () {
        this.topics.forEach(element => {
            if (element['isCompleted']) {
                console.log(`[X] ${element['title']} (${element['difficulty']});`)
            } else {
                console.log(`[ ] ${element['title']} (${element['difficulty']});`)
            }
        });
    },
    markAsComplete: function (topicTitle) {
        this.topics.filter(obj => {
            if (obj['title'] === topicTitle) {
                obj['isCompleted'] = true;
            }
        })
    }
};

//adding the data :)
myBootcamp.addTopic('Welcome to Learn JavaScript', 'Begginer');
myBootcamp.addTopic('Introduction', 'Begginer');
myBootcamp.addTopic('Conditionals', 'Intermediate');
myBootcamp.addTopic('Functions', 'Intermediate');
myBootcamp.addTopic('Scope', 'Advanced');
myBootcamp.addTopic('Arrays ', 'Intermediate');
myBootcamp.addTopic('Loops ', 'Intermediate');
myBootcamp.addTopic('Iterators', 'Advanced');
myBootcamp.addTopic('Objects', 'Advanced');
myBootcamp.addTopic('Next steps', 'Begginer');

//listando o curso completo
myBootcamp.markAsComplete('Introduction');
myBootcamp.listAll();
