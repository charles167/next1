import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Music, BookOpen, Calendar, Video, Play, ExternalLink, Flame } from 'lucide-react';


const Home = () => {
  const handleCTA = (path) => {
    document.getElementById(path)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const musicLinks = [
    { name: 'Angels (Psalm 91)', url: 'https://open.spotify.com/track/5FqjAN4BAdJu94QAkJMONx' },
    { name: 'Found The One', url: 'https://open.spotify.com/track/5fUC6jwBW6Hza4Q6o2Vwwy' },
    { name: 'Angels Lyric Video', url: 'https://open.spotify.com/track/3I75F8x3qwolUOUoSBE1aG' },
    { name: 'Meaning Instrumental', url: 'https://open.spotify.com/track/0Eg5kaSG5A9b89sLBjC48d' },
  ];

  return (
    <>
      <Helmet>
        <title>A Voice of Fire. A Mind of Vision. A Life of Impact</title>
        <meta name="description" content="Music, books, devotionals, videos, and live events designed to stir your spirit and empower your walk." />
      </Helmet>

      <div className="bg-background text-foreground">

        {/* Hero Section */}
        <section className="relative h-screen w-full flex items-center justify-center text-center text-white overflow-hidden">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover"
            src="/0710.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="absolute inset-0 bg-black bg-opacity-60" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative z-10 p-4"
          >
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
              A Voice of Fire. A Mind of Vision. <br />A Life of Impact.
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 opacity-90">
              Music, books, devotionals, videos, and live events designed to stir your spirit and empower your walk.
            </p>
            <Button
              size="lg"
              className="text-lg px-10 py-6 rounded-full font-bold uppercase tracking-wider"
              onClick={() => handleCTA('main-content')}
            >
              Explore My Work
            </Button>
          </motion.div>
        </section>

      <section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4">
    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Discover More</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {/* Card 1 */}
      <div className="group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <img
          src="five.jpg"
          alt="Vision"
          className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="p-4">
          <h3 className="text-xl font-semibold text-gray-800">Music</h3>
          <p className="text-gray-600 mt-2">Explore the purpose and heart behind our mission.</p>
          <a href="https://open.spotify.com/artist/2vcjogMCAZpBE9uJGGDY6o?si=zGZTJBaUTJOR48t3ZZw3Pw" className="text-blue-600 hover:underline mt-3 inline-block">Learn More →</a>
        </div>
      </div>

      {/* Card 2 */}
      <div className="group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <img
          src="three.jpg"
          alt="Team"
          className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="p-4">
  <h3 className="text-xl font-semibold text-gray-800">Book</h3>
  <p className="text-gray-600 mt-2">Get to know the people who bring our vision to life.</p>
  <Link to="/books" className="text-blue-600 hover:underline mt-3 inline-block">
    Learn More →
  </Link>
</div>

      </div>

      {/* Card 3 */}
      <div className="group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <img
          src="two.jpg"
          alt="Music"
          className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="p-4">
          <h3 className="text-xl font-semibold text-gray-800">video</h3>
          <p className="text-gray-600 mt-2">Dive into our latest songs and creative expressions.</p>
          <a href="https://www.youtube.com/channel/UCin49CgNS72z5wrHBFa5UzQ" className="text-blue-600 hover:underline mt-3 inline-block">Learn More →</a>
        </div>
      </div>

      {/* Card 4 */}
      <div className="group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <img
          src="one.jpg"
          alt="Events"
          className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="p-4">
          <h3 className="text-xl font-semibold text-gray-800">Upcoming Events</h3>
          <p className="text-gray-600 mt-2">Join us for worship nights, workshops, and more.</p>
          <Link to="/events" className="text-blue-600 hover:underline mt-3 inline-block">
    Learn More →
  </Link>
        </div>
      </div>
    </div>
  </div>
</section>




        {/* Main Content */}
        <div id="main-content">
          <section className="py-20 lg:py-32 bg-secondary/20">
            <div className="max-w-6xl mx-auto px-4">
              <Tabs defaultValue="music" className="w-full">
                <TabsList className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-12">
                 
                  <TabsTrigger value="instrumentals">Instrumentals</TabsTrigger>
                </TabsList>

                {/* Music Tab */}
                <TabsContent value="music">
                  <div className="text-center p-8 rounded-lg">
                    <Music className="mx-auto h-12 w-12 text-primary mb-4" />
                    <h3 className="text-3xl font-bold mb-2 text-heading-indigo">Songs that Speak to the Spirit.</h3>
                    <p className="max-w-2xl mx-auto text-muted-foreground mb-6">
                      Faith-infused sounds to encourage, uplift, and inspire.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-6">
                      {musicLinks.slice(0, 4).map((link) => (
                        <Button
                          key={link.name}
                          variant="secondary"
                          onClick={() => handleLink(link.url)}
                          className="w-full justify-start text-left"
                        >
                          <Play className="h-4 w-4 mr-2" />
                          <span className="truncate">{link.name}</span>
                          <ExternalLink className="h-4 w-4 ml-auto text-muted-foreground" />
                        </Button>
                      ))}
                    </div>
                    <Link to="/Explorework">
                      <Button variant="link" className="text-primary">
                        Browse Music →
                      </Button>
                    </Link>
                  </div>
                </TabsContent>

                {/* Books Tab */}
                <TabsContent value="books">
                  <div className="text-center p-8 rounded-lg">
                    <BookOpen className="mx-auto h-12 w-12 text-primary mb-4" />
                    <h3 className="text-3xl font-bold mb-2 text-heading-indigo">Words That Water the Soul.</h3>
                    <p className="max-w-2xl mx-auto text-muted-foreground mb-6">
                      Explore books and devotionals crafted to deepen your faith, renew your mind, and ignite your calling.
                    </p>
                    <Link to="/Explorework">
                      <Button>Browse Books & Devotionals</Button>
                    </Link>
                  </div>
                </TabsContent>

                {/* Events Tab */}
                <TabsContent value="events">
                  <div className="text-center p-8 rounded-lg">
                    <Calendar className="mx-auto h-12 w-12 text-primary mb-4" />
                    <h3 className="text-3xl font-bold mb-2 text-heading-indigo">Experience It Live.</h3>
                    <p className="max-w-2xl mx-auto text-muted-foreground mb-6">
                      Join workshops, worship nights, and community events.
                    </p>
                    <Link to="/events">
                      <Button>See Upcoming Events</Button>
                    </Link>
                  </div>
                </TabsContent>

                {/* Videos Tab */}
                <TabsContent value="videos">
                  <div className="py-12">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {[
                        { id: 'K1Xg8b1I2OU', title: '1000 Hallelujah' },
                        { id: 'WneegcRK89w', title: ' MELODY' },
                        { id: 'F3M8phaFKzc', title: '1000 Hallelujah (Psalm96)' },
                      ].map((video, index) => (
                        <motion.div
                          key={video.id}
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="bg-background rounded-2xl overflow-hidden shadow-md"
                        >
                          <a
                            href={`https://www.youtube.com/watch?v=${video.id}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="aspect-video block relative group"
                          >
                            <img
                              className="w-full h-full object-cover"
                              src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                              alt={video.title}
                            />
                            <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <Play className="h-16 w-16 text-white/80" />
                            </div>
                          </a>
                          <div className="p-4 text-center">
                            <h3 className="font-display text-lg font-bold text-heading-indigo">{video.title}</h3>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                    <div className="text-center mt-12">
                      <Button asChild size="lg" className="rounded-full px-8 py-6 text-base">
                        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                          See More on YouTube
                        </a>
                      </Button>
                    </div>
                  </div>
                </TabsContent>

                {/* Instrumentals Tab */}
                <TabsContent value="instrumentals">
                  <div className="text-center p-8 rounded-xl bg-secondary/10 max-w-3xl mx-auto shadow-md">
                    <Flame className="mx-auto h-12 w-12 text-primary mb-4" />
                    <h3 className="text-3xl font-bold mb-2 text-heading-indigo"> Burn Instrumental</h3>
                    <p className="text-muted-foreground mb-4">
                      Use this instrumental to create your own cover, freestyle, or remix. Let your creativity flow!
                    </p>
                    <audio controls className="w-full mb-4 rounded-lg">
                      <source src="/audio.mp3" type="audio/mp4" />
                      Your browser does not support the audio element.
                    </audio>
                    <a
                      href="/burn-instrumental.mp3"
                      download
                      className="inline-block px-6 py-3 rounded-full bg-primary text-white font-semibold hover:bg-primary/80 transition-colors"
                    >
                      Download Instrumental
                    </a>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Home;
