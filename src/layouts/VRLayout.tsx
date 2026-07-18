import { Outlet } from "react-router-dom";

export default function VRLayout() {
  return (
    <div className="h-screen w-screen overflow-hidden">
      <Outlet />
    </div>
  );
}