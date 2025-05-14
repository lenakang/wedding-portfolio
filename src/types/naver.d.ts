export {};

declare global {
    interface Window {
        naver: {
            maps: typeof naver.maps;
        };
    }

    namespace naver {
        namespace maps {
            class LatLng {
                constructor(lat: number, lng: number);
            }

            class Map {
                constructor(
                    element: string | HTMLElement,
                    options: {
                        center: LatLng;
                        zoom: number;
                        scrollWheel?: boolean;
                        draggable?: boolean;
                        pinchZoom?: boolean;
                        disableDoubleClickZoom?: boolean;
                        keyboardShortcuts?: boolean;
                    }
                );
            }

            class Marker {
                constructor(options: { position: LatLng; map: Map });
            }

            class InfoWindow {
                constructor(options: { content: string });
                open(map: Map, marker: Marker): void;
            }
        }
    }
}
