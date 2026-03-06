type Log = {
  method: string
  endpoint: string
  status: number
  time: string
}

export default function LogsTable({ logs }: { logs: Log[] }) {
  return (
    <table className="w-full border">
      <thead>
        <tr className="border-b">
          <th>Method</th>
          <th>Endpoint</th>
          <th>Status</th>
          <th>Time</th>
        </tr>
      </thead>

      <tbody>
        {logs.map((log, i) => (
          <tr key={i} className="border-b text-center">
            <td>{log.method}</td>
            <td>{log.endpoint}</td>
            <td>{log.status}</td>
            <td>{log.time}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}