import '../Sass/Sidebar.scss';
import Logo from '../assests/Dropsvg2.svg';
import CategoryIcon from '../assests/categoryIcon.svg';
import ExtrasIcon from '../assests/fish.svg';
import DispatchIcon from '../assests/bike.svg';
import WalletIcon from '../assests/bx-wallet.svg';
import UserIcon from '../assests/bx-user.svg';
import MealsIcon from '../assests/fast-food-outline.svg';
import OrdersIcon from '../assests/basket-outline.svg';
import OverviewIcon from '../assests/view-mode-2.svg';
import SidebarLinks from './SidebarLinks';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="sidebar__logo">
                <img src={Logo} alt=""/>
                <h1>DropMeal</h1>
            </div>
            <ul className="sidebar__links">
                <SidebarLinks 
                    title='Overview'
                    image={OverviewIcon}
                />
                <SidebarLinks 
                    title='Category'
                    image={CategoryIcon}
                />
                <SidebarLinks 
                    title='Meals'
                    image={MealsIcon}
                />
                <SidebarLinks 
                    title='Extras'
                    image={ExtrasIcon}
                />
                <SidebarLinks 
                    title='User'
                    image={UserIcon}
                />
                <SidebarLinks 
                    title='Orders'
                    image={OrdersIcon}
                />
                <SidebarLinks 
                    title='Wallet'
                    image={WalletIcon}
                />
                <SidebarLinks 
                    title='Dispatch'
                    image={DispatchIcon}
                />
            </ul>
        </div>
    );
}

export default Sidebar;
