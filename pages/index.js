import Head from 'next/head'
import Navbar from '/pages/navbar.js'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
    return (
        <div>
            <Head>
            <Navbar/>
                <div className="title">
                    <h1>Motiv Home Page</h1>
                    <Link href="/about">
                        <a><button type="button" class="btn btn-primary">About</button></a>
                    </Link>
                </div>
            </Head>
        </div>
    )
}
