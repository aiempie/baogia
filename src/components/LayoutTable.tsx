import { useState } from "react";
import { Check } from "lucide-react";

export interface ServiceItem {
  id: number;
  category: string;
  feature: string;
  description: string;
  price: string;
  checked: boolean;
  isOptional?: boolean;
  note: string;
}

export interface GroupedServicesCategory {
  category: string;
  features: Array<{
    id: number;
    feature: string;
    description: string;
    price: string;
    checked: boolean;
    isOptional?: boolean;
    note: string;
  }>;
}

function flattenGroupedServices(groups: GroupedServicesCategory[]): ServiceItem[] {
  const items: ServiceItem[] = [];
  groups.forEach((group) => {
    group.features.forEach((f) => {
      items.push({
        id: f.id,
        category: group.category,
        feature: f.feature,
        description: f.description,
        price: f.price,
        checked: f.checked,
        isOptional: f.isOptional,
        note: f.note,
      });
    });
  });
  return items;
}

function LayoutTable({
  defaultServices,
  day,
  title = "BẢNG BÁO GIÁ",
}: {
  defaultServices: GroupedServicesCategory[];
  day: string;
  title?: string;
}) {
  const [services, setServices] = useState<ServiceItem[]>(flattenGroupedServices(defaultServices));

  const toggleCheck = (id: number) => {
    setServices(
      services.map((service) =>
        service.id === id ? { ...service, checked: !service.checked } : service,
      ),
    );
  };

  const calculateTotal = () => {
    return services.reduce((total, service) => {
      // Chỉ tính các service được chọn bởi người dùng (không bao gồm service bắt buộc)
      if (
        (service.checked || service.isOptional === false) &&
        service.price !== "Miễn phí" &&
        service.price !== ""
      ) {
        return total + parseInt(service.price);
      }
      return total;
    }, 0);
  };

  const getSelectedCount = () => {
    return services.filter((s) => s.checked || s.isOptional === false).length;
  };

  const groupedServices: { [key: string]: { stt: number; items: ServiceItem[] } } = {};
  let sttCounter = 1;

  services.forEach((service) => {
    if (!groupedServices[service.category]) {
      groupedServices[service.category] = {
        stt: sttCounter++,
        items: [],
      };
    }
    groupedServices[service.category].items.push(service);
  });

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-[1600px] mx-auto bg-white shadow-lg">
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white text-center py-6 border-b-4 border-slate-800">
          <h1 className="text-3xl font-bold tracking-wide">{title}</h1>
          <p className="text-sm mt-2 opacity-90">{day}</p>
        </div>

        <div className="flex">
          {/* Main Table */}
          <div className="flex-1">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-300 px-4 py-3 text-sm font-semibold w-16">
                    STT
                  </th>
                  <th className="border border-slate-300 px-4 py-3 text-sm font-semibold w-48">
                    Nhóm Chức Năng
                  </th>
                  <th className="border border-slate-300 px-4 py-3 text-sm font-semibold w-48">
                    Hạng Mục
                  </th>
                  <th className="border border-slate-300 px-4 py-3 text-sm font-semibold">Mô tả</th>
                  <th className="border border-slate-300 px-4 py-3 text-sm font-semibold w-40">
                    Chi Phí (Triệu VNĐ)
                  </th>
                  <th className="border border-slate-300 px-4 py-3 text-sm font-semibold w-24">
                    Có nhu cầu?
                  </th>
                  <th className="border border-slate-300 px-4 py-3 text-sm font-semibold w-64">
                    Note
                  </th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(groupedServices).map(([category, data]) =>
                  data.items.map((service, index) => (
                    <tr key={service.id} className="hover:bg-slate-50 transition-colors">
                      {index === 0 && (
                        <>
                          <td
                            className="border border-slate-300 px-4 py-3 text-center font-medium text-slate-700"
                            rowSpan={data.items.length}
                          >
                            {data.stt}
                          </td>
                          <td
                            className="border border-slate-300 px-4 py-3 font-medium text-slate-700"
                            rowSpan={data.items.length}
                          >
                            {category}
                          </td>
                        </>
                      )}
                      <td className="border border-slate-300 px-4 py-3 text-sm">
                        {service.feature}
                      </td>
                      <td className="border border-slate-300 px-4 py-3 text-sm text-slate-600">
                        {service.description}
                      </td>
                      <td
                        className="border border-slate-300 px-4 py-3 text-center text-sm font-medium cursor-pointer"
                        onClick={() => service.isOptional !== false && toggleCheck(service.id)}
                      >
                        {service.price}
                      </td>
                      <td
                        className="border border-slate-300 px-4 py-3 text-center cursor-pointer"
                        onClick={() => service.isOptional !== false && toggleCheck(service.id)}
                      >
                        <button
                          onClick={() => service.isOptional !== false && toggleCheck(service.id)}
                          disabled={service.isOptional === false}
                          className={`w-6 h-6 border-2 rounded flex items-center justify-center transition-colors ${
                            service.isOptional === false
                              ? "border-green-500 bg-green-50 cursor-not-allowed"
                              : "border-slate-400 hover:border-blue-500 cursor-pointer"
                          }`}
                        >
                          {(service.checked || service.isOptional === false) && (
                            <Check
                              className={`w-4 h-4 strokeWidth={3} ${
                                service.isOptional === false ? "text-green-600" : "text-blue-600"
                              }`}
                            />
                          )}
                        </button>
                      </td>
                      <td className="border border-slate-300 px-4 py-3 text-sm text-slate-600">
                        {service.note}
                      </td>
                    </tr>
                  )),
                )}
              </tbody>
            </table>
          </div>

          {/* Sidebar Summary */}
          <div className="w-80 border-l border-slate-300">
            <div className="sticky top-0">
              <div className="bg-slate-100 border-b border-slate-300 px-6 py-4">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm font-semibold text-slate-700">Số dịch vụ chọn</span>
                  <span className="text-2xl font-bold text-blue-600">{getSelectedCount()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold text-slate-700">
                    Tổng chi phí (Triệu VNĐ)
                  </span>
                  <span className="text-2xl font-bold text-green-600">{calculateTotal()}</span>
                </div>
              </div>

              <div className="p-6 space-y-6">
                <div>
                  <h3 className="font-semibold text-slate-800 mb-2 text-sm">Bảo hành</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Bảo hành website trong vòng 6 tháng
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-slate-800 mb-2 text-sm">Lưu ý</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Chỉ bảo hành code phải sánh hỗ trợ phát triển. Sau khi nghiệm thu chỉ hỗ trợ
                    hiệu chỉnh, thêm chức năng với bảng báo giá riêng
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-slate-800 mb-2 text-sm">Website sẽ hỗ trợ</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Tối ưu trên mọi mobile, tablet, desktop. SEO Optimization friendly, Security với
                    SSL, form validation, XSS protection, tối ưu tốc độ, lazy loading, compression.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LayoutTable;
