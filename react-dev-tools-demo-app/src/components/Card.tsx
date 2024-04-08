interface CardProps {
  title: string;
  details: string;
}
export const Card = ({ title, details }: CardProps) => {
  return (
    <div className=" bg-slate-50 p-3 rounded-md  w-[400px] min-h-[120px] drop-shadow-md m-2 text-wrap">
      <h3 className="p-2 text-2xl text-cyan-800">{title}</h3>
      <p className="text-sm p-2  text-stone-600">{details}</p>
    </div>
  );
};
