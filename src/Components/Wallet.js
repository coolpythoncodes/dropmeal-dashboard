import '../Sass/Wallet.scss'

const Wallet = () => {
    return (
        <div className='wallet'>
            <h1>Wallet</h1>
            <div className="wallet__tableHead">
                <div className='date'>
                    <h2>Date</h2>
                </div>
                <div>
                    <h2>User</h2>
                </div>
                <div>
                    <h2>Amount Funded</h2>
                </div>
                <div>
                    <h2>Wallet Balance</h2>
                </div>
            </div>
            <div className="wallet__tableItem">
                <div className='date'>
                    <p>4 hrs ago</p>
                </div>
                <div>
                    <p>delino.ndu@gmail.co</p>
                </div>
                <div>
                    <p>N 5000</p>
                </div>
                <div>
                    <p>N 40,000</p>
                </div>
            </div>
        </div>
    );
}

export default Wallet;
