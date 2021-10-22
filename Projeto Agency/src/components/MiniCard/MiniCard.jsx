import { Container, Image, Text } from './MiniCardStyle'
import Search from '../../images/search.png'

const MiniCard = () => {
    return (
        <Container>
            <Image src={Search} />
            <Text>
                Lorem ipsum dolor sit amet, consectetur adip.
            </Text>
        </Container>
    )
}

export default MiniCard
