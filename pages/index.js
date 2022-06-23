import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
    return (
        <div>
        <Head>
            <div className="title">
                <h1>Motiv Home Page</h1>
                <button type="button" class="btn btn-primary">Primary</button>

            </div>
        </Head>
        </div>
    )
}
// import Head from 'next/head'

// export default function Home() {

//   return (
//     <div>
//       <Head>
//         <title>Motiv Home Page</title>
//         <meta name="description" content="A demo about NextJS and Bootstrap 5" />
//       </Head>

//       <div className="toast align-items-center text-white bg-primary border-0 position-absolute top-50" role="alert" aria-live="assertive" aria-atomic="true">
//         <div className="d-flex">
//           <div className="toast-body">
//             Hello, world! This is a toast message.
//           </div>
//           <button type="button" className="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
//         </div>
//       </div>

//       <div className="collapse" id="navbarToggleExternalContent">
//         <div className="bg-dark p-4">
//           <h5 className="text-white h4">Collapsed content</h5>
//           <span className="text-muted">Toggleable via the navbar brand.</span>
//         </div>
//       </div>
//       <nav className="navbar navbar-dark bg-dark">
//         <div className="container-fluid">
//           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//           </button>
//         </div>
//       </nav>

//       <main>
//         <section className="py-5 text-center container">
//           <div className="row py-lg-5">
//             <div className="col-lg-6 col-md-8 mx-auto">
//               <h1 className="fw-light">Bootstrap 5.1.3 example</h1>
//               <p className="lead text-muted">Short text.</p>
//             </div>
//           </div>
//         </section>
//       </main>

//     </div>
//   )
// }