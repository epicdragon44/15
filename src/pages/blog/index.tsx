import { Link } from "waku";

const CONTENT = [
  {
    link: "ghost",
    title: "Ghost",
    date: "2022",
  },
];

export default async function Blog() {
  return (
    <div className="w-full max-w-sm">
      <table className="table-auto my-2 w-full border-collapse border border-stone-200 shadow-sm">
        <thead className="bg-stone-300/50 shadow-inner select-none">
          <td className="translate-x-1 py-1">Title</td>
          <td className="translate-x-1 py-1">Date</td>
        </thead>
        <tbody className="divide-y">
          {CONTENT.map((item, index) => (
            <tr
              key={index}
              className="translate-x-1 hover:translate-x-3 transition-all select-none"
            >
              <td>
                <Link to={`/blog/${item.link}`}>{item.title}</Link>
              </td>
              <td>{item.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
