import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="h-[80vh] flex flex-col items-center justify-center">
      <h4 className="text-[#003049] text-3xl my-5 font-semibold">
        Not Found Link
      </h4>
      <p className="text-slate-600 text-lg font-medium">
        Could not find requested resource
      </p>
      <Link
        href="/"
        className="px-5 py-3 font-medium text-lg text-white bg-[#003049] hover:bg-white rounded-full duration-100 ease-in border-[#003049] border-2 hover:text-[#003049] mt-5"
      >
        Return Home
      </Link>
    </div>
  );
}
