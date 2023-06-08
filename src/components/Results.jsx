function Results() {
  return (
    <section className="bg-very-dark-cyan rounded-xl p-5">
      <div className="flex justify-between pt-4 pb-3">
        <div>
          <p className="text-white font-bold">Tip Amount</p>
          <p className="text-grayish-cyan text-xs">/ person</p>
        </div>
        <span className="text-strong-cyan font-bold text-3xl">$10.00</span>
      </div>
      <div className="flex justify-between pt-4 pb-3">
        <div>
          <p className="text-white font-bold">Total</p>
          <p className="text-grayish-cyan text-xs">/ person</p>
        </div>
        <span className="text-strong-cyan font-bold text-3xl">$10.00</span>
      </div>
      <div className="pt-4">
        <button className="w-full bg-strong-cyan text-very-dark-cyan text-lg font-bold px-3 py-2 rounded-md">
          RESET
        </button>
      </div>
    </section>
  );
}

export default Results;
