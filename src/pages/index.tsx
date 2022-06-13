import { GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home({dados}) {
  return (
    <>
      {dados.map((d) => {
        return (
          <main>
            <p key={d.name}>{d.name}</p>
            <p key={d.name}>{d.assign}</p>
            <p key={d.name}>{d.age}</p>
          </main>
        )
      })}
    </>
  )
}

export const getStaticProps: GetStaticProps = () => {
  const dados = require('../../public/dados.json');

  return {
    props: {
      dados
    },
    revalidate: 60 * 60
  }
}