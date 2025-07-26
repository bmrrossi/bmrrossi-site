import type { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../components/Layout';
import Hero from '../components/Hero';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Bruno Michel Rossi - Software Engineer</title>
        <meta name="description" content="Personal website of Bruno Rossi" />
      </Head>
      
      <Layout>
        <Hero />
        
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="section-title text-white">
              Latest <span className="text-accent">Articles</span>
            </h2>
            
            {/* Blog posts will go here */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((item) => (
                <div 
                  key={item} 
                  className="card-hover bg-dark-700 rounded-xl p-6"
                >
                  <div className="h-48 mb-4 bg-dark-600 rounded-lg animate-pulse"></div>
                  <div className="h-6 w-3/4 mb-3 bg-dark-600 rounded animate-pulse"></div>
                  <div className="h-4 w-full mb-2 bg-dark-600 rounded animate-pulse"></div>
                  <div className="h-4 w-2/3 bg-dark-600 rounded animate-pulse"></div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Home;