import Link from 'next/link'

export default function Navbar() {
    return (
        <nav className="mainNav">
            <div className="logo">Motiv</div>
            <ul className="navList">
                <Link href='/about'><a><li>About</li></a></Link>
                <Link href='/login'><a><li>Login</li></a></Link>
                <Link href='/signup'><a><li>Signup</li></a></Link>
            </ul>

        </nav>
    )
}
        // <div>
        //     <nav className="navbar bg-light">
        //         <div className="container-fluid">
        //             <a className="navbar-brand" href="/">Motiv</a>
        //         </div>
        //             <ul >
        //                 <Link href='/about'><a><li>About</li></a></Link>
        //                 <Link href='/login'><a><li>Login</li></a></Link>
        //                 <Link href='/signup'><a><li>Signup</li></a></Link>
        //             </ul>
        //     </nav>
        // </div>