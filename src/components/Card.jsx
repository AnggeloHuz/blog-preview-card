import design from "../assets/illustration-article.svg"
import profile from "../assets/image-avatar.webp"

function Card() {
  return (
    <section className="w-5/6 max-w-[350px] px-5 py-4 flex flex-col gap-4 bg-White rounded-lg border border-Gray-950 shadow-[10px_10px_0px] shadow-Gray-950">
      <img className="rounded-lg" src={design} alt="Design Picture" />

      <div className="flex flex-col gap-3 ">
        <span className="text-xs bg-Yellow w-auto text-Gray-950 font-bold rounded-md self-start px-3 py-1.5">
          Learning
        </span>
        <h6 className="text-xs text-Gray-950">Published 21 Dec 2023</h6>
        <h2 className="text-xl font-bold">
          <a
          target="_blank"
            href="https://developer.mozilla.org/es/docs/Learn_web_development/Getting_started/Your_first_website/Creating_the_content"
            className="cursor-pointer duration-200 transition-all hover:text-Yellow"
          >
            HTML & CSS foundations
          </a>
        </h2>
        <p className="text-sm text-Gray-500">
          These languages are the backbone of every website, defining structure,
          content, and presentation.
        </p>

        <div className="flex gap-3 items-center mt-5">
          <img className="w-8" src={profile} alt="Profile Picture" />
          <h6 className="text-Gray-950 font-bold text-sm">Greg Hooper</h6>
        </div>
      </div>
    </section>
  );
}

export default Card;
