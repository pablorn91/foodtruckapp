import Image from "next/image";
import useFoodtruck from "../hooks/useFoodtruck";

const Categoria = ({categoria}) => {

    const { categoriaActual ,handleClickCategoria } = useFoodtruck()

    const { nombre, icono, id } = categoria;

  return (
    <div className={`${ categoriaActual?.id === id ? 'bg-amber-400' : '' } flex items-center gap-4 w-full border p-5 hover:bg-amber-400`}>
        <Image
            width={60}
            height={60}
            src={`/assets/img/icono_${icono}.svg`}
            alt="Imagen icono"
        />

        <button
            type="button"
            className="text-xl font-bold hover:cursor-pointer "
            onClick={() => handleClickCategoria(id)}
        >
        {nombre}
        </button>
    </div>
  )
}

export default Categoria