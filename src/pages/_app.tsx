import { AppBridgeProvider } from "@saleor/app-sdk/app-bridge";
import { RoutePropagator } from "@saleor/app-sdk/app-bridge/next";
import { type AppProps } from "next/app";

import { ThemeSynchronizer } from "../modules/ui/theme-synchronizer";
import { NoSSRWrapper } from "../modules/ui/no-ssr-wrapper";

import { appBridgeInstance } from "@/app-bridge-instance";

function NextApp({ Component, pageProps }: AppProps) {
  return (
    <NoSSRWrapper>
      <AppBridgeProvider appBridgeInstance={appBridgeInstance}>
        <ThemeSynchronizer />
        <RoutePropagator />
        <Component {...pageProps} />
      </AppBridgeProvider>
    </NoSSRWrapper>
  );
}

export default NextApp;
