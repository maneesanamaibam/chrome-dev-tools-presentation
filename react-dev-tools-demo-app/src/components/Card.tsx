interface CardProps {
  title: string;
  details: string;
}
function factorial(n: number): number {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}
export const Card = ({ title, details }: CardProps) => {
  factorial(10);

  return (
    <div className=" bg-slate-50 p-3 rounded-md  w-[400px] min-h-[120px] drop-shadow-md m-2 text-wrap">
      <h3 className="p-2 text-2xl text-cyan-800">{title}</h3>
      <p className="text-sm p-2  text-stone-600">{details}</p>
    </div>
  );
};
