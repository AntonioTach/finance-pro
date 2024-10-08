import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'

const Home = () => {
  const loggedIn = { firstName: 'Antonio', lastName: 'Tach', email: 'antonio@gmail.com'}

  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox 
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || 'Guest'}
            subtext="Access and manage yout account and transactions efficiently"
          />

          <TotalBalanceBox 
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.34}
          />
        </header>

        RECENT TRANSACTIONS
      </div>

      <RightSidebar 
        user={loggedIn}
        transactions={[]}
        banks={[{currentBalance: 124.40}, {currentBalance: 1125.94}]}
      />
    </section>
  )
}

export default Home
