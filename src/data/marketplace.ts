import { GroupedServicesCategory } from "../components/LayoutTable";

export const marketplaceServices: GroupedServicesCategory[] = [
  {
    category: "Xác thực & Phân quyền (Authentication & Authorization)",
    features: [
      {
        id: 9001,
        feature: "Đăng ký / Đăng nhập",
        description: "Hỗ trợ đăng nhập qua Email/Password và Social Login (Google).",
        price: "500",
        checked: false,
        isOptional: false,
        note: "",
      },
      {
        id: 9002,
        feature: "Phân quyền người dùng (RBAC)",
        description:
          "Chia 3 role chính: User (người dùng thường), Shop (người dùng nâng cấp cửa hàng), Admin (quản trị viên)",
        price: "100",
        checked: false,
        isOptional: false,
        note: "",
      },
    ],
  },
  {
    category: "Trang chủ & Thông tin",
    features: [
      {
        id: 9003,
        feature: "Trang chủ (Homepage)",
        description:
          "Hiển thị Grid danh mục chính, Slider Banner quảng cáo. Các Section: 'Sản phẩm dành cho bạn', 'Tin đăng mới nhất'. Tối ưu SEO (Server Side Rendering).",
        price: "500",
        checked: false,
        isOptional: false,
        note: "SSR + edge caching, slider lazy load, đề xuất dựa trên lịch sử xem.",
      },
      {
        id: 9004,
        feature: "Các trang thông tin tĩnh",
        description:
          "Bao gồm: Điều khoản sử dụng, Chính sách bảo mật, Quy định đăng tin, Giải quyết khiếu nại. Sử dụng Layout riêng đơn giản, nội dung tĩnh.",
        price: "200",
        checked: false,
        isOptional: true,
        note: "",
      },
    ],
  },
  {
    category: "Duyệt Danh mục & Tìm kiếm",
    features: [
      {
        id: 9005,
        feature: "Trang danh mục cha",
        description:
          "Hiển thị danh sách các danh mục con (Ví dụ: Xe cộ -> Ô tô, Xe máy). Hiển thị section 'Đối tác uy tín' và sản phẩm nổi bật của ngành hàng đó.",
        price: "500",
        checked: false,
        isOptional: true,
        note: "",
      },
      {
        id: 9006,
        feature: "Trang danh mục con & Filter",
        description:
          "Hiển thị danh sách sản phẩm có phân trang (Pagination/Infinite Scroll). Bộ lọc chi tiết (Giá, Hãng, Khu vực, Tình trạng). Dữ liệu filter lưu trên URL.",
        price: "800",
        checked: false,
        isOptional: false,
        note: "",
      },
    ],
  },
  {
    category: "Chi tiết sản phẩm (Product Detail)",
    features: [
      {
        id: 9007,
        feature: "Hiển thị thông tin chi tiết",
        description:
          "Slider ảnh/video sản phẩm. Thông tin kỹ thuật, giá bán, tình trạng. Nút Call-to-action: Gọi điện (hiện số), Chat ngay.",
        price: "500",
        checked: false,
        isOptional: false,
        note: "",
      },
      {
        id: 9008,
        feature: "Tương tác & Gợi ý",
        description:
          "Khu vực bình luận (cho phép người dùng hỏi đáp công khai). Section 'Tin đăng tương tự' (cùng chuyên mục, cùng mức giá hoặc cùng khu vực).",
        price: "300",
        checked: false,
        isOptional: true,
        note: "",
      },
    ],
  },
  {
    category: "Hệ thống Đăng tin & Quản lý tin",
    features: [
      {
        id: 9009,
        feature: "Trang Đăng tin mới",
        description:
          "Form đa bước (Wizard Form). Cho phép upload 1 video và 3 ảnh. Validate dữ liệu đầu vào chặt chẽ.",
        price: "800",
        checked: false,
        isOptional: false,
        note: "",
      },
      {
        id: 9010,
        feature: "Quản lý tin đăng cá nhân",
        description:
          "Xem danh sách tin: Đã duyệt, Đang chờ duyệt, Bị từ chối. Chức năng: Chỉnh sửa tin, Xóa tin, Đẩy tin.",
        price: "300",
        checked: false,
        isOptional: false,
        note: "",
      },
    ],
  },
  {
    category: "Quản lý Tài khoản & Ví",
    features: [
      {
        id: 9011,
        feature: "Thông tin & Cửa hàng",
        description:
          "Trang hồ sơ cá nhân, xem lượt đánh giá (Rating) từ người khác. Tính năng 'Tạo cửa hàng' chuyển đổi User thường sang User Shop.",
        price: "300",
        checked: false,
        isOptional: false,
        note: "",
      },
      {
        id: 9012,
        feature: "Tin đã lưu",
        description: "Danh sách các sản phẩm người dùng đã thả tim/bookmark để xem lại sau.",
        price: "200",
        checked: false,
        isOptional: true,
        note: "",
      },
      {
        id: 9013,
        feature: "Ví & Dịch vụ trả phí",
        description:
          "Trang nạp tiền (giả lập cổng thanh toán), xem số dư hiện tại ('Đồng Tốt'). Lịch sử giao dịch nạp tiền và trừ tiền khi dùng dịch vụ Đẩy tin.",
        price: "500",
        checked: false,
        isOptional: true,
        note: "",
      },
    ],
  },
  {
    category: "Giao tiếp & Thông báo (Communication)",
    features: [
      {
        id: 9014,
        feature: "Hệ thống Chat Realtime",
        description:
          "Người mua và người bán chat riêng tư. Hỗ trợ gửi tin nhắn văn bản để trả giá, hỏi tình trạng",
        price: "500",
        checked: false,
        isOptional: true,
        note: "",
      },
      {
        id: 9015,
        feature: "Trung tâm Thông báo",
        description:
          "Thông báo hệ thống: 'Nạp tiền thành công', 'Tin đăng đã được duyệt', 'Khuyến mãi mới'. Thông báo user: 'Có người bình luận vào tin của bạn'.",
        price: "300",
        checked: false,
        isOptional: false,
        note: "",
      },
    ],
  },
  {
    category: "Quản trị viên (Admin Panel)",
    features: [
      {
        id: 9016,
        feature: "Dashboard Báo cáo",
        description:
          "Biểu đồ thống kê: Doanh thu nạp tiền hàng tháng, Số lượng user mới, Tổng số tin đăng trong ngày.",
        price: "500",
        checked: false,
        isOptional: true,
        note: "",
      },
      {
        id: 9017,
        feature: "Quản lý Duyệt tin & User",
        description:
          "Danh sách tin chờ duyệt (Duyệt/Từ chối kèm lý do). Quản lý người dùng (Khóa tài khoản vi phạm). Quản lý danh sách Cửa hàng.",
        price: "800",
        checked: false,
        isOptional: false,
        note: "Workflow với queue kiểm duyệt, ghi audit log.",
      },
      {
        id: 9018,
        feature: "Quản lý Tài chính & Marketing",
        description:
          "Quản lý lịch sử nạp tiền (xử lý khiếu nại nạp thẻ). Gửi thông báo khuyến mãi tới toàn bộ user.",
        price: "500",
        checked: false,
        isOptional: true,
        note: "",
      },
      {
        id: 9019,
        feature: "Quản lý banner quảng cáo",
        description: "Cấu hình Banner quảng cáo trang chủ",
        price: "500",
        checked: false,
        isOptional: true,
        note: "",
      },
    ],
  },
];
