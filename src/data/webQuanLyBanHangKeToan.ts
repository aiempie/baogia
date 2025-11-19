import { GroupedServicesCategory } from "../components/LayoutTable";

export const webQuanLyBanHangKeToan: GroupedServicesCategory[] = [
  {
    category: "Quản trị Cơ bản (Master Data)",
    features: [
      {
        id: 101,
        feature: "Quản lý Danh mục (Sản phẩm & Nguyên liệu)",
        description:
          "CRUD sản phẩm, nguyên liệu, vật tư; hỗ trợ đa đơn vị (kg, hộp, gam, lít) và quy đổi định lượng.",
        price: "1000",
        checked: false,
        isOptional: false,
        note: "1 màn hình danh sách/chi tiết",
      },
      {
        id: 102,
        feature: "Quản lý Điểm bán & Kho hàng",
        description:
          "Tạo/Sửa điểm bán, kho tổng, tủ bánh; gán nhân sự theo ca và gợi ý sơ đồ lưu trữ.",
        price: "500",
        checked: false,
        isOptional: true,
        note: "1 màn hình chung",
      },
      {
        id: 103,
        feature: "Quản lý Nhà cung cấp & Khách hàng",
        description:
          "Quản lý hồ sơ nhà cung cấp, khách hàng; tagging nhóm và lịch sử giao dịch mua/bán.",
        price: "500",
        checked: false,
        isOptional: true,
        note: "1 màn hình",
      },
    ],
  },
  {
    category: "Quản lý Hàng tồn kho (Inventory)",
    features: [
      {
        id: 104,
        feature: "Mua hàng & Nhập kho (PO/GRN)",
        description:
          "Luồng tạo PO, duyệt, nhận hàng GRN; tự động quy đổi định lượng theo đơn vị chuẩn.",
        price: "2000",
        checked: false,
        isOptional: false,
        note: "2 màn hình (PO & GRN)",
      },
      {
        id: 105,
        feature: "Quản lý Tồn kho & Định mức",
        description: "Báo cáo tồn kho theo kho/điểm bán, thiết lập min-max, biểu đồ realtime.",
        price: "1000",
        checked: false,
        isOptional: true,
        note: "2 màn hình (Báo cáo + cấu hình)",
      },
      {
        id: 106,
        feature: "Nhắc nhở Mua hàng (Cảnh báo)",
        description: "Danh sách cảnh báo nguyên liệu dưới định mức, auto gửi email/Telegram.",
        price: "500",
        checked: false,
        isOptional: true,
        note: "1 màn hình danh sách",
      },
      {
        id: 107,
        feature: "Điều chỉnh Tồn kho",
        description:
          "Ghi nhận hao hụt, hủy; lưu audit log, ảnh minh chứng; phản ánh tồn kho cuối ngày.",
        price: "500",
        checked: false,
        isOptional: true,
        note: "1 phiếu điều chỉnh",
      },
    ],
  },
  {
    category: "Quản lý Sản xuất (Production)",
    features: [
      {
        id: 108,
        feature: "Định mức Nguyên liệu (BOM)",
        description: "Thiết lập công thức bánh, quy đổi đơn vị, versioning BOM theo mùa.",
        price: "1000",
        checked: false,
        isOptional: false,
        note: "1 màn hình BOM",
      },
      {
        id: 109,
        feature: "Lệnh Sản xuất (Work Order)",
        description:
          "Tạo/hoàn thành lệnh sản xuất, tự trừ kho nguyên liệu theo BOM và ghi nhận hao hụt.",
        price: "2000",
        checked: false,
        isOptional: true,
        note: "1 màn hình WO",
      },
      {
        id: 110,
        feature: "Chuyển kho Nội bộ",
        description:
          "Phiếu xuất chuyển bánh từ kho tổng tới từng điểm bán, ký số nội bộ, trạng thái giao nhận.",
        price: "500",
        checked: false,
        isOptional: true,
        note: "1 màn hình",
      },
    ],
  },
  {
    category: "Bán hàng & Kế toán (Sales & Finance)",
    features: [
      {
        id: 111,
        feature: "Bán hàng tại Điểm bán (POS)",
        description:
          "POS nhanh, offline-first, hỗ trợ 2 nhân viên/ca, phương thức thanh toán đa dạng.",
        price: "5000",
        checked: false,
        isOptional: true,
        note: "1 giao diện POS cho nhân viên sử dụng. Nếu không dùng POS thì không cần tính phí này.",
      },
      {
        id: 112,
        feature: "Tổng hợp Giao dịch",
        description: "Danh sách giao dịch, lọc theo ca/điểm bán, xuất Excel/PDF, đối chiếu tồn.",
        price: "1500",
        checked: false,
        isOptional: true,
        note: "1 màn hình",
      },
      {
        id: 113,
        feature: "Quản lý Chi phí Hoạt động",
        description:
          "Phiếu chi điện, internet, thuê mặt bằng; workflow phê duyệt 2 bước; đính kèm hóa đơn.",
        price: "500",
        checked: false,
        isOptional: true,
        note: "1 phiếu chi",
      },
      {
        id: 114,
        feature: "Báo cáo Tổng hợp",
        description:
          "Dashboard doanh thu, chi phí, lợi nhuận gộp theo thời gian/điểm bán; biểu đồ KPI.",
        price: "2000",
        checked: false,
        isOptional: true,
        note: "1 dashboard",
      },
    ],
  },
  {
    category: "Quản lý Nhân sự (HR & Payroll)",
    features: [
      {
        id: 115,
        feature: "Quản lý Nhân viên & Ca làm",
        description: "CRUD nhân viên, phân ca 2 nhân sự/điểm, lịch trực, hạn mức công.",
        price: "1000",
        checked: false,
        isOptional: true,
        note: "1 màn hình",
      },
      {
        id: 116,
        feature: "Điểm danh & Ghi nhận Giờ làm",
        description: "Check-in/out theo điểm bán, QR + GPS, trạng thái ca, xử lý quên chấm công.",
        price: "1000",
        checked: false,
        isOptional: true,
        note: "1 màn hình chấm công",
      },
      {
        id: 117,
        feature: "Tính lương & Hoa hồng",
        description: "Tổng hợp giờ làm, doanh số, tính lương cơ bản + hoa hồng; export bảng lương.",
        price: "2000",
        checked: false,
        isOptional: true,
        note: "1 bảng lương",
      },
    ],
  },
];
