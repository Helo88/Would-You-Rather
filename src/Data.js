let users = [
   {  
      id: 'Inuyasha',
      name: 'Taisho Inuyasha',
      avatarURL:'/assets/images/inu3.jpg',
      bgUrl:'/assets/images/inuBg.jpg',
      answers: [
        {"8xf0y6ziyjabvozdd253nd": 'optionOne'},
        {"6ni6ok3ym7mf1p33lnez": 'optionOne'},
        {"am8ehyc8byjqgar0jgpub9": 'optionTwo'},
        {"loxhs1bqm25b708cmbf3g": 'optionTwo'}
      ],
      questions: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9']
    },
     {
      id: 'Sesshumaro',
      name: 'Taisho Sesshumaro',
      avatarURL: '/assets/images/sess.png',
      bgUrl:'/assets/images/sesss.png',
      answers: [
        {"vthrdm985a262al8qx3do": 'optionOne'},
        {"xj352vofupe1dqz9emx13r": 'optionTwo'}
      ],
      questions: ['loxhs1bqm25b708cmbf3g'],
    },
    {
      id: 'Kikyo',
      name: 'Kikyo',
      avatarURL: '/assets/images/kikk.png',
      bgUrl:'/assets/images/kikBg.png',
      answers: [
        {"xj352vofupe1dqz9emx13r": 'optionOne'},
        {"vthrdm985a262al8qx3do": 'optionTwo'},
        {"6ni6ok3ym7mf1p33lnez": 'optionOne'}
     ],
      questions: ['6ni6ok3ym7mf1p33lnez', 'xj352vofupe1dqz9emx13r'],
    },

    {  
      id: 'Sango',
      name: 'Sango',
      avatarURL:'/assets/images/sang.png',
      bgUrl:'/assets/images/sanBg.png',
      answers: [
        {"8xf0y6ziyjabvozdd253nd": 'optionOne'},
        {"6ni6ok3ym7mf1p33lnez": 'optionOne'},
        {"am8ehyc8byjqgar0jgpub9": 'optionTwo'},
        {"loxhs1bqm25b708cmbf3g": 'optionOne'}
      ],
      questions: ['vthrdm985a262al8qx3do']
    }
]
  
  let questions = [
     {
      id: '8xf0y6ziyjabvozdd253nd',
      author: 'Inuyasha',
      timestamp: 1467166872634,
      optionOne: {
        votes: ['Inuyasha','Sango'],
        text: 'have horrible short term memory',
      },
      optionTwo: {
        votes: [],
        text: 'have horrible long term memory'
      }
    },
     {
      id: '6ni6ok3ym7mf1p33lnez',
      author: 'Kikyo',
      timestamp: 1468479767190,
      optionOne: {
        votes: ['Inuyasha','Sango'],
        text: 'become a superhero',
      },
      optionTwo: {
        votes: [],
        text: 'become a supervillian'
      }
    },
      {
      id: 'am8ehyc8byjqgar0jgpub9',
      author: 'Inuyasha',
      timestamp: 1488579767190,
      optionOne: {
        votes: [],
        text: 'be telekinetic',
      },
      optionTwo: {
        votes: ['Inuyasha','Sango'],
        text: 'be telepathic'
      }
    },
     {
      id: 'loxhs1bqm25b708cmbf3g',
      author: 'Sesshumaro',
      timestamp: 1482579767190,
      optionOne: {
        votes: ['Sango'],
        text: 'be a front-end developer',
      },
      optionTwo: {
        votes: ['Inuyasha'],
        text: 'be a back-end developer'
      }
    },
     {
      id: 'vthrdm985a262al8qx3do',
      author: 'Sango',
      timestamp: 1489579767190,
      optionOne: {
        votes: ['Sesshumaro'],
        text: 'find $50 yourself',
      },
      optionTwo: {
        votes: ['Kikyo'],
        text: 'have your best friend find $500'
      }
    },
     {
      id: 'xj352vofupe1dqz9emx13r',
      author: 'Kikyo',
      timestamp: 1493579767190,
      optionOne: {
        votes: ['Kikyo'],
        text: 'write JavaScript',
      },
      optionTwo: {
        votes: ['Sesshumaro'],
        text: 'write Swift'
      }
    },
  ]
  
  function generateUID () {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
  }
  
  export const  _getUsers =()=>{
    return new Promise((res, rej) => {
      setTimeout(() => res([...users]), 1000)
    })
  }
  
  export const _getQuestions =()=> {
    return new Promise((res, rej) => {
      setTimeout(() => res([...questions]), 1000)
    })
  }
  
  function formatQuestion ({ optionOneText, optionTwoText, author }) {
    return {
      id: generateUID(),
      timestamp: Date.now(),
      author,
      optionOne: {
        votes: [],
        text: optionOneText,
      },
      optionTwo: {
        votes: [],
        text: optionTwoText,
      }
    }
  }
  
  export function _saveQuestion (question) {
    return new Promise((res, rej) => {
      const authedUser = question.author;
      const formattedQuestion = formatQuestion(question)
  
      setTimeout(() => {
        questions = {
          ...questions,
          [formattedQuestion.id]: formattedQuestion
        }
        
        users = {
          ...users,
          [authedUser]: {
            ...users[authedUser],
            questions: users[authedUser].questions.concat([formattedQuestion.id])
          }
        }
  
        res(formattedQuestion)
      }, 1000)
    })
  }
  
  export function _saveQuestionAnswer (authedUser, qid, answer ) {
    return new Promise((res, rej) => {
      setTimeout(() => {
      console.log("selected option ",answer)
          for(let i=0; i<users.length;i++){
            if(users[i].id==authedUser.id){
              let  newObj ={}
                newObj[qid]=answer
              users[i].answers.push(newObj)
              console.log("updated answers "+JSON.stringify(users[i].answers))
            }
          }
          for(let i=0; i<questions.length;i++){
            if(questions[i].id==qid){
              if(answer==="optionOne")
              {
                console.log("option 1")
                questions[i].optionOne.votes.push(authedUser)
              }
              else {
                {
                  console.log("option 2")
                  questions[i].optionTwo.votes.push(authedUser)
                }
              }
            }
          }
 
  
        res()
      }, 500)
    })
  }
  