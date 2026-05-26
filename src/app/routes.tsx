import { createBrowserRouter } from "react-router";

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

export const router = createBrowserRouter([
  {
    path: "/",
    element: <TrangChu />,
  },
  {
    path: "/products",
    element: <TrangDanhMucSanPham />,
  },
  {
    path: "/product/:id",
    element: <TrangSanPham />,
  },
  {
    path: "/product-alt/:id",
    element: <TrangSanPhamAlt />,
  },
  {
    path: "/product-v2/:id",
    element: <TrangSanPhamVariant />,
  },
  {
    path: "/cart",
    element: <TrangGioHang />,
  },
  {
    path: "/checkout",
    element: <TrangThanhToan />,
  },
  {
    path: "/checkout/success",
    element: <ThanhToanThanhCong />,
  },
  {
    path: "/info",
    element: <TrangThongTin />,
  },
  {
    path: "/about-us",
    element: <TrangThongTin />,
  },
  {
    path: "/about",
    element: <TrangThongTin />,
  },
  {
    path: "/aboutus",
    element: <TrangThongTin />,
  },
  {
    path: "/contact",
    element: <TrangLienHe />,
  },
  {
    path: "/account",
    element: <TrangThongTinTaiKhoan />,
  },
  {
    path: "/login",
    element: <DangNhap />,
  },
  {
    path: "/register",
    element: <DangKi />,
  },
  {
    path: "*",
    element: <Trang404 />,
  },
]);
