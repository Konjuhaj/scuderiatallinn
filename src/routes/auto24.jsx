import Image from "../components/image";

export default function Template() {
  const divContent = "{AUTO24CONTENT}";
  return (
    <>
      <Image
        src="src/assets/Hero_1.jpg"
        alt="placeholder"
        customClass="w-full lg:max-h-[calc(100vh-20vh)] object-cover"
      ></Image>
      <div className="auto24">{divContent}</div>
    </>
  );
}
