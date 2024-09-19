import { host } from "@/lib/host";
import axios from "axios";

export default async function Verify({ params }: { params: { id: string } }) {
  const response = await axios.post(
    `${host}/api/attendance/verify?secretKey=${params.id}`,
    {},
    { withCredentials: true }
  );

  if (response.status === 200) {
    return (
      <div className="max-w-[900px] w-full p-4 mt-[80px] text-center mx-auto">
        <p className="text-2xl font-bold">Заверено</p>
        <p>Ваше присутствие было заверено.</p>
      </div>
    );
  } else {
    return (
      <div className="max-w-[900px] w-full p-4 mt-[80px] text-center mx-auto">
        <p className="text-2xl font-bold">Ошибка</p>
        <p>Ваше присутствие не было заверено.</p>
      </div>
    );
  }
}
