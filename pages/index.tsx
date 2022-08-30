import Head from 'next/head'
import {loadCases} from "../lib/load-cases";
import CaseList from "@components/case/lists";

export default function Home({cases}) {
  return (
      <div>
      <Head>
        <title>CSGO Keys site</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <CaseList cases={cases} />
      </main>

    </div>
  )
}

export async function getStaticProps() {
    const cases = await loadCases();
    return {props: {cases}};
}