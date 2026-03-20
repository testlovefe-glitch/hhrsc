/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Category from './pages/Category';
import Cart from './pages/Cart';
import Partner from './pages/Partner';
import Profile from './pages/Profile';
import Team from './pages/Team';
import Orders from './pages/Orders';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import OrderDetails from './pages/OrderDetails';
import Settings from './pages/Settings';
import PersonalInfo from './pages/PersonalInfo';
import MemberDetails from './pages/MemberDetails';
import Sales from './pages/Sales';
import PartnerRecruit from './pages/PartnerRecruit';
import PartnerRecruitDetails from './pages/PartnerRecruitDetails';
import PartnerInvite from './pages/PartnerInvite';
import Checkout from './pages/Checkout';
import Payment from './pages/Payment';
import Addresses from './pages/Addresses';
import Login from './pages/Login';
import Register from './pages/Register';
import SalesDetails from './pages/SalesDetails';
import Withdraw from './pages/Withdraw';
import TeamSales from './pages/TeamSales';
import Coupons from './pages/Coupons';
import MyCoupons from './pages/MyCoupons';
import GroupBuy from './pages/GroupBuy';
import ShareGroupBuy from './pages/ShareGroupBuy';
import PartnerPackage from './pages/PartnerPackage';
import CategoryList from './pages/CategoryList';
import FaqCommission from './pages/FaqCommission';
import FaqUpgrade from './pages/FaqUpgrade';
import FaqInvite from './pages/FaqInvite';
import NewPartnersToday from './pages/NewPartnersToday';
import Leaderboard from './pages/Leaderboard';
import MyCellar from './pages/MyCellar';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="category" element={<Category />} />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="payment" element={<Payment />} />
          <Route path="partner" element={<Partner />} />
          <Route path="partner/recruit" element={<PartnerRecruit />} />
          <Route path="partner/recruit/details" element={<PartnerRecruitDetails />} />
          <Route path="partner/invite" element={<PartnerInvite />} />
          <Route path="partner/new-today" element={<NewPartnersToday />} />
          <Route path="leaderboard" element={<Leaderboard />} />
          <Route path="my-cellar" element={<MyCellar />} />
          <Route path="profile" element={<Profile />} />
          <Route path="team" element={<Team />} />
          <Route path="orders" element={<Orders />} />
          <Route path="products" element={<Products />} />
          <Route path="product/:id" element={<ProductDetails />} />
          <Route path="order/:id" element={<OrderDetails />} />
          <Route path="settings" element={<Settings />} />
          <Route path="settings/profile" element={<PersonalInfo />} />
          <Route path="addresses" element={<Addresses />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="member/:id" element={<MemberDetails />} />
          <Route path="sales" element={<Sales />} />
          <Route path="sales/details" element={<SalesDetails />} />
          <Route path="withdraw" element={<Withdraw />} />
          <Route path="team-sales" element={<TeamSales />} />
          <Route path="coupons" element={<Coupons />} />
          <Route path="my-coupons" element={<MyCoupons />} />
          <Route path="group-buy" element={<GroupBuy />} />
          <Route path="share-group-buy" element={<ShareGroupBuy />} />
          <Route path="partner-package" element={<PartnerPackage />} />
          <Route path="category-list/:type" element={<CategoryList />} />
          <Route path="faq/commission" element={<FaqCommission />} />
          <Route path="faq/upgrade" element={<FaqUpgrade />} />
          <Route path="faq/invite" element={<FaqInvite />} />
        </Route>
      </Routes>
    </Router>
  );
}
