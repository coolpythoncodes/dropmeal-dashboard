import '../Sass/Dispatch.scss'
import TrackButton from './TrackButton';
import Layout from './Layout';

const Dispatch = () => {
    return (
    <Layout>
        <div className='dispatch'>
            <h1>Dispatch</h1>
            <div className="dispatch__tableHead">
                <div className='date'>
                    <h2>Dispatch</h2>
                </div>
                <div>
                    <h2>Reg.</h2>
                </div>
                <div>
                    <h2>IP</h2>
                </div>
                <div>
                    <h2>Status</h2>
                </div>
            </div>
            <div className="dispatch__tableItem">
                <div className='date'>
                    <p>4 hrs ago</p>
                </div>
                <div>
                    <p>delino.ndu@gmail.co</p>
                </div>
                <div>
                    <p>delino.ndu@gmail.co</p>
                </div>
                <div className='status' >
                    <p style={{color:'#007CAB'}}>Active</p>
                    <TrackButton color='#F18701'/>
                </div>
            </div>

            <div className="dispatch__tableItem">
                <div className='date' > 
                    <p>31-12-202</p>
                </div>
                <div>
                    <p>belloray@gmail.com</p>
                </div>
                <div>
                    <p>belloray@gmail.com</p>
                </div>
                <div className='status' >
                    <p>Inactive</p>
                    <TrackButton color='#E6B67A'/>
                </div>
            </div>
        </div>
    </Layout>
    );
}

export default Dispatch;
