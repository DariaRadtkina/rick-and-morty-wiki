import Image from "next/image";

export default function CharacterDetails() {
  return (
    <div className="container d-flex justify-content-center mb-5">
      <div className="d-flex flex-column gap-3">
        <h1 className="text-center">Rick Sanchez</h1>
        <Image
          className="img-fluid"
          alt=""
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
        ></Image>
        <div className=" badge bg-success fs-5">Alive</div>
        <div className="content">
          <div className="">
            <span className="fw-bold">Gender : </span>Male
          </div>
          <div className="">
            <span className="fw-bold">Location: </span>Citadel of Ricks
          </div>
          <div className="">
            <span className="fw-bold">Origin: </span>Earth (C-137)
          </div>
          <div className="">
            <span className="fw-bold">Species: </span>Human
          </div>
        </div>
      </div>
    </div>
  );
}
