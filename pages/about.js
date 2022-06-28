import Head from 'next/head'
import Navbar from '/components/Navbar.js'
import NetworkComponent from '../components/NetworkComponent';

export default function Home() {
    return (
        <div>
            <Head>
            </Head>
            <NetworkComponent/>
           
        </div>
    )
}