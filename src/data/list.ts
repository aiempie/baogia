import { servicesExample } from "./example";
import { marketplaceServices } from "./marketplace";
import { passportServices } from "./passport";
import { webHocTiengAnh } from "./webHocTiengAnh";
import { webQuanLyBanHangKeToan } from "./webQuanLyBanHangKeToan";

export const listBaoGia = [
  {
    id: "example",
    title: "BẢNG BÁO GIÁ",
    defaultServices: servicesExample,
    day: "NGÀY 27/07/2025",
  },
  {
    id: "web-hoc-tieng-anh",
    title: "Web học tiếng Anh",
    defaultServices: webHocTiengAnh,
    day: "NGÀY 03/11/2025",
  },
  {
    id: "web-passport",
    title: "Web Passport",
    defaultServices: passportServices,
    day: "NGÀY 04/11/2025",
  },
  {
    id: "web-quan-ly-ton-kho-ban-hang-ke-toan",
    title: "Web quản lý tồn kho - bán hàng - kế toán",
    defaultServices: webQuanLyBanHangKeToan,
    day: "NGÀY 19/11/2025",
  },
  {
    id: "bao-gia-san-rao-vat",
    title: "Sàn rao vặt đa ngành",
    defaultServices: marketplaceServices,
    day: "NGÀY 27/11/2025",
  },
];
