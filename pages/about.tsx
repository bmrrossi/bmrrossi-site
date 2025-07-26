import type { NextPage } from 'next';
import Head from 'next/head';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';

const About: NextPage = () => {
  return (
    <Layout>
      <section className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-accent mb-6">About Me</h1>
        <p className="text-gray-300">This is the about page content.</p>
      </section>
    </Layout>
  );
};

export default About;