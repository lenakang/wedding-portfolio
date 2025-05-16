export default function scroll(target: string) {
    const anchor = document.getElementById(target);
    const headerHeight = parseFloat(
        getComputedStyle(document.documentElement).getPropertyValue(
            "--header_height"
        )
    );

    if (anchor) {
        window.scrollTo({
            top: anchor.offsetTop - headerHeight,
        });
    }
}
