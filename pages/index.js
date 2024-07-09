import Image from "next/image";

function Home() {
  return (
    <>
      <Image
        loader={() =>
          "https://geekdama.com/wp-content/uploads/2021/03/one-piece-sanji-apaixonado-coracao-720x405.jpg"
        }
        src="one-piece-sanji-apaixonado-coracao-720x405.jpg"
        width={720}
        height={405}
        alt="Imagem de um personagem de anime com coração no lugar dos olhos."
      />
      <h2>Debora Swan</h2>
    </>
  );
}

export default Home;
