function Input({ text }: { text: string }){
    return(
        <input className="px-6 py-3 border-3 bg-white text-gray-900 rounded-none border-black focus:border-primary-red focus:outline-none focus:ring-0" placeholder={ text } /> 
    );
}

export default Input;