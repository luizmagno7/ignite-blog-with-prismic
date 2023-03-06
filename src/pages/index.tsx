import { GetStaticProps } from 'next';

import { getPrismicClient } from '../services/prismic';

import commonStyles from '../styles/common.module.scss';
import styles from './home.module.scss';
import { Logo } from '../components/Logo';
import Header from './../components/Header/index';
import { CardPost } from '../components/CardPost';

interface Post {
  uid?: string;
  first_publication_date: string | null;
  data: {
    title: string;
    subtitle: string;
    author: string;
  };
}

interface PostPagination {
  next_page: string;
  results: Post[];
}

interface HomeProps {
  postsPagination: PostPagination;
}

export default function Home({ postsPagination }: HomeProps) {
  const { next_page, results: posts } = postsPagination;
  console.info("POst", posts);
  return (
    <>
      <Header />
      <main>
      {
        posts.map((post: Post) => {
          return <CardPost { ...post } />
        })
      }
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient({});
  const postsResponse = await prismic.getByType("posts");
  console.info("HOME", postsResponse);

  const { next_page, results } = postsResponse;

  return {
    props: {
      postsPagination: {
        next_page,
        results
      }
    }
  }

  // TODO
};
