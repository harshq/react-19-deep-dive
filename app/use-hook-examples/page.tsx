import UseHookServerComponent from "../components/use-hook";
import { ThemeProvider } from "../components/use-hook/themeContext";
import UseHookClientContext from "../components/use-hook/use-hook-client-context";

export default function UseHookPage() {
    return (
        <ThemeProvider>
            <div className="bg-gradient-to-tr from-teal-100 to-rose-100 w-full min-h-screen overflow-hidden">
                <div className="container mx-auto flex flex-col py-6 px-4 gap-y-6">
                    <h1 className="text-4xl font-bold"><code>use</code> API examples (<a href="#" className="text-blue-700 underline decoration-dashed">blog post</a>)</h1>

                    <section id="use-hook-server min-h-[200px]">
                        <h2 className="text-2xl mb-4 font-semibold">1. Reading Context</h2>
                        <UseHookClientContext />
                    </section>

                    <section id="use-hook-server min-h-[200px]">
                        <h2 className="text-2xl mb-4 font-semibold">2. Streaming data from Server to Client</h2>
                        <UseHookServerComponent />
                    </section>
                </div>
            </div>
        </ThemeProvider>
    )
}