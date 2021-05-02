const { Blog } = require('../models');

const blogData = [
  {
    id: '336290ae-32f7-4ea6-bfd6-716b618c0f22',
    blog_title: '5 resons why I love JavaScript',
    blog_contents: `1. Its easy to learn, 
    2. JavaScript is employed everywhere on the web,
    3. It gives the power to make rich interface, 
    4. There are many open source projects that provide a useful help at the developer’s add JavaScript,
    5. It is possible to develop a whole JavaScript app from front to back using only JavaScript.`,
    user_id: '0a9213f9-003e-4fba-9837-e23756924e99'
  },
  {
    id: '840af2a1-61cb-4a54-a071-6c75f63a9302',
    blog_title: 'SQL vs NoSQL',
    blog_contents: `1. SQL databases are relational, NoSQL are non-relational.
    2. SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data.
    3. SQL databases are vertically scalable, NoSQL databases are horizontally scalable.
    4. SQL databases are table based, while NoSQL databases are document, key-value, graph or wide-column stores.
    5. SQL databases are better for multi-row transactions, NoSQL are better for unstructured data like documents or JSON.`,
    user_id: '1895ee2d-bcf8-4c8c-8146-e56c876f9197'
  },
  {
    id: '8eec6ba4-21d5-4fa3-9959-b1c6fdb9e4fc',
    blog_title: 'Top 5 reasons why using BootStrap is advantageous',
    blog_contents: `1. Bootstrap is flexible and very easy to use,
    2. Bootstrap is Highly Responsive.
    3. Bootstrap has packaged Javascript modules.
    4. Bootstrap has rich documentation and a helpful community.
    5. Saves a lot of styling time`,
    user_id: '557f5ae0-7760-4305-b2b1-40f72a082f0e'
  },
  {
    id: 'a8e9661a-9692-4167-bc98-6e1f46174aa6',
    blog_title: 'Here is why Wireframes are important for your project planning',
    blog_contents: `Using wireframes early on in the design process forces you and your clients to look objectively at ease of use, conversion paths, element placement and helps point out flaws early. These are all things that lead to intuitive, functional and delightful products.`,
    user_id: 'be88bf2d-e41e-4fa0-937d-7e252cc73404'
  },
  {
    id: 'da50e7ec-3dda-41fd-9273-3f6e0f0d7bd7',
    blog_title: 'What is MVC Architecture',
    blog_contents: `The Model-View-Controller (MVC) is an architectural pattern that separates an application into three main logical components: the model, the view, and the controller.`,
    user_id: 'e8c9edd0-c059-4f23-b525-a51f8bd7e648'
  },
];

const seedBlogs = () => Blog.bulkCreate(blogData);

module.exports = seedBlogs;
