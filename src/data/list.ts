import { servicesExample } from "./example";
import { passportServices } from "./passport";
import { webHocTiengAnh } from "./webHocTiengAnh";

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
];
