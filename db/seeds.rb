# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Question.destroy_all

test = User.create(username: "test", email:"test@stackoverclone.com", password: "123123")
u1 = User.create(username: "Kevin", email:"kevin@stackoverclone.com", password: "123123")
u2 = User.create(username: "Zezima", email:"zezima@stackoverclone.com", password: "123123")
u3 = User.create(username: "Sonic", email:"sonic@stackoverclone.com", password: "123123")

guest = User.create(username: "clone37", email:"guest@stackoverclone.com", password: "09f84231f90j30irvoiqrvjwh3209hd#@!@#F!@dhuiw")


q1 = Question.create!(
  title:"How do I ask a question?", 
  body: "I am new to computers and I have question about my code. How do I post my question?",
  asker_id: 1)

q2 = Question.create!(
  title:"Hello world ", 
  body: "Hello worldHello worldHello worldHello worldHello worldHello worldHello worldHello worldHello worldHello worldHello worldHello worldHello worldHello worldHello worldHello worldHello worldHello worldHello worldHello worldHello worldHello worldHello worldHello worldHello worldHello worldHello worldHello worldHello worldHello worldHello worldHello worldHello worldHello worldHello worldHello worldHello worldHello worldHello worldHello world",
  asker_id: 2)

q3 = question.create!(
  title: "How do I add two numbers in Javascript?",
  body: "Please help me I've been up all night and I can't find out how to add two numbers together. I really want to find out the sum of 5 + 10.",
  asker_id: 4
)

q4 = question.create!(
  title: "How do I add two numbers in Javascript?",
  body: "Please help me I've been up all night and I can't find out how to add two numbers together. I really want to find out the sum of 5 + 10.",
  asker_id: 4
)

q5 = question.create!(
  title:"Database for ethereum dapp development",
  body: "I want to build a dapp with ethereum blockchain and apache cassandra / mongodb. Is it the correct way to build a blockchain?

My idea is use ethereum to create account and do all ERC-20 token and user credential stuff and cassandra / mongodb as the database for the dapp. I will use nodejs as server to communicate with each other. The reason why I'm trying to do this, is because ethereum blockchain is costly.",
  asker_id:3
)


q6 = question.create!(
  title: "I’m going to be straight up with you!",
  body:"I’m going to be straight up with you! in my own humble opinion without being sentimental of course, without offending anyone who thinks differently from my own point of view,but also by looking into this matter in distinctive perspective, I would like to say I have nothing to say",
  asker_id: 1
)
