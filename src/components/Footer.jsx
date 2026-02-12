import home from "../assets/home.png"

export default function Footer() {
    return (
        <footer className="flex justify-evenly items-center first bg-white shadow-md h-12 fixed bottom-0 left-0 w-full">
            <img src={home} alt="ícone da página Home" className="bg-emerald-600 rounded-xl w-8 h-8 p-1"/>
        </footer>
    );
}