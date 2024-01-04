import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import ProductListPage from "./pages/ProductListPage";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProtectedRoutesComponent from "./components/ProtectedRoutesComponent";
import UserProfilePage from "./pages/user/UserProfilePage";
import UserOrdersPage from "./pages/user/UserOrdersPage";
import UserCartDetailsPage from "./pages/user/UserCartDetailsPage";
import UserOrderDetailsPage from "./pages/user/UserOrderDetailsPage";
import AdminUsersPage from "./pages/admin/AdminUsersPage";
import AdminProductsPage from "./pages/admin/AdminProductsPage";
import AdminOrdersPage from "./pages/admin/AdminOrdersPage";
import AdminOrderDetailsPage from "./pages/admin/AdminOrderDetailsPage";
import AdminEditUserPage from "./pages/admin/AdminEditUserPage";
import AdminEditProductPage from "./pages/admin/AdminEditProductPage";
import AdminCreateProductPage from "./pages/admin/AdminCreateProductPage";
import AdminChatsPage from "./pages/admin/AdminChatsPage";
import AdminAnalyticsPage from "./pages/admin/AdminAnalyticsPage";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import RoutesWithUserChatComponent from "./components/user/RoutesWithUserChatComponent";
import ScrollToTop from "./utils/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <HeaderComponent />
      <Routes>
        <Route element={<RoutesWithUserChatComponent />}>

          {/* Publicly available routes */}
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/product-list" element={<ProductListPage />}></Route>
          <Route path="/product-details" element={<ProductDetailsPage />}></Route>
          <Route path="/cart" element={<CartPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/register" element={<RegisterPage />}></Route>
          <Route path="/*" element="Page not exists 404"></Route>
        </Route>

        {/* protected user pages */}
        <Route element={<ProtectedRoutesComponent admin={false} />}>
          <Route path="/user" element={<UserProfilePage />}></Route>
          <Route path="/user/my-orders" element={<UserOrdersPage />}></Route>
          <Route path="/user/cart" element={<UserCartDetailsPage />}></Route>
          <Route path="/user/order-details" element={<UserOrderDetailsPage />}></Route>
        </Route>




        {/* admin protected pages */}
        <Route element={<ProtectedRoutesComponent admin={true} />}>
          <Route path="/admin/users" element={<AdminUsersPage />}></Route>
          <Route path="/admin/edit-user" element={<AdminEditUserPage />}></Route>
          <Route path="/admin/products" element={<AdminProductsPage />}></Route>
          <Route path="/admin/create-new-product" element={<AdminCreateProductPage />}></Route>
          <Route path="/admin/edit-product" element={<AdminEditProductPage />}></Route>
          <Route path="/admin/orders" element={<AdminOrdersPage />}></Route>
          <Route path="/admin/order-details" element={<AdminOrderDetailsPage />}></Route>
          <Route path="/admin/chats" element={<AdminChatsPage />}></Route>
          <Route path="/admin/analytics" element={<AdminAnalyticsPage />}></Route>
        </Route>
      </Routes>

      <FooterComponent />
    </BrowserRouter>

  );
}

export default App;
