/* eslint-disable react/no-unescaped-entities */

'use client'

import { Button, Card, Heading, Typography } from '@ensdomains/thorin'
import styled, { css } from 'styled-components'
import Image from 'next/image'

import { Container, Layout } from '@/components/templates'

export default function Home() {
  return (
    <Layout>
      <header />

      <Container as="main" $variant="flexVerticalCenter" $width="large">
        <Image src='/oxENS.png' alt='logo' width="164" height="164" />

        <Heading level="1">OxENS: time to learn about web3!</Heading>

        <ExamplesGrid>
          <Card title="💰 Name/Address Input 💰">
            <Typography color="textSecondary">
              You want to send some moniesss to one of your faves but you also want to have their &apos;resolved&apos; wallet address just to be extraaa sure. Check here!
            </Typography>

            <Button as="a" href="/input">
              View
            </Button>
          </Card>

          <Card title="ENS Profile">
            <Typography color="textSecondary">
              Okay so now you are super sure about the ENS - time to check their profile pic! Show the primary and avatar for an ENS name
            </Typography>

            <Button as="a" href="/profile">
              View
            </Button>
          </Card>
        </ExamplesGrid>
      </Container>

      <footer />
    </Layout>
  )
}

const SvgWrapper = styled.div(
  ({ theme }) => css`
    --size: ${theme.space['16']};
    width: var(--size);
    height: var(--size);

    svg {
      width: 100%;
      height: 100%;
    }
  `
)

const ExamplesGrid = styled.div(
  ({ theme }) => css`
    width: 100%;
    display: grid;
    gap: ${theme.space['4']};
    grid-template-columns: repeat(auto-fit, minmax(${theme.space['64']}, 1fr));
  `
)
