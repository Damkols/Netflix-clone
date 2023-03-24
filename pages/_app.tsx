import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { AuthProvider } from "@/hooks/useAuth";
import { RecoilRoot } from "recoil";

export default function App({ Component, pageProps }: AppProps) {
 return (
  <RecoilRoot>
   <AuthProvider>
    <Component {...pageProps} />
   </AuthProvider>
  </RecoilRoot>
 );
}
