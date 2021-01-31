import '../Sass/Overview.scss';
import ArrowDownIcon from '../assests/arrow-down-fill.svg';
// import {timeFormatDefaultLocale} from 'd3-time-format';
import { 
    // HorizontalGridLines, 
    LineSeries,
    //  VerticalGridLines,
      XAxis, 
      XYPlot, 
      YAxis
    }  from 'react-vis';
import LatestDelivery from './LatestDelivery';
import NewUsers from './NewUsers';
import Layout from './Layout';
import { connect } from 'react-redux';
import { moment, maxStringLength } from '../app/helper';

const Overview = ({users, sales, deli,vat}) => {
    const data = [
        {x: 0, y: 10},
        {x: 1, y: 12},
        {x: 2, y: 11},
        {x: 3, y: 15},
        {x: 4, y: 20},
        {x: 5, y: 30}
      ];
    return (
        <Layout>
        <div className='overview'>
            <h1>Overview</h1>
            <section className="overview__top">
                <div className="overview__topSales">
                    <small>Total Sales</small>
                    <h1>N {sales+deli+vat}</h1>
                </div>
                <div className="overview__topIncome">
                    <small>Total Income</small>
                    <h1>N {deli}</h1>
                </div>
                <div className="overview__topUsers">
                    <small>Total Users</small>
                    <h1>2000</h1>
                </div>
                <div className="overview__topUsers2">
                    <small>Total Users</small>
                    <h1>{users.length}</h1>
                </div>
            </section>

            <section className="overview__middle">
                <div className="overview__middleChart">
                    <div className="chart__header">
                        <h1>Sales Chart</h1>
                        <div>
                            <small>Last 30 days</small>
                            <img src={ArrowDownIcon} alt=""/>
                        </div>
                    </div>
                    <XYPlot height={300} width={400}>
                        <LineSeries 
                            curve="curveBasis"
                            data={data} 
                            color='red'
                            opacity={1}
                            strokeStyle="solid"
                        />
                        {/* <VerticalGridLines /> */}
                        {/* <HorizontalGridLines /> */}
                        <XAxis 
                              attr="x"
                              attrAxis="y"
                              orientation="bottom"
                              tickFormat={function tickFormat(d){return new Date(d).toLocaleDateString()}}
                        />
                        <YAxis />
                    </XYPlot>
                </div>

                <div className="overview__middleDelivery">
                    <h1 className='latest__heading'>Lastest Delivery</h1>
                    <LatestDelivery
                        name='Holland'
                        reference='983298322'
                        amount='5,000'
                        time='1 min'
                    />
                    <LatestDelivery
                        name='Eucharia'
                        reference='983298322'
                        amount='5,000'
                        time='1 min'
                    />
                    <LatestDelivery
                        name='Favor'
                        reference='983298322'
                        amount='5,000'
                        time='1 min'
                    />
                    <LatestDelivery
                        name='Fredrick'
                        reference='983298322'
                        amount='5,000'
                        time='1 min'
                    />
                </div>
            </section>

            <section className="newest__user">
                <h1>Newest Users</h1>
                {
                    users.length>0?
                        users.map((user,i)=>{
                            if(i< 4)
                            return <NewUsers key={i}
                            name={maxStringLength(user.fullname, 15)}
                            time={moment(user.createdAt)}
                        />
                        return ''
                        })
                    :
                    null
                }
            </section>
        </div>
        </Layout>
    );
}
const mapStateToProps = state=>({
    users:state.users,
    sales:state.sales,
    deli:state.deli,
    vat:state.vat
})
export default connect(mapStateToProps)(Overview);
