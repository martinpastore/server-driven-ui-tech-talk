export type NavbarComponent = {
    navbar: {
        title: string;
        background: string;
    }
}

export type AlertComponent = {
    alert: {
        title: string;
        text: string;
        background: string;
        color: string;
    }
}

export type CarouselComponent = {
    carousel: {
        items: {
            title: string;
            image: string;
            size: 'sm' | 'md' | 'lg'
        }[]
    }
}
