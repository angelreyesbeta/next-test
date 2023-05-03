import { FC } from 'react'
import { Inter } from 'next/font/google'
import { Body } from '../Body'
import { Footer } from '../Footer'
import { Navbar } from '../Navbar'

const inter = Inter({ subsets: ['latin'] })

export const MainLayout: FC = ({children}) => {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <Navbar/>
            {children}
            <Body/>
            <Footer/>
        </main>
        
    )
}
