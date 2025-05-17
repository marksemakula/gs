import { motion } from 'framer-motion';
import { useState } from 'react';

const blogPosts = [
  {
    id: 1,
    title: "Celebrating Excellence in STEM Education",
    date: "March 15, 2024",
    category: "Academic",
    image: "/images/STEM.png",
    excerpt: "Our students showcase innovative projects at the annual STEM fair..."
  },
  {
    id: 2,
    title: "Sports Day Highlights",
    date: "March 10, 2024",
    category: "Sports",
    image: "/images/gsskawaalasports.jpg",
    excerpt: "Annual sports day brings excitement and healthy competition..."
  },
  {
    id: 3,
    title: "Community Service Initiative",
    date: "March 5, 2024",
    category: "Community",
    image: "/images/communitycleaning.jpg",
    excerpt: "Students lead environmental cleanup campaign in Kawaala..."
  }
];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category.toLowerCase() === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">School Blog</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest news, events, and stories from our school community
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex justify-center gap-4 mb-8">
          {['all', 'academic', 'sports', 'community'].map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full transition-colors
                ${selectedCategory === category 
                  ? 'bg-primary text-dark' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="text-sm text-primary font-medium">
                  {post.category}
                </span>
                <h2 className="text-xl font-bold mt-2 mb-3">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <button className="text-secondary hover:text-primary transition-colors">
                    Read More →
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;