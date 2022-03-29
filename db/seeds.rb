# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Question.destroy_all
Answer.destroy_all
Vote.destroy_all

clone0 = User.create(username: "Clone0", email:"clone0@stackoverclone.com", password: "123123")
clone1 = User.create(username:"Clone1", email: "clone1@stackoverclone.com", password: "123123")
clone2 = User.create(username:"Clone2", email: "clone2@stackoverclone.com", password: "123123")
clone3 = User.create(username:"Clone3", email: "clone3@stackoverclone.com", password: "123123")
clone4 = User.create(username:"Clone4", email: "clone4@stackoverclone.com", password: "123123")
clone5 = User.create(username:"Clone5", email: "clone5@stackoverclone.com", password: "123123")
clone6 = User.create(username:"Clone6", email: "clone6@stackoverclone.com", password: "123123")
clone7 = User.create(username:"Clone7", email: "clone7@stackoverclone.com", password: "123123")
clone8 = User.create(username:"Clone8", email: "clone8@stackoverclone.com", password: "123123")
clone9 = User.create(username:"Clone9", email: "clone9@stackoverclone.com", password: "123123")
clone10 = User.create(username:"Clone10", email: "clone10@stackoverclone.com", password: "123123")
clone11 = User.create(username:"Clone11", email: "clone11@stackoverclone.com", password: "123123")
clone12 = User.create(username:"Clone12", email: "clone12@stackoverclone.com", password: "123123")
clone13 = User.create(username:"Clone13", email: "clone13@stackoverclone.com", password: "123123")
clone14 = User.create(username:"Clone14", email: "clone14@stackoverclone.com", password: "123123")
clone15 = User.create(username:"Clone15", email: "clone15@stackoverclone.com", password: "123123")
clone16 = User.create(username:"Clone16", email: "clone16@stackoverclone.com", password: "123123")
clone17 = User.create(username:"Clone17", email: "clone17@stackoverclone.com", password: "123123")
clone18 = User.create(username:"Clone18", email: "clone18@stackoverclone.com", password: "123123")
clone19 = User.create(username:"Clone19", email: "clone19@stackoverclone.com", password: "123123")
clone20 = User.create(username:"Clone20", email: "clone20@stackoverclone.com", password: "123123")
clone21 = User.create(username:"Clone21", email: "clone21@stackoverclone.com", password: "123123")
clone22 = User.create(username:"Clone22", email: "clone22@stackoverclone.com", password: "123123")
clone23 = User.create(username:"Clone23", email: "clone23@stackoverclone.com", password: "123123")
clone24 = User.create(username:"Clone24", email: "clone24@stackoverclone.com", password: "223223")
clone25 = User.create(username:"Clone25", email: "clone25@stackoverclone.com", password: "223223")
# clone26 = User.create(username:"Clone26", email: "clone26@stackoverclone.com", password: "223223")
# clone27 = User.create(username:"Clone27", email: "clone27@stackoverclone.com", password: "223223")
# clone28 = User.create(username:"Clone28", email: "clone28@stackoverclone.com", password: "223223")
# clone29 = User.create(username:"Clone29", email: "clone29@stackoverclone.com", password: "223223")
# clone30 = User.create(username:"Clone30", email: "clone30@stackoverclone.com", password: "223223")
# clone31 = User.create(username:"Clone31", email: "clone31@stackoverclone.com", password: "223223")
# clone32 = User.create(username:"Clone32", email: "clone32@stackoverclone.com", password: "123123")
# clone33 = User.create(username:"Clone33", email: "clone33@stackoverclone.com", password: "123123")
# clone34 = User.create(username:"Clone34", email: "clone34@stackoverclone.com", password: "123123")
# clone35 = User.create(username:"Clone35", email: "clone35@stackoverclone.com", password: "123123")
# clone36 = User.create(username:"Clone36", email: "clone36@stackoverclone.com", password: "123123")
# guest demo login acc
clone37 = User.create(username:"Clone37", email: "clone37@stackoverclone.com", password: "09f84231f90j30irvoiqrvjwh3209hd#@!@#F!@dhuiw")

kevin = User.create(username: "kevinle", email:"kevin@stackoverclone.com", password: "123123")
zezima = User.create(username: "Zezima", email:"zezima@stackoverclone.com", password: "123123")
sonic = User.create(username: "Sonic", email:"sonic@stackoverclone.com", password: "123123")
dogelonmars = User.create(username: "dogelon mars", email:"dogelonmars@stackoverclone.com", password: "secretpassword321")
vitalik = User.create(username: "vitalik.eth", email:"vitalikbuterin@ethereum.org", password: "secretpassword321")
mrbeast = User.create(username: "Mr Beast", email:"mrbeast@stackoverclone.com", password: "secretpassword321")




q1 = Question.create!(
  title:"How do I ask a question?", 
  body: "I am new to computers and I have question about my code. How do I post my question?",
  asker_id: clone12.id)

q2 = Question.create!(
  title:"No questions, just saying Hello World!", 
  body: "Hello world I am Clone 36 and I am posting my first message on Stack Overclone.",
  asker_id: clone6.id)

    q2a1 = Answer.create!(
      question_id: q2.id,
      body: "Welcome to the world of Stack Overclone",
      answerer_id: clone4.id
    )
    q2a3 = Answer.create!(
      question_id: q2.id,
      body: "Welcome to the world of Stack Overclone. Clone 16 here.",
      answerer_id: clone16.id
    )
    q2a3 = Answer.create!(
      question_id: q2.id,
      body: "Welcome to the world of Stack Overclone. Clone 8 here.",
      answerer_id: clone8.id
    )

q3 = Question.create!(
  title: "How do I add two numbers in Javascript?",
  body: "Please help me I've been up all night and I can't find out how to add two numbers together. I really want to find out the sum of 5 + 10.",
  asker_id: clone17.id)
      q3a1 = Answer.create!(
        question_id: q3.id,
        body: "Hmm.. tough question. Not sure if you're gonna get an answer for that soon.",
        answerer_id: clone15.id
      )


q4 = Question.create!(
  title: "How do I redirect to the same webpage in my Javascript app??",
  body: "How can I redirect the user from one page to the same page using JQuery or vanilla Javascript?",
  asker_id: clone17.id)

    q4a1 = Answer.create!(
      question_id: q4.id,
      body: "My answer to this question is hello world",
      answerer_id: kevin.id
    )
    q4a2 = Answer.create!(
      question_id: q4.id,
      body: "JQuery is not needed - window.location.replace() will best simulate an HTTP redirect.",
      answerer_id: clone6.id
    )



q5 = Question.create!(
  title:"How do I get the balance of an account in Ethereum?",
  body: "How can I programmatically discover how much ETH is in a given account on the Ethereum blockchain?",
  asker_id: clone11.id)

    q5a1 = Answer.create!(
      question_id: q5.id,
      body: "The 'for-each' loop works, but also a very short and simple way to get the balance is simply adding the await for the function:
      \nvar bal = await web3.eth.getBalance(accounts[0]);
      \nor if you want to display it directly:
      \nconsole.log('balance = : ', await web3.eth.getBalance(accounts[0]));",
      answerer_id: clone13.id
    )

    q5a2 = Answer.create!(
      question_id: q5.id,
      body: "My answer to this question is hello world",
      answerer_id: clone14.id
    )


q6 = Question.create!(
  title: "I’m going to be straight up with you!",
  body:"I’m going to be straight up with you! in my own humble opinion without being sentimental of course, without offending anyone who thinks differently from my own point of view, but also by looking into this matter with a distinct perspective, I would like to say I have nothing to say.",
  asker_id: clone8.id)

    q6a1= Answer.create!(
      question_id: q6.id,
      body: "lol! i got trolled!!!!!!",
      answerer_id: clone15.id
    )

    q6a2= Answer.create!(
      question_id: q6.id,
      body: "I am Dogelon. Dogelon Mars. Join me and together we will reach the stars.",
      answerer_id: dogelonmars.id
    )


q7 = Question.create!(
  title: "How to build a linux based custom OS with GUI for Raspberry Pi 3B+",
  body:"I am new to embedded linux, in order to learn how to build custom linux based OS from scratch I have decided to use buildroot.
  \nI want to build a GUI based OS RaspberryPi 3B+ (or 3B) similar to that of Raspbian OS, from scratch. How do I go about this?
  \nBy googling, I was able to find a few resources that teach how to build a non-GUI based minimal OS, and could not find any for GUI based.
  \nLooking for information and/or resources on how I can do this.",
  asker_id: zezima.id)

    q7a1 = Answer.create!(
      question_id: q7.id,
      body: "Hey this I think you stumbled on the wrong site. This isn't Stack Overflow, so you might not get an answer for this.",
      answerer_id: clone0.id
    )

    q7a2 = Answer.create!(
      question_id: q7.id,
      body: "check out stackoverflow.com",
      answerer_id: clone5.id
    )

q8 = Question.create!(
  title: "How to render timers on map function, each starting on different dates and updating every minute?",
  body: "I'm making an order taking app and I need to render the order name and how long it takes to cook. Each order has the time it was sent to the kitchen, I need to give each order a timer that displays how many minutes it's taking to prepare.
  \nI know I need to use useState to use the Set to update and useEffect to , but if I use both inside a function, it becomes a hook, and apparently I can't use that hook inside the map callback.",
  asker_id: clone10.id
)


