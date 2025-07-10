import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';

const Books = () => {
  return (
    <>
      <Helmet>
        <title>Books Coming Soon - Mayo</title>
        <meta name="description" content="New books and devotionals from Mayoher are coming soon. Stay inspired!" />
      </Helmet>

      <div className="pt-24 bg-background min-h-screen flex flex-col items-center justify-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <BookOpen className="h-16 w-16 text-primary mx-auto mb-6" />
          <h1 className="font-display text-5xl font-bold mb-4 text-heading-indigo">Books Coming Soon</h1>
          <p className="text-lg text-muted-foreground mb-6">
            Our newest devotionals, spiritual guides, and creative reflections are almost here.
          </p>
          <p className="text-sm text-blue-700 italic">
            Stay tuned and sign up for updates—you won’t want to miss the launch!
          </p>
        </motion.div>
      </div>
    </>
  );
};

export default Books;
