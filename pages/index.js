import Head from "next/head";
import { useRouter } from "next/router";

import Image from "next/image";
import Main from "../components/Main";
import { Block, Card, Grid, GridItem, H1 } from "../primitives";
import styles from "../styles/Home.module.css";

export default function Home() {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <Head>
        <title>Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <Grid center>
          <GridItem base="nine-tenths">
            <Card>
              <p>
                heya this is my frontpage, i'm not sure what content there will be here just yet, we
                shall seeeee
              </p>
            </Card>

            <Block top={2}>
              <div style={{ width: "100%" }}>
                <Image src="/images/pikachu.png" width={500} height={500} />
              </div>
            </Block>
          </GridItem>
        </Grid>
      </Main>
    </div>
  );
}
