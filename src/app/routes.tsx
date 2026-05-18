import { createBrowserRouter } from "react-router";
import LayoutWrapper from "./pages/LayoutWrapper";
import HomePage from "./pages/HomePage";
import ProductCategoryPage from "./pages/ProductCategoryPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ProductDetailAltPage from "./pages/ProductDetailAltPage";
import ProductDetailVariant2Page from "./pages/ProductDetailVariant2Page";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import CheckoutSuccessPage from "./pages/CheckoutSuccessPage";
import InfoPage from "./pages/InfoPage";
import ContactPage from "./pages/ContactPage";
import AccountPage from "./pages/AccountPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import NotFoundPage from "./pages/NotFoundPage";

export const router = createBrowserRouter([
  {
    element: <LayoutWrapper />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/products",
        element: <ProductCategoryPage />,
      },
      {
        path: "/product/:id",
        element: <ProductDetailPage />,
      },
      {
        path: "/product-alt/:id",
        element: <ProductDetailAltPage />,
      },
      {
        path: "/product-v2/:id",
        element: <ProductDetailVariant2Page />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/checkout",
        element: <CheckoutPage />,
      },
      {
        path: "/checkout/success",
        element: <CheckoutSuccessPage />,
      },
      {
        path: "/info",
        element: <InfoPage />,
      },
      {
        path: "/about-us",
        element: <InfoPage />,
      },
      {
        path: "/about",
        element: <InfoPage />,
      },
      {
        path: "/aboutus",
        element: <InfoPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/account",
        element: <AccountPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
]);
