# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

test = User.create(username: "test", email:"test@stackoverclone.com", password: "123123")
guest = User.create(username: "clone37", email:"guest@stackoverclone.com", password: "09f84231f90j30irvoiqrvjwh3209hd#@!@#F!@dhuiw")