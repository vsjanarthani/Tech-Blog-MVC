const { Comment } = require('../models');

const commentData = [
  {
    id: '36abe210-9b08-4435-9dd9-f925230cad1d',
    comment: 'Nice and simple explanation',
    user_id: '557f5ae0-7760-4305-b2b1-40f72a082f0e',
    blog_id: '336290ae-32f7-4ea6-bfd6-716b618c0f22'
  },
  {
    id: '56d82a97-dcf2-46cd-b298-20a0a5b60730',
    comment: 'Well said',
    user_id: '0a9213f9-003e-4fba-9837-e23756924e99',
    blog_id: '840af2a1-61cb-4a54-a071-6c75f63a9302'
  },
  {
    id: '5e6c321e-c9a6-4def-a61f-bf63ff85d083',
    comment: "Can't agree more",
    user_id: '0a9213f9-003e-4fba-9837-e23756924e99',
    blog_id: 'a8e9661a-9692-4167-bc98-6e1f46174aa6'
  },
  {
    id: 'c6f19477-418d-4645-96f2-65897ae84057',
    comment: 'Nailed it!',
    user_id: '1895ee2d-bcf8-4c8c-8146-e56c876f9197',
    blog_id: '336290ae-32f7-4ea6-bfd6-716b618c0f22'
  },
  {
    id: 'f13a1de3-fef9-4552-b0d0-bd3fc0a8f305',
    comment: 'It could have been more detailed',
    user_id: 'e8c9edd0-c059-4f23-b525-a51f8bd7e648',
    blog_id: 'da50e7ec-3dda-41fd-9273-3f6e0f0d7bd7'
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
