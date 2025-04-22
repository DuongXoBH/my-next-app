export default function SliderButton() {
  return (
    <label className="relative inline-block w-12 h-6">
      <input
        type="checkbox"
        className="sr-only peer"
      />
      <div className="w-full h-full bg-gray-200 rounded-full peer-checked:bg-gray-600 transition duration-300"></div>
      <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition duration-300 peer-checked:translate-x-6"></div>
    </label>
  );
}
