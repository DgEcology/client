import classes from './header.module.css'
import {FaClover} from "react-icons/fa6"
import Link from "next/link"

const Header = () => {
    return (
        <div className={classes.wrapper}>
            <nav className={classes.container}>

                <Link className={classes.logo} href={'/main'}>
                    <FaClover
                        color={'rgb(5 150 105)'}
                        size={30}

                    />
                    <span>Клевер</span>
                </Link>
                <Link href={'/stats'} className={classes.link}>
                    Статистика
                </Link>
                <Link href={'/account'} className={classes.link}>
                    Аккаунт
                </Link>


            </nav>
        </div>

    )
}

export default Header