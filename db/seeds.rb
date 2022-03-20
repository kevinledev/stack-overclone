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
guest = User.create(username: "clone37", email:"guest@stackoverclone.com", password: "09f84231f90j30irvoiqrvjwh3209hd#@!@#F!@dhuiw")

q1 = Question.create!(
  title:"How do I ask a question?", 
  body: "I am new to tech site and I have question about my code. How do I post my question?",
  asker_id: 1)

q2 = Question.create!(
  title:"Hello world ", 
  body: "Hello world!Hello world!Hello world!Hello world!Hello world!Hello world!Hello world!Hello world!",
  asker_id: 2)

