import Link from "next/link";
import Container from "../components/Container";
import Image from "next/image";

const Error404 = () => {
  return (
    <Container className="min-h-[70vh] flex flex-col	justify-center items-center ">
      <div className="card min-w-[50vw] min-h-[50vh] bg-base-100 shadow-2xl p-10 items-center">
        <Image
          src={
            "https://www.rsupport.com/ko-kr/wp-content/uploads/sites/2/2015/11/rsupport.svg"
          }
          alt={"Thumbnail"}
          width="200"
          height="200"
          className="transition-all"
        />
        <div className="text-2xl">페이지를 찾을 수 없습니다</div>

        <div className="card-actions ml-auto mt-auto">
          <Link href="/" passHref>
            <button className="btn ">돌아가기</button>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default Error404;
