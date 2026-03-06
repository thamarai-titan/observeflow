type Props = {
  name: string
  status: "healthy" | "error"
  requests: number
}

export default function ServiceCard({ name, status, requests }: Props) {
  return (
    <div className="p-6 border rounded-xl">
      <h3 className="font-semibold">{name}</h3>

      <p className={`text-sm ${status === "healthy" ? "text-green-500" : "text-red-500"}`}>
        {status}
      </p>

      <p className="text-sm mt-2">
        Requests today: {requests}
      </p>
    </div>
  );
}