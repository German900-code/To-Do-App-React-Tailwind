function Filter({ filter, setFilter }) {
  const buttons = [
    { label: "All", value: "all" },
    { label: "Active", value: "active" },
    { label: "Completed", value: "completed" },
  ];

  return (
    <div className="flex gap-3 justify-center mt-6">
      {buttons.map((btn) => (
        <button
          key={btn.value}
          onClick={() => setFilter(btn.value)}
          //   className={`cursor-pointer px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${filter === btn.value ? "bg-orange-500 text-white scale-105" : "bg-orange-100 text-orange-700 hover:bg-orange-200"}`}
          className={`cursor-pointer px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${filter === btn.value ? "bg-black text-white scale-105" : "bg-orange-100 text-orange-700 hover:bg-orange-200"}`}
        >
          {btn.label}
        </button>
      ))}
    </div>
  );
}

export default Filter;
