export default function MyButton({ text }) {
  return (
    <button
      className="px-4 py-2 rounded-full bg-primary text-white font-semibold hover:bg-secondary transition duration-300 shadow-lg hover:shadow-none"
    >
      {text}
    </button>
  );
}