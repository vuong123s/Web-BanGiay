import { createBrowserRouter } from "react-router";

import FigmaPageShell from "./components/FigmaPageShell";
import Layout from "./components/Layout";
import BlogPage from "./pages/BlogPage";
import ProductCategoryPage from "./pages/ProductCategoryPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import DangKi from "../imports/DangKi/DangKi";
import DangNhap from "../imports/DangNhập/DangNhập";
import ThanhToanThanhCong from "../imports/ThanhToanThanhCong/ThanhToanThanhCong";
import Trang404 from "../imports/Trang404/Trang404";
import TrangChu from "../imports/TrangChủ/TrangChủ";
import TrangDanhMucSanPham from "../imports/TrangDanhMụcSảnPhẩm/TrangDanhMụcSảnPhẩm";
import TrangGioHang from "../imports/TrangGiỏHang/TrangGiỏHang";
import TrangLienHe from "../imports/TrangLienHệ/TrangLienHệ";
import TrangSanPham from "../imports/TrangSảnPhẩm/TrangSảnPhẩm";
import TrangSanPhamAlt from "../imports/TrangSảnPhẩm-1/TrangSảnPhẩm-4-1553";
import TrangSanPhamVariant from "../imports/TrangSảnPhẩm-1-1/TrangSảnPhẩm-4-3442";
import TrangThanhToan from "../imports/TrangThanhToan/TrangThanhToan";
import TrangThongTin from "../imports/TrangThongTin/TrangThongTin";
import TrangThongTinTaiKhoan from "../imports/TrangThongTinTaiKhoản/TrangThongTinTaiKhoản";

function figmaPage(page: string, element: JSX.Element, designWidth?: number) {
  return (
    <FigmaPageShell designWidth={designWidth} page={page}>
      {element}
    </FigmaPageShell>
  );
}

function appPage(element: JSX.Element) {
  return <Layout>{element}</Layout>;
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: figmaPage("home", <TrangChu />),
  },
  {
    path: "/products",
    element: appPage(<ProductCategoryPage />),
  },
  {
    path: "/product/:id",
    element: appPage(<ProductDetailPage />),
  },
  {
    path: "/blog",
    element: appPage(<BlogPage />),
  },
  {
    path: "/product-alt/:id",
    element: figmaPage("product-alt", <TrangSanPhamAlt />),
  },
  {
    path: "/product-v2/:id",
    element: figmaPage("product-v2", <TrangSanPhamVariant />),
  },
  {
    path: "/cart",
    element: figmaPage("cart", <TrangGioHang />),
  },
  {
    path: "/checkout",
    element: figmaPage("checkout", <TrangThanhToan />),
  },
  {
    path: "/checkout/success",
    element: figmaPage("checkout-success", <ThanhToanThanhCong />),
  },
  {
    path: "/info",
    element: figmaPage("info", <TrangThongTin />),
  },
  {
    path: "/about-us",
    element: figmaPage("about-us", <TrangThongTin />),
  },
  {
    path: "/about",
    element: figmaPage("about", <TrangThongTin />),
  },
  {
    path: "/aboutus",
    element: figmaPage("aboutus", <TrangThongTin />),
  },
  {
    path: "/contact",
    element: figmaPage("contact", <TrangLienHe />),
  },
  {
    path: "/account",
    element: figmaPage("account", <TrangThongTinTaiKhoan />),
  },
  {
    path: "/login",
    element: figmaPage("login", <DangNhap />, 420),
  },
  {
    path: "/register",
    element: figmaPage("register", <DangKi />, 420),
  },
  {
    path: "*",
    element: figmaPage("404", <Trang404 />),
  },
]);
