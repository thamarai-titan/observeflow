type Props = {
  message: string
  type: "error" | "warning"
}

export default function Alert({ message, type }: Props) {
  return (
    <div className={`p-4 rounded-lg ${type === "error" ? "bg-red-100" : "bg-yellow-100"}`}>
      {message}
    </div>
  );
}