import Image from "next/image";

export default function CharacterCard() {
  return (
    <a
      className="col-lg-4 col-md-6 col-sm-6 col-12 mb-4 position-relative text-dark text-decoration-none"
      href="/1"
    >
      <div className="Card_card__35wN0 d-flex flex-column justify-content-center">
        <Image
          className="Card_img__1qgJC img-fluid"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt=""
        ></Image>
        <div className="Card_content__1AEDp">
          <div className="fs-5 fw-bold mb-4">Rick Sanchez</div>
          <div className="">
            <div className="fs-6 fw-normal">Last Location</div>
            <div className="fs-5">Citadel of Ricks</div>
          </div>
        </div>
      </div>
      <div className="Card_badge__21uzr position-absolute badge bg-success">
        Alive
      </div>
    </a>
  );
}
