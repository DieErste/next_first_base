import Link from 'next/link'
import styles from '../styles/Navbar_item.module.css'

export default function Navbar_item({text, href}) {
    return (
        <Link href={href}>
            <a className={styles.link}>{text}</a>
        </Link>
    )
}
