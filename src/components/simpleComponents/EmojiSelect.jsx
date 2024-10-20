export function EmojiSelect() {
  return (
    <div>
      <select className="w-6 rounded-none p-0 border-none cursor-pointer appearance-none text-white bg-transparent">
        <option value="reload">{/* 🔄  */}↺ </option>
        <option value="time">⏲️ </option>
        <option value="check">✅ </option>
      </select>
    </div>
  );
}
