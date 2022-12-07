function Button({ styles = '' }) {
    return (
        <button
            className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none rounded-[5px] ${styles}`}
            type="button"
        >
            Get started
        </button>
    );
}

export default Button;
