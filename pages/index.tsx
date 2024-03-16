import Head from "next/head";

function Home() {
  return (
    <>
      <Head>
        <title>doesnt.rest</title>
        <meta
          name="description"
          content="awkweb is a computer programmer based in Brooklyn."
        />
      </Head>

      <main>
        <p>Dan doesnt rest.</p>
        <p className="muted">
          {/* <a
            href="https://linkedin.com/in/b0y"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>{" "}
          <a href="https://instagr.am/d6niiel" target="_blank" rel="noreferrer">
            Instagram
          </a>{" "} */}
          <a href="mailto:dan@doesnt.rest" target="_blank" rel="noreferrer">
            Email
          </a>{" "}
        </p>
      </main>
    </>
  );
}

export default Home;
