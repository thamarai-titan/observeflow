type Props = {
  title: string
  value: string | number
}

export default function StatsCard({ title, value }: Props) {
  return (
    <div className="p-6 border rounded-xl">
      <p className="text-gray-500">{title}</p>
      <h2 className="text-2xl font-bold">{value}</h2>
    </div>
  );
}