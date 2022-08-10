import { useEffect, useState } from "react";

type TProps = {
  text: string;
};

const NoResult = ({ text }: TProps) => {
  const [value, setValue] = useState(text);

  useEffect(() => {
    setValue(text);
  }, [text]);

  return (
    <div className="min-h-[70vh] flex justify-center">
      <span className="m-auto text-xl">
        <span className="font-bold text-red-500">{value}</span>에 관한
        검색결과가 없습니다.
      </span>
    </div>
  );
};

export default NoResult;
