function Button({ title, onClick }: { title: string, onClick: () => void }) {
  return (
    <button className="bg-primary-red text-white px-6 py-3 border-4 rounded-none active:translate-x-[6px] active:shadow-none active:translate-y-[6px] border-black shadow-[6px_6px_0_0_black] cursor-pointer transition-all duration-75 hover:brightness-110 border-1"
    onClick={onClick}>
      {title}
    </button>
  );
}


export default Button;