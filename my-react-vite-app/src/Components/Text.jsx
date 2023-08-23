import './text.css'
export default function Text() {
  return (
    <div className="text-white flex flex-col items-center justify-center title h-screen">
      <div>
        <h1 className="font-bold text-4xl heading md:w-2/5 text">Learn to code by<br />watching others</h1>
        <p className="w-full md:w-2/5 mt-5 text paragraph">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Saepe nemo, iusto hic sit soluta cupiditate magni porro,
          similique, nisi amet provident. vitae!
        </p>
      </div>
    </div>
  );
}
