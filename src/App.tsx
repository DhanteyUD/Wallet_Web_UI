/** @format */

import './App.css';
import { Container } from './components/styles/Container.styled';
import { Sidenav } from './components/styles/Sidenav.styled';
import { Dashboard } from './components/styles/Dashboard.styled';
import Sidebar from './components/SideBarComponent/SideBar';
import Header from './components/HeaderComponent/Header';
import Totals from './components/Totals';
import SalesAnalytics from './components/SalesAnalytics';
import SellingProducts from './components/SellingProducts';
import MonthlyEarnings from './components/MonthlyEarnings';
import CustomerActivities from './components/CustomerActivities';

function App() {

  return (
    <>
      <Container>
        <Sidenav>
          <Sidebar />
        </Sidenav>
        <Dashboard>
          <Header />
          <Totals />
          <SalesAnalytics />
          <SellingProducts />
          <div className="App">
            <MonthlyEarnings />
            <CustomerActivities />
          </div>
        </Dashboard>
      </Container>
    </>
  );
}

export default App;
