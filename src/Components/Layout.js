import Sidebar from './Sidebar';
import '../Sass/Layout.scss';
import Header from './Header';

const Layout = ({children}) => {
    return (
        <div className='layout'>
            <Sidebar />
            <div className="main">
                <Header />
                <div
                    style={{
                        marginTop:'1.5rem'
                    }}
                >
                    {children}
                </div>
            </div>
                
        </div>
    );
}

export default Layout;
