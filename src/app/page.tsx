import "./page.scss";
import { About, Begin, Hero, People } from "@/components/sections";

export default function Home() {
    return (
        <main className="home">
            <header className="header">
                <div>
                    <h1>lena kang</h1>
                </div>
            </header>
            <Hero />
            <About />
            <Begin />
            <People />
        </main>
    );
}
