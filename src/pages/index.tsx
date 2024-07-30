import { NextPage } from 'next';
import Head from 'next/head';
import ItemList from '../components/ItemList';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Item Manager</title>
      </Head>
      <h1>Item Manager</h1>
      <ItemList />
    </div>
  );
};

export default Home;
