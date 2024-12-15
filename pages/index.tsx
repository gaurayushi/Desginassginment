import Head from 'next/head';
import PersonalizeSection from '../components/PersonalizeSection';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Personalize UI</title>
        <meta name="description" content="Assignment for Personalize Section UI" />
     
      </Head>
      <main className="flex items-center justify-center min-h-screen bg-yellow-50">
        <PersonalizeSection />
      </main>
    </div>
  );
}
