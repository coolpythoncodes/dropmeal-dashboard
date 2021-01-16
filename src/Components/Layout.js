import Sidebar from './Sidebar';
import '../Sass/Layout.scss';
import Header from './Header';
import Body from './Body';

const Layout = () => {
    return (
        <div className='layout'>
            {/* SideBar */}
            <Sidebar />
            {/* main */}
            <div className="main">
                <Header />
                {/* header */}
                {/* body */}
                <Body />
            </div>
                
        </div>
    );
}

export default Layout;
