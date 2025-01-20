import Image from "next/image";
export default function MonProfil() {
    return (
      <div>
        <Image
          src="/img/mon-profil.jpg"
          alt="Photo de profil de Agathe Diouf"
          width={200} // largeur de l'image en pixels
          height={200} // hauteur de l'image en pixels
          style={{
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
      </div>
    );
  }