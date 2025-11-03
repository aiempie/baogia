import { GroupedServicesCategory } from "../components/LayoutTable";

export const servicesExample: GroupedServicesCategory[] = [
  {
    category: "Đăng nhập / Auth",
    features: [
      {
        id: 4,
        feature: "Tạo tài khoản quản lý, đăng nhập bằng email, google",
        description:
          "Phân quyền cho từng user thực hiện môt tác vụ quản lý riêng như đăng bài viết, quản lý khoá học...",
        price: "500",
        checked: false,
        isOptional: false,
        note: "",
      },
    ],
  },
  {
    category: "Trang chủ",
    features: [
      {
        id: 1,
        feature: "Layout website",
        description: "Header, Footer",
        price: "200",
        checked: false,
        isOptional: false,
        note: "",
      },
      {
        id: 5,
        feature: "Trang chủ",
        description:
          "Hero section, giới thiệu, video YouTube, lý do chọn trang web, thành tựu, section các khoá học, đội ngũ giáo viên, ngoại khoá, feedback, báo chí nói gì, ưu đãi",
        price: "400",
        checked: false,
        isOptional: false,
        note: "",
      },
      {
        id: 11,
        feature: "Chức năng tìm kiếm",
        description:
          "Tìm kiếm theo tên khoá học, tên bài viết, tên học viên, tên giáo viên, tên hoạt động ngoại khoá, tên báo chí nói gì, tên đối tác, tên kiến thức hay",
        price: "500",
        checked: false,
        isOptional: true,
        note: "",
      },
    ],
  },
  {
    category: "Trang giới thiệu",
    features: [
      {
        id: 6,
        feature: "Trang giới thiệu",
        description: "Giới thiệu về trang web",
        price: "100",
        checked: false,
        isOptional: true,
        note: "",
      },
      {
        id: 61,
        feature: "Trang báo chí nói gì",
        description: "Báo chí nói gì về trang web",
        price: "100",
        checked: false,
        isOptional: true,
        note: "",
      },
      {
        id: 62,
        feature: "Trang đội ngũ giáo viên",
        description: "Đội ngũ giáo viên của trang web",
        price: "100",
        checked: false,
        isOptional: true,
        note: "",
      },
      {
        id: 63,
        feature: "Trang học viên nói gì",
        description: "Học viên nói gì về trang web",
        price: "100",
        checked: false,
        isOptional: true,
        note: "",
      },
      {
        id: 64,
        feature: "Trang tin tức",
        description:
          "Danh sách các bài viết tin tức, trang cam kết hoạt động, nội quy tham gia khoá học",
        price: "500",
        checked: false,
        isOptional: true,
        note: "",
      },
      {
        id: 65,
        feature: "Trang đối tác",
        description: "Các bài viết về đối tác",
        price: "500",
        checked: false,
        isOptional: true,
        note: "Nếu có sử dụng trang tin tức thì giảm còn 300k",
      },
      {
        id: 66,
        feature: "Trang kiến thức hay",
        description: "Các bài viết về kiến thức hay",
        price: "500",
        checked: false,
        isOptional: true,
        note: "Nếu có sử dụng trang tin tức thì giảm còn 300k",
      },
    ],
  },
  {
    category: "Trang Khoá học",
    features: [
      {
        id: 7,
        feature: "Trang thông tin về khoá học",
        description: "Danh sách các khoá học, thông tin về khoá học",
        price: "1500",
        checked: false,
        isOptional: false,
        note: "",
      },
      {
        id: 8,
        feature: "Trang lịch khai giảng",
        description: "Danh sách lịch khai giảng theo các cơ sở",
        price: "500",
        checked: false,
        isOptional: true,
        note: "",
      },
      {
        id: 81,
        feature: "Trang bài test trình độ",
        description: "Danh sách các bài test trình độ, trang làm bài test",
        price: "2000",
        checked: false,
        isOptional: true,
        note: "",
      },
      {
        id: 82,
        feature: "Trang hoạt động ngoại khoá",
        description: "Danh sách các hoạt động ngoại khoá",
        price: "500",
        checked: false,
        isOptional: true,
        note: "Nếu có sử dụng trang tin tức thì giảm còn 300k",
      },
    ],
  },
  {
    category: "Trang tuyển dụng",
    features: [
      {
        id: 84,
        feature: "Trang tuyển dụng",
        description: "Danh sách các tuyển dụng",
        price: "500",
        checked: false,
        isOptional: true,
        note: "Nếu có sử dụng trang tin tức thì giảm còn 300k",
      },
    ],
  },
  {
    category: "Trang liên hệ",
    features: [
      {
        id: 83,
        feature: "Trang liên hệ",
        description: "Trang liên hệ, google map",
        price: "200",
        checked: false,
        isOptional: true,
        note: "",
      },
    ],
  },
  {
    category: "Trang quản trị",
    features: [
      {
        id: 13,
        feature: "Quản lý bài viết, khoá học, thông tin giới thiệu",
        description:
          "Thêm sửa xoá khoá học, bài viết, chỉnh sửa thông tin về giới thiệu của giáo viên, khoá học...",
        price: "1000",
        checked: false,
        isOptional: false,
        note: "",
      },
      {
        id: 131,
        feature: "Danh sách liên hệ",
        description:
          "Chỉnh sửa thông tin liên hệ, google map, xem danh sách yêu cầu tư vấn, nhận thông báo qua mail, telegram... khi có học viên yêu cầu tư vấn",
        price: "500",
        checked: false,
        isOptional: true,
        note: "",
      },
      {
        id: 14,
        feature: "Sử dụng đa ngôn ngữ cho trang web",
        description:
          "Dịch trang web thành các ngôn ngữ khác nhau (Tiếng Việt/Tiếng Trung/Tiếng Anh..)",
        price: "200",
        checked: false,
        note: "",
      },
    ],
  },
  {
    category: "Hosting, tên miền",
    features: [
      {
        id: 15,
        feature: "Hosting",
        description:
          "Có thể sử dụng hosting miễn phí của Vercel/Netlify nếu nhu cầu của bạn. Tuy nhiên nếu lượng truy cập lớn có thể cần nhắc tới thuê server riêng",
        price: "Miễn phí",
        checked: false,
        note: "Chi phí thuê server không bao gồm trong gói. Giá khoảng từ 200k đến 1tr/tháng tuỳ nhu cầu",
      },
      {
        id: 16,
        feature: "Tên miền",
        description: "Mua domain ở tenten, matbao...",
        price: "",
        checked: false,
        note: "Có thể hỗ trợ khách mua tên miền năm đầu và hướng dẫn gia hạn hằng năm",
      },
      {
        id: 17,
        feature: "Lưu trữ hình ảnh",
        description: "Sử dụng dịch vụ miễn phí của cloudinary/imgur/imgbb",
        price: "Miễn phí",
        checked: false,
        note: "",
      },
      {
        id: 18,
        feature: "Lưu trữ database",
        description:
          "Sử dụng mongodb atlas miễn phí. Nếu số lượng khoá học, bài viết quá lớn thì cần nhắc thuê server riêng",
        price: "Miễn phí",
        checked: false,
        note: "",
      },
    ],
  },
];
