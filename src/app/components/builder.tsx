import styles from '../page.module.css'
import { AlertComponent, CarouselComponent, ListComponent, NavbarComponent } from '../types/components'

const sizeCards = {
    sm: {
        minWidth: '75px',
        height: '100px',
        fontSize: '12px',
        imageSize: {
            width: '50px',
            height: '80px'
        }
    },
    md: {
        minWidth: '125px',
        height: '100px',
        fontSize: '14px',
        imageSize: {
            width: '50px',
            height: '80px'
        }
    },
    lg: {
        minWidth: '200px',
        height: '100px',
        fontSize: '16px',
        imageSize: {
            width: '50px',
            height: '80px'
        }
    }
}

const Navbar = ({ page }: {page: NavbarComponent}) => {
    return <header className={styles.navbar} style={{ background: page?.navbar?.background }}>
        <h3>{page?.navbar?.title}</h3>
    </header>
}

const Alert = ({ page }: {page: AlertComponent}) => {
    return <div className={styles.alert} style={{ background: page.alert.background, border: `1px solid ${page.alert.color}` }}>
        <p style={{ color: page.alert.color }}>{page.alert.text}</p>
    </div>
}

const Carousel = ({ page }: { page: CarouselComponent }) => {
    return <div className={styles.carousel}>
        {page.carousel.items.map(item => <div style={{ ...sizeCards[item.size] }} className={styles.item} key={item.title}>
            {item.image ? <img style={{ ...sizeCards[item.size].imageSize }} src={item.image} /> : null}
            {<h4>{item.title}</h4>}
        </div>)}
    </div>
}

const List = ({ page }: { page: ListComponent }) => {
    return <div className={styles.list}>
        {page.list.items.map(item => <div className={styles.item} key={item.title}>
            {item.image ? <img width="50px" height="70px" src={item.image} /> : null}
            {<h4>{item.title}</h4>}
        </div>)}
    </div>
}

const Builder = ({ component, page }: { component: string, page: unknown }) => {
    const mapComponent = new Map<string, any>([
        ['navbar', Navbar],
        ['alert', Alert],
        ['carousel', Carousel],
        ['list', List],
    ])
    
    const Component = mapComponent.get(component)!;

    return <Component page={page} />
}

export default Builder;
