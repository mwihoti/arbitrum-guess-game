import '@rainbow-me/rainbowkit/styles.css'
import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { WagmiProvider, createConfig, http } from "wagmi"
import { arbitrumSepolia } from 'wagmi/chains'

const projectId = process.env.NEXT_PUBLIC_WALLET_PROJECT_ID

const { connectors } = getDefaultWallets({
  appName: 'Guess Game',
  projectId,
  chains: [arbitrumSepolia],
})

const config = createConfig({
  chains: [arbitrumSepolia],
  transports: {
    [arbitrumSepolia.id]: http()
  },
  connectors
})

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider chains={[arbitrumSepolia]}>
          <Component {...pageProps} />
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}

export default MyApp