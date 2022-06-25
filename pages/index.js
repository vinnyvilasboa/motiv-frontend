import Head from 'next/head'
import Navbar from '/components/Navbar.js'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
    return (
        <div>
            <Head>
            </Head>
            <Navbar />
            <h1>Motiv Home Page</h1>
        </div>
    )
}
