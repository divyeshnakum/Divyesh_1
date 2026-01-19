import CrossIcon from "../assets/icons/cross-icon.png";
import RightIcon from "../assets/icons/right-icon.png";
import { bgCartColor, borderColor } from "./ColorLayout";
import { createPortal } from "react-dom";

const RowActionMenu = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
    onClick={(e) => e.stopPropagation()}
      className="
        absolute z-30 top-full right-0 mt-2
        bg-white border border-gray-200
        rounded-xl w-[150px] p-2 shadow-md
      "
    >
      <p className="text-xs font-medium text-center mb-2 text-gray-700">
        Update status
      </p>

      <button className="flex items-center gap-2 w-full px-3 py-1.5 border rounded-md text-xs hover:bg-gray-50">
        <img src={RightIcon} className="w-4 h-4" />
        Verify
      </button>

      <button className="flex items-center gap-2 w-full px-3 py-1.5 mt-1 border rounded-md text-xs hover:bg-gray-50">
        <img src={CrossIcon} className="w-4 h-4" />
        Reject
      </button>
    </div>
  );
};

export default RowActionMenu;
