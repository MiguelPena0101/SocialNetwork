const mongoose = require('mongoose');
const User = require('./models/User'); // Import the User model
require('dotenv').config(); // Load environment variables

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/social_network_db');


const users = [
  {
    username: 'johnDoe',
    email: 'john.doe@example.com',
  },
  {
    username: 'janeDoe',
    email: 'jane.doe@example.com',
  },
  {
    username: 'aliceSmith',
    email: 'alice.smith@example.com',
  },
  {
    username: 'bobJones',
    email: 'bob.jones@example.com',
  },
];

const thoughts = [
    {
      thoughtText: 'This is John Doe’s first thought!',
      username: 'johnDoe',
    },
    {
      thoughtText: 'Jane Doe here with a cool thought!',
      username: 'janeDoe',
    },
    {
      thoughtText: 'Alice Smith thinking out loud.',
      username: 'aliceSmith',
    },
    {
      thoughtText: 'Bob Jones is sharing a thought!',
      username: 'bobJones',
    },
  ];

// Function to seed the database
const seedDatabase = async () => {
    try {
      // Clear existing users and thoughts
      await User.deleteMany({});
      await Thought.deleteMany({});
  
      // Insert users
      const createdUsers = await User.insertMany(users);
      console.log('Users have been successfully added!');
  
      // Insert thoughts and associate them with users
      for (let thought of thoughts) {
        const user = await User.findOne({ username: thought.username });
        const newThought = await Thought.create({ ...thought });
        // Add thought to the user's thoughts array
        user.thoughts.push(newThought._id);
        await user.save();
      }
  
      console.log('Thoughts have been successfully added and linked to users!');
      mongoose.connection.close(); // Close the connection after seeding
    } catch (err) {
      console.error(err);
      mongoose.connection.close(); // Close connection on error
    }
  };
  
  seedDatabase();
