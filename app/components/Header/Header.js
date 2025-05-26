import Link from "next/link";

const Header = (props) => {
    return (
        <div>
            <Link href={"/"}>Events</Link>
            <Link href={"about-us"}>About us</Link>
            <Link href={"cooperate"}>Cooperate</Link>

        </div>
    );
};

export default Header;