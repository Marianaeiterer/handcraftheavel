// This data contain the initial data for the database

const users = [
  {
    id: "3958dc9e-712f-4377-85e9-fec4b6a6442a",
    name: "John Doe",
    email: "joedoe@nextmail.com",
    password: "123456",
    image_url: "/users/john-doe.png",
  },
  {
    id: "3958dc9e-742f-4377-85e9-fec4b6a6442a",
    name: "Mary Smith",
    email: "marysmith@nextmail.com",
    password: "789123",
    image_url: "/users/mary-smith.png",
  },
  {
    id: "3958dc9e-737f-4377-85e9-fec4b6a6442a",
    name: "Jane Robinson",
    email: "jane@nextmail.com",
    password: "456789",
    image_url: "/users/jane-robinson.png",
  },
];


const artisans = [
  {
    id: "50ca3e18-62cd-11ee-8c99-0242ac120002",
    name: "Lauren Lautner",
    email: "lauren@nextmail.com",
    password: "333444",
    story:
      "I started to work with textiles in a past job that I started 3 years ago. After I left that job, I found out I really missed working with it, and opened then my own bussiness doing textile works. I like vibrant colors and I hope it can bring joy and happiness to your home!",
    image_url: "/artisans/lauren-lautner.png",
  },
  {
    id: "3958dc9e-787f-4377-85e9-fec4b6a6442a",
    name: "Anastasia Rollins",
    email: "anastasiarollins@nextmail.com",
    password: "567555",
    story:
      "I'm 25 years old and I'm from Los Angeles. I found my passion for handicraft acessories 5 years ago. I love to create different bracelets and necklaces to add style to the visual. Please feel free to reach out to me! I hope my acessories can make you look wonderful!",
    image_url: "/artisans/anastasia-rollins.png",
  },
  {
    id: "76d65c26-f784-44a2-ac19-586678f7c2f2",
    name: "Ethan Smith",
    email: "ethan@nextmail.com",
    password: "999999",
    story:
      "I started to paint when I was 5 years old and it became my passion since then. I like to do paint places where I have been and feel peace. Hope you guys enjoy my art!!",
    image_url: "/artisans/ethan-smith.png",
  },
  {
    id: "d6e15727-9fe1-4961-8c5b-ea44a9bd81aa",
    name: "Liam Baker",
    email: "liambaker@nextmail.com",
    password: "888888",
    story:
      "I enjoy art and decor. I moved a lot during my life and each house I would help my mom to decorate. This always brought me joy, and now having my own bussiness I can help other people fill their home with creativity and life!",
    image_url: "/artisans/liam-baker.png",
  },
  {
    id: "126eed9c-c90c-4ef6-a4a8-fcf7408d3c66",
    name: "William Johnson",
    email: "william@nextmail.com",
    password: "876876",
    story:
      "I'm graduate in arts and graphic design, but my passion to painting started a long time ago during my teenager years. I hope my art can inspire you! ",
    image_url: "/artisans/william-johnson.png",
  },
];

const items = [
  //Lauren Lautner arts
  {
    id: "65836928-49b3-499a-a1d3-4437f2397efd",
    artisan_id: artisans[0].id,
    title: "Dream Catcher",
    price: 6000,
    category: "textiles",
    description: "Beautiful pink dream catcher",
    image_url: "/arts/textile-dream.png",
    status: "available",
  },
  {
    id: "aedc7eda-1bd6-4579-ad15-0e975417b9a9",
    artisan_id: artisans[0].id,
    title: "Hammock",
    price: 20000,
    category: "textiles",
    description:
      "Handmade hammock with beautiful details. To make in a different color please contact me after purchase. ",
    image_url: "/arts/textile-hammock.png",
    status: "available",
  },
  {
    id: "5c92efa6-adc4-4e58-94f0-c961b3965de9",
    artisan_id: artisans[0].id,
    title: "Purse",
    price: 10000,
    category: "textiles",
    description:
      "Colorful purse. It can be used in different occasions and ways.",
    image_url: "/arts/textile-purse.png",
    status: "available",
  },
  {
    id: "db5e7412-0841-459e-befd-dc88deca86c2",
    artisan_id: artisans[0].id,
    title: "Straw Mat",
    price: 8000,
    category: "textiles",
    description:
      "Straw carpet perfect to use inside or outside the house. To choose a different color contact me",
    image_url: "/arts/textile-straw-carpet.png",
    status: "available",
  },
  //Anastasia Rollins arts
  {
    id: "178c98fb-e191-478c-81b7-8188e3d1b254",
    artisan_id: artisans[1].id,
    title: "Bracelets",
    price: 2000,
    category: "accessories",
    description: "Bracelets with different shapes and colors. Adjustable. ",
    image_url: "/arts/accessories-bracelets.png",
    status: "available",
  },
  {
    id: "185a0416-c325-464a-aedc-cd78ed870a9a",
    artisan_id: artisans[1].id,
    title: "Earrings",
    price: 3000,
    category: "accessories",
    description: "Purple earrings, delicate and simple.",
    image_url: "/arts/accessories-earrings-purple.png",
    status: "available",
  },
  {
    id: "f6c07b45-05ee-4b71-895e-6bafd208cb04",
    artisan_id: artisans[1].id,
    title: "Bracelets",
    price: 5000,
    category: "accessories",
    description:
      "Beautiful handmade bracelet with beads of different colors and sizes that matches in a unique way.",
    image_url: "/arts/accessories-green-bracelet.png",
    status: "available",
  },
  {
    id: "1d869bb2-09e1-4203-86a4-601d960e70a3",
    artisan_id: artisans[1].id,
    title: "Earrings",
    price: 4000,
    category: "accessories",
    description: "Exclusive earrings",
    image_url: "/arts/accessories-triangle-earrings.png",
    status: "available",
  },
  //Ethan Smith arts
  {
    id: "3f9c667a-2357-40b5-9313-bb76724cfefc",
    artisan_id: artisans[2].id,
    title: "Cabana", 
    price: 40000,
    category: "arts",
    description:
      "This painting represents my childhood vacations in our cabana.",
    image_url: "/arts/art-cabana.png",
    status: "available",
  },
  {
    id: "c0e150e4-c010-40fa-8732-220e5ec2b3ba",
    artisan_id: artisans[2].id,
    title: "Ocean",
    price: 30000,
    category: "arts",
    description:
      "Ocean abstract painting. The place that most brings me peace.",
    image_url: "/arts/art-ocean.png",
    status: "available",
  },
  {
    id: "1d214321-bd09-4001-8006-506227420f0b",
    artisan_id: artisans[2].id,
    title: "Painting",
    price: 150000,
    category: "arts",
    description: "My most recent painting, realist and photo type.",
    image_url: "/arts/art-river.png",
    status: "available",
  },
  {
    id: "184519a0-31bb-4417-a965-bb5a5059a228",
    artisan_id: artisans[2].id,
    title: "Trail",
    price: 15795,
    category: "arts",
    description: "This a trail that I go often to think and get inspired.",
    image_url: "/arts/art-trail.png",
    status: "available",
  },
  //Liam Baker arts
  {
    id: "bfc40419-a440-49d6-a157-0389ef606501",
    artisan_id: artisans[3].id,
    title: "Pillow",
    price: 3000,
    category: "decor",
    description: "Decorative Throw Pillow",
    image_url: "/arts/decor-pillow.png",
    status: "available",
  },
  {
    id: "21db1005-dd86-4ff5-a961-11ce7fc56b94",
    artisan_id: artisans[3].id,
    title: "Flower Pots",
    price: 8000,
    category: "decor",
    description: "Ceramic Flower Pots",
    image_url: "/arts/decor-ceramic-flower-pots.jpg",
    status: "available",
  },
  {
    id: "c720c179-48a8-4c15-8c25-1e7b89621e11",
    artisan_id: artisans[3].id,
    title: "Woven Bowls",
    price: 5000,
    category: "decor",
    description: "Woven bowls in different sizes",
    image_url: "/arts/decor-woven-bowl.png",
    status: "available",
  },
  {
    id: "2c9c03ee-0531-4632-8adc-cace1eb9d0ce",
    artisan_id: artisans[3].id,
    title: "Storage Tower",
    price: 15000,
    category: "decor",
    description: "Woven 3 Tier Storage Tower",
    image_url: "/arts/decor-woven-storage.png",
    status: "available",
  },
  //William Johnson arts
  {
    id: "2dc6b2f9-0154-48f1-82cf-4621fef537bf",
    artisan_id: artisans[4].id,
    title: "Birds",
    price: 60000,
    category: "art",
    description: "Free",
    image_url: "/arts/art-birds.png",
    status: "available",
  },
  {
    id: "2feb48a5-fd2d-4bfb-9a72-e5d6a117897b",
    artisan_id: artisans[4].id,
    title: "Emotions",
    price: 40000,
    category: "art",
    description: "Emotions",
    image_url: "/arts/art-emotions.png",
    status: "available",
  },
  {
    id: "329914e5-55c4-4464-b338-53f4e5eeff9b",
    artisan_id: artisans[4].id,
    title: "Mountain",
    price: 120000,
    category: "art",
    description: "The Mountain",
    image_url: "/arts/art-mountain.png",
    status: "available",
  },
  {
    id: "2f79c270-de35-498d-ad9d-2d32f971be51",
    artisan_id: artisans[4].id,
    title: "Universe",
    price: 75000,
    category: "art",
    description: "Universe",
    image_url: "/arts/art-sky.png",
    status: "available",
  },
];

const reviews = [
  {
    user_id: users[0].id,
    item_id: items[1].id,
    text: "I bought this hammock and it was amazing! Highly recommend it.",
    date: "2023-12-06",
    rate: 5,
  },
  {
    user_id: users[1].id,
    item_id: items[6].id,
    text: "Beautiful bracelet, it matches different clothes.",
    date: "2024-02-20",
    rate: 4,
  },
  {
    user_id: users[0].id,
    item_id: items[8].id,
    text: "I loved this painting! It brings me joy and peace when I looked at it!",
    date: "2024-01-30",
    rate: 5,
  },
  {
    user_id: users[1].id,
    item_id: items[7].id,
    text: "I love this earrings! It's unique the way they were made!!",
    date: "2024-04-23",
    rate: 5,
  },
  {
    user_id: users[2].id,
    item_id: items[1].id,
    text: "Loved the hammock and it's super nice to use it. The only downside is that you need to have a big space outside between walls to put it.",
    date: "2024-02-17",
    rate: 4,
  },
  {
    user_id: users[2].id,
    item_id: items[10].id,
    text: "This painting looks super real! It brings a lot of light to my office and I love to look at it!",
    date: "2023-12-06",
    rate: 5,
  },
];

module.exports = {
  users,
  artisans,
  items,
  reviews,
};