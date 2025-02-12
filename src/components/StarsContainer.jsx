import { FaRegStar, FaStar } from "react-icons/fa";

function StarsContainer({ rate, length }) {
  return (
    <ul className=" flex gap-2 text-2xl">
      {Array.from({ length }, (_, index) =>
        index + 1 <= rate ? (
          <li key={index}>
            <FaStar className="text-orange-primary" />
          </li>
        ) : (
          <li key={index}>
            <FaRegStar className="text-orange-primary" />
          </li>
        )
      )}
    </ul>
  );
}

export default StarsContainer;
