import '../Sass/Dispatch.scss'
import TrackButton from './TrackButton';
import Layout from './Layout';
import { connect } from 'react-redux';
import { maxStringLength, moment } from '../app/helper';

const Dispatch = ({dispatchers}) => {
    return (
    <Layout>
        <div className='dispatch'>
            <h1>Dispatch</h1>
            <div className="dispatch__tableHead">
                <div className='date'>
                    <h2>Dispatcher</h2>
                </div>
                <div>
                    <h2>Email</h2>
                </div>
                <div>
                    <h2>CreatedAt</h2>
                </div>
                <div>
                    <h2>Status</h2>
                </div>
            </div>
            {
                dispatchers.length>0?
                    dispatchers.map((dispatcher,i)=>(
                        <div key={i} className="dispatch__tableItem">
                        <div className='date'>
                            <p>{maxStringLength(dispatcher.fullname,20)}</p>
                        </div>
                        <div>
                            <p>{maxStringLength(dispatcher.email, 20)}</p>
                        </div>
                        <div>
                            <p>{moment(dispatcher.createdAt)}</p>
                        </div>
                        <div className='status' >
                            <p style={{color:!dispatcher.deleted?'#007CAB':''}}>{!dispatcher.deleted?'Active':'Inactive'}</p>
                            <TrackButton color={!dispatcher.deleted?'#F18701':'#E6B67A'}/>
                        </div>
                    </div>
                    ))
                :
                null
            }

        </div>
    </Layout>
    );
}
const mapStateToProps = state=>({
    dispatchers:state.dispatchers
})
export default connect(mapStateToProps)(Dispatch);
