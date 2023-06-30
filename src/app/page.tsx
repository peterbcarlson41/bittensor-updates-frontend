import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center sm:px-24 px-5 pt-5 font-mono">
      <h1 className="sm:text-3xl text-2xl pb-10">Bittensor Updates Signup</h1>
      <div className="bg-slate-100 p-10 rounded-xl">
        <form className="flex flex-col gap-5">
          <input
            type="phone-number"
            placeholder="Phone number"
            className="input input-bordered w-full max-w-xs"
          />
          <select
            className="select w-full max-w-xs text-gray-400 font-normal text-base"
            name="carrier"
            id="carrier"
          >
            <option disabled selected value="Phone Carrier">
              Phone Carrier
            </option>
            <option value="AT&T">AT&T</option>
            <option value="C-Spire">C-Spire</option>
            <option value="Consumer Cellular">Consumer Cellular</option>
            <option value="Google Project Fi">Google Project Fi</option>
            <option value="Metro PCS">Metro PCS</option>
            <option value="Mint Mobile">Mint Mobile</option>
            <option value="Republic Wireless">Republic Wireless</option>
            <option value="Sprint">Sprint</option>
            <option value="Straight Talk">Straight Talk</option>
            <option value="T-Mobile">T-Mobile</option>
            <option value="Ting">Ting</option>
            <option value="Tracfone">Tracfone</option>
            <option value="U.S. Cellular">U.S. Cellular</option>
            <option value="Verizon">Verizon</option>
            <option value="Xfinity Mobile">Xfinity Mobile</option>
          </select>
          <button className="btn btn-primary" type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
