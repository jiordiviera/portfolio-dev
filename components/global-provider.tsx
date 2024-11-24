"use client"
import React from 'react'
import {Header} from "@/app/_components/Header";
import {Footer} from "@/app/_components/Footer";
import {MobHeader} from "@/components/mob-header";
import {ThemeProvider} from "@/components/theme-provider";
import {Toaster} from "@/components/ui/sonner";
import { PageTransition } from "@/components/PageTransition";
import { Provider, useStore } from "react-redux";
import { makeStore } from "@/redux/store";
import { PersistGate } from 'redux-persist/integration/react';

const GlobalProvider = ({ children }: {children: React.ReactNode;}) => {
   const {store,persistor} = makeStore()
    return (
        <Provider store={store}>
                  <PersistGate loading={null} persistor={persistor}>
                <ThemeProvider attribute="class"
                defaultTheme="system"
          enableSystem
                    disableTransitionOnChange
                >
            <Header/>
                    <PageTransition>
                        {children}
                        </PageTransition>
                    <MobHeader />
                    <Footer/>
        <Toaster/>
                </ThemeProvider>
                </PersistGate>
                </Provider>
  )
}

export default GlobalProvider
