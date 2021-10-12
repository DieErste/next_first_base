import Head from 'next/head'
import Navbar_item from './Navbar_item'

const MainContainer = ({children, keywords}) => {
    return (
        <>
            <Head>
                <meta keywords={"remont, plitka" + keywords}/>
                <title>Главная страница</title>
            </Head>
            <div className="navbar">
                <Navbar_item href={'/'} text="Главная"/>
                <Navbar_item href={'/users'} text="Пользователи"/>
            </div>
            <div>
                {children}
            </div>
            <style jsx>
                {`
                    .navbar {
                        background: orange;
                        padding: 15px;
                    }
                   
                `}
            </style>
        </>
    )
}

export default MainContainer
