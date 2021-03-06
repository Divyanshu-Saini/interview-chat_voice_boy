db.aptiqas.find({})

db.aptiqas.insertMany([{
    qid: 'QA1',
    question: 'MEAN stands for?',
    ans1: 'MongoDB,Express',
    ans2: 'React ,Node.js',
    ans3: 'React,AngularJs',
    c_ans: 'MongoDB,Express,AngularJs,Node.js'
}, {
    qid: 'QA2',
    question: 'Which language is MongoDB written in?',
    ans1: 'C',
    ans2: 'phyton',
    ans3: 'JavaScript',
    c_ans: 'C++'
}, {
    qid: 'QA3',
    question: 'MongoDB is ________.',
    ans1: 'Object-oriented DBMS',
    ans2: 'Key-value store',
    ans3: 'RDBMS',
    c_ans: 'Document-oriented DBMS'
}, {
    qid: 'QA4',
    question: 'What type of web application can built using Express JS?',
    ans1: 'single-page applications',
    ans2: 'multi-page applications',
    ans3: 'web applications',
    c_ans: 'All of the above'
}])

db.interviewedusers.find({})

db.interqas.find({})

db.interqas.insertMany([{
    qid: 'QA1',
    question: 'What does MVC Stand for?',
    ans: 'MVC stands for Model, View, Controller'
}, {
    qid: 'QA2',
    question: 'What does Model represent in MVC?',
    ans: 'The model represents the data'
}, {
    qid: 'QA3',
    question: 'What does View represent in MVC?',
    ans: 'View represents user interface'
}, {
    qid: 'QA4',
    question: 'What is Controller in MVC?',
    ans: 'The controller is the decision maker'
}])

db.interqas.aggregate(
    { $sample: { size: 4 } })
    
db.interqas.insertMany([{
    qid: 'QA5',
    question: 'What is MongoDB?',
    ans: ' Mongo DB is a NoSQl, document oriented database'
}, {
    qid: 'QA6',
    question: 'What are the core operations of mongodb?',
    ans: 'The core operation are Create, reade , update and delete'
}, {
    qid: 'QA7',
    question: 'What type of web application can built using Express JS?',
    ans: 'Expressjs can build single page as well as multipage web applications'
}, {
    qid: 'QA8',
    question: 'Where Not to Use Node.js?',
    ans: 'Node.js should not be used for CPU intensive applications.'
},{
    qid: 'QA9',
    question: 'What does MEAN stand for?',
    ans: 'MEAN stand for MongoDB, Express, Angular, Node'
},{
    qid: 'QA10',
    question: 'Where Not to Use Node.js??',
    ans: 'Node.js should not be used for CPU intensive applications.'
}])
