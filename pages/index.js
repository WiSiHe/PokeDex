import Head from "next/head";

import Image from "next/image";
import Container from "../components/Container";
import Main from "../components/Main";
import { Block, Card } from "../primitives";

export default function Home() {
  return (
    <Main>
      <Container maxWidth="text">
        <Block top={5}>
          <div style={{ width: "100%", height: "400px", position: "relative" }}>
            <Image src="/images/pokemon.jpg" layout="fill" objectFit="cover" />
          </div>
        </Block>
        <Block top={5}>
          <Card>
            <p>
              heya this is my frontpage, i'm not sure what content there will be here just yet, we
              shall seeeee
            </p>
          </Card>
        </Block>
        <Block top={5}>
          <Card>
            <p>Probably some Sanity content I would think!</p>
          </Card>
        </Block>
      </Container>
    </Main>
  );
}
