import LayoutTable from "./components/LayoutTable";
import { BrowserRouter, Navigate, Route, Routes, useParams } from "react-router-dom";
import { listBaoGia } from "./data/list";

function QuotePage() {
  const params = useParams();
  const id = params.id;
  const item = listBaoGia.find((x) => String(x.id) === String(id));

  if (!item) {
    return <div className="min-h-screen bg-gray-50 p-8">Không tìm thấy báo giá</div>;
  }

  return <LayoutTable {...item} />;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/example" replace />} />
        <Route path=":id" element={<QuotePage />} />
        <Route
          path="*"
          element={<div className="min-h-screen bg-gray-50 p-8">Không tìm thấy trang</div>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
