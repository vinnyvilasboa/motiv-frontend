import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap'
import Navbar from '/components/Navbar.js'
import Link from 'next/link'
import Image from 'next/image'
import TopComponent from '../components/TopComponent';
import NetworkComponent from '../components/NetworkComponent';
import CareerComponent from '../components/CareerComponent';


export default function Home() {
    return (
        <div>
            <Head>
                <title>Motiv App</title>
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
                    integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
                    crossOrigin="anonymous"
                />
            </Head>
            <main>
                <TopComponent />
                <NetworkComponent />
                {/* <CareerComponent /> */}
            </main>
            <footer>
                <script src="https://unpkg.com/react/umd/react.production.min.js" async></script>

                <script
                    src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
                    async></script>

                <script
                    src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
                    async></script>
            </footer>
        </div>


    )
}
