export default function Table() {
  const data = [
    {
      product: "SKU-B37572",
      size: "3,3.5,4",
      profile: "NAT2",
      proxy: "ProxyTest/192.128.1.1",
      status: {
        state: true,
        text: "Failed (Fail Reason)",
      },
    },
    {
      product: "SKU-B450A2",
      size: "3,3.5,4",
      profile: "NAT2",
      proxy: "ProxyTest/192.128.1.1",
      status: {
        state: false,
        text: "Check Out",
      },
    },
    {
      product: "SKU-B37572",
      size: "3,3.5,4",
      profile: "NAT2",
      proxy: "ProxyTest/192.128.1.1",
      status: {
        state: false,
        text: "Idle)",
      },
    },
    {
      product: "SKU-B31202F",
      size: "4, 5.4",
      profile: "NAT2",
      proxy: "ProxyTest/192.128.1.1",
      status: {
        state: false,
        text: "Check Out",
      },
    },
    {
      product: "SKU-B93457U",
      size: "10",
      profile: "NAT2",
      proxy: "ProxyTest/192.128.1.1",
      status: {
        state: false,
        text: "Check Out",
      },
    },
  ];

  return (
    <div class="overflow-hidden border-[1px] border-gray-700 rounded-md my-2">
      <table className="min-w-full">
        <thead className="monoton">
          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td>#</td>
            <td>Product</td>
            <td>Size</td>
            <td>Profile</td>
            <td>Proxy</td>
            <td>Status</td>
            <td colSpan="4">Actions</td>
          </tr>
        </thead>

        <tbody className="exo">
          {data.map(({ product, size, profile, proxy, status }, index) => (
            <tr key={index}>
              <td>
                <input type="checkbox" />
              </td>
              <td>{index + 1}</td>
              <td>{product}</td>
              <td>{size}</td>
              <td>{profile}</td>
              <td>{proxy}</td>
              <td>
                <input type="radio" checked={status.state} />
                <span className="px-1">{status.text}</span>
              </td>

              <td className="w-3">
                <button>
                  <i className="icon small play"></i>
                </button>
              </td>
              <td className="w-3">
                <button>
                  <i className="icon small pause"></i>
                </button>
              </td>
              <td className="w-3">
                <button>
                  <i className="icon small pencil"></i>
                </button>
              </td>
              <td className="w-3">
                <button>
                  <i className="icon small trash"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
