export const passportServices = [
  {
    category: "Trang Passport",
    features: [
      {
        id: 14,
        feature: "Layout trang Passport",
        description:
          "Quét QR để đăng nhập, show thông tin khách, trò chơi thu thập thông tin của khách",
        price: "2000",
        checked: false,
        isOptional: false,
        note: "Trang đầu hiển thị thông tin của khách dạng passport, sau khi mở trang ra thì có phần chơi mini game với khách để thu thập thông tin. Cần confirm mỗi người sẽ có 1 mã QR để quét, khi quét thì đăng nhập hay mã QR dẫn tới 1 trang nhập thông tin để đăng ký",
      },
    ],
  },
  {
    category: "Trang thu thập logo",
    features: [
      {
        id: 13,
        feature: "Trang nhận logo",
        description:
          "Sau mỗi trò chơi của ban tổ chức thì show logo, Khách sẽ thu thập logo và sau này có thể hiện lên passport",
        price: "1000",
        checked: false,
        isOptional: false,
        note: "Ý tưởng là sau mỗi trò chơi thì quản trò sẽ hiển thị QR để khách quét và nhận logo",
      },
    ],
  },
  {
    category: "Trang thông tin cần thiết",
    features: [
      {
        id: 12,
        feature: "Trang thông báo đoàn",
        description: "Thông tin trưởng đoàn, các đoàn xe, trưởng xe,lưu ý cần thiết cho chuyến đi",
        price: "500",
        checked: false,
        isOptional: false,
        note: "",
      },
      {
        id: 11,
        feature: "Trang feedback",
        description: "Feedback từ khách về trang web, trò chơi, dịch vụ, sản phẩm...",
        price: "500",
        checked: false,
        isOptional: false,
        note: "",
      },
    ],
  },
  {
    category: "Trang quản trị",
    features: [
      {
        id: 1,
        feature: "Trang quét mã cho khách lên xe",
        description: "Khi khách lên xe thì quét mã QR của khách để biết khách đã lên xe hay chưa",
        price: "1000",
        checked: false,
        isOptional: false,
        note: "Có thể làm thêm tính năng kiểm tra xem những đợt sau so với đợt trước đang thiếu những ai (+500)",
      },
      {
        id: 2,
        feature: "Trang quản lý logo",
        description: "Thêm sửa xoá logo, tạo lại QR code",
        price: "500",
        checked: false,
        isOptional: true,
        note: "",
      },
      {
        id: 3,
        feature: "Trang quản lý form trò chơi người dùng",
        description:
          "Xem lại thông tin người dùng nhập, xuất ra file excel/csv... để phục vụ cho việc thống kê",
        price: "300",
        checked: false,
        isOptional: true,
        note: "",
      },
      {
        id: 4,
        feature: "Trang quản lý feedback",
        description:
          "Xem lại feedback từ khách, xuất ra file excel/csv... để phục vụ cho việc thống kê",
        price: "200",
        checked: false,
        isOptional: true,
        note: "",
      },
    ],
  },
];
