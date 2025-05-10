export default function TestPage() {
    return (
        <>
            <div>
                <h1>Env Test</h1>
                <p>{process.env.NEXT_PUBLIC_TMAP_API_KEY}</p>
            </div>
        </>
    );
}
