import React from 'react';
import Link from 'next/link'
import styles from '../styles/NavBar.module.css'

const NavBar: React.FC = () => {
    return (
        <nav className={styles.nav}>
            <Link href='/'>Home</Link>
            <Link href='/product'>Products</Link>
            <Link href='/carbon-footprint'>Carbon Footprint</Link>
            <Link href='/tips'>Tips</Link>
            <Link href='/community'>Community</Link>
        </nav>
    )
}

export default NavBar;